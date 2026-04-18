#!/usr/bin/env bash
# .claude/hooks/check-git-add-all.sh
#
# PreToolUse hook — blocks accidental `git add -A` / `git add .` which can
# stage local AI tooling state that doesn't belong in this repo.
#
# Background: on 2026-04-18, commit 0bcb4a3 accidentally committed 111K
# lines of .agents/, .claude/skills/, .omc/, .playwright-mcp/, dev
# screenshots, etc. via `git add -A`. The bad commit was wiped via
# force-push (commit 6665ac3 replaced it), but the lesson is permanent:
# never use catch-all staging on this repo.
#
# Implementation note: parses the command via Python shlex (proper shell
# tokenization). An earlier bash-regex implementation had a false-positive
# bug — `git add .gitignore` was wrongly blocked because the `\.` in the
# regex matched the literal dot of `.gitignore`. Token-level matching
# fixes this — only the standalone arguments `-A`, `--all`, `.`, `:/`,
# `*`, `:(top)` are blocked.
#
# Allowed: `git add .gitignore`, `git add path/to/file.tsx`,
#          `git add src/components/`, `git status`, etc.
# Blocked: `git add -A`, `git add --all`, `git add .`,
#          `git add :/`, `git add *`, `git add :(top)`

set -euo pipefail

INPUT="$(cat)"

python3 - <<'PY' "$INPUT"
import json, sys, shlex, re

BLOCK_MSG = """BLOCKED: catch-all `git add` is forbidden on this repo.

REASON
  On 2026-04-18, `git add -A` accidentally staged 111K lines of local AI
  tooling state (.agents/, .claude/skills/, .omc/, .playwright-mcp/,
  ~40 critique screenshots, conversation context fragments). The bad
  commit had to be wiped from history via force-push.

USE INSTEAD
  git add <specific paths>
    e.g.  git add src/components/Foo.tsx src/app/globals.css

  git add <directory>
    e.g.  git add src/components/sections/

  If you genuinely need to stage everything, run `git status --short`
  first, copy the desired paths, and stage them explicitly.
"""

raw = sys.argv[1]
try:
    data = json.loads(raw)
except json.JSONDecodeError:
    sys.exit(0)  # malformed input — let it pass, not our problem

cmd = (data.get("tool_input") or {}).get("command", "")
if not cmd:
    sys.exit(0)

# Split on top-level shell separators so chained commands get inspected.
segments = re.split(r'\s*(?:;|&&|\|\||(?<![|])\|(?![|]))\s*', cmd)

FORBIDDEN = {"-A", "--all", ".", ":/", "*", ":(top)", ":(top,literal)"}

for seg in segments:
    seg = seg.strip()
    if not seg:
        continue
    try:
        parts = shlex.split(seg)
    except ValueError:
        continue
    if len(parts) < 3:
        continue
    if parts[0] != "git" or parts[1] != "add":
        continue
    for arg in parts[2:]:
        if arg in FORBIDDEN:
            sys.stderr.write(BLOCK_MSG)
            sys.exit(2)

sys.exit(0)
PY
