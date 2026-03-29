export default function Footer() {
  return (
    <footer
      className="border-t border-ds-border"
      style={{ padding: "var(--fib-4) 0" }}
    >
      <div className="mx-auto max-w-[1400px] px-[var(--fib-4)] lg:px-[var(--fib-5)]">
        <div
          className="flex flex-col sm:flex-row items-center justify-between"
          style={{ gap: "var(--fib-2)" }}
        >
          <span className="text-ds-text-dim" style={{ fontSize: "var(--text-fib-xs)" }}>
            &copy; {new Date().getFullYear()} Digital Sourcery
          </span>
          <span className="text-ds-text-dim" style={{ fontSize: "var(--text-fib-xs)" }}>
            A sibling brand of BlackMagickOps
          </span>
        </div>
      </div>
    </footer>
  );
}
