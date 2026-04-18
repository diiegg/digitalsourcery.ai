"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function ContactContent() {
  const [status, setStatus] = useState<"idle" | "submitting" | "ok" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMsg(null);

    try {
      const formData = new FormData(event.currentTarget);
      const params = new URLSearchParams();
      formData.forEach((value, key) => {
        params.append(key, typeof value === "string" ? value : "");
      });

      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString(),
      });

      if (!response.ok) {
        throw new Error("send_failed");
      }

      setStatus("ok");
    } catch {
      setStatus("error");
      setErrorMsg(
        "We couldn't send your message. Email sayhi@digitalsourcery.ai, or try again in a moment."
      );
    }
  }

  function resetForm() {
    setStatus("idle");
    setErrorMsg(null);
  }

  return (
    <main className="relative">

      {/* === HERO === */}
      <section style={{ paddingTop: "var(--fib-7)", paddingBottom: "var(--fib-6)" }}>
        <div className="ds-container">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-12"
            style={{ gap: "var(--fib-5)" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease }}
          >
            <div className="md:col-span-8">
              <div
                className="inline-block font-[family-name:var(--font-display)] uppercase tracking-[0.2em]"
                style={{
                  fontSize: "var(--text-fib-xs)",
                  color: "var(--color-ds-warm)",
                  border: "1px solid var(--color-ds-warm-dim)",
                  padding: "var(--fib-1) var(--fib-2)",
                  marginBottom: "var(--fib-4)",
                }}
              >
                Talk to a senior engineer
              </div>
              <h1
                className="font-[family-name:var(--font-display)] font-bold tracking-[-0.04em] text-white"
                style={{ fontSize: "clamp(var(--text-fib-xl), 7vw, 128px)", lineHeight: 0.95, marginBottom: "var(--fib-5)" }}
              >
                Tell us what runs.
                <br />
                <span style={{ color: "var(--color-ds-headline-accent)" }}>And what hurts.</span>
              </h1>
              <p
                className="text-ds-text-secondary"
                style={{ fontSize: "var(--text-fib-md)", lineHeight: 1.55, maxWidth: "65ch" }}
              >
                A senior engineer reads every message and replies within one working day. No SDR funnel, no automated qualification, no scheduled nurture sequence. If we&apos;re not the right fit, we&apos;ll tell you who is.
              </p>
            </div>

            <div className="md:col-span-4 md:self-end">
              <div
                className="flex flex-col"
                style={{
                  padding: "var(--fib-4)",
                  border: "1px solid var(--color-ds-border)",
                  gap: "var(--fib-3)",
                }}
              >
                <span
                  className="font-[family-name:var(--font-mono)] uppercase tracking-[0.2em]"
                  style={{ fontSize: "10px", color: "var(--color-ds-text-dim)" }}
                >
                  Response time
                </span>
                <span
                  className="font-[family-name:var(--font-display)] font-bold text-white"
                  style={{ fontSize: "var(--text-fib-md)" }}
                >
                  &lt; 1 working day
                </span>
                <span
                  className="font-[family-name:var(--font-mono)]"
                  style={{ fontSize: "11px", color: "var(--color-ds-warm)", lineHeight: 1.5 }}
                >
                  Mondays through Thursdays, CET. Friday submissions get a Monday reply.
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* === FORM === */}
      <section
        style={{
          paddingTop: "var(--fib-6)",
          paddingBottom: "var(--fib-7)",
          borderTop: "1px solid var(--color-ds-border)",
        }}
      >
        <div className="ds-container">
          <div className="grid grid-cols-1 md:grid-cols-12" style={{ gap: "var(--fib-5)" }}>

            <div className="md:col-span-4">
              <span
                className="font-[family-name:var(--font-mono)] uppercase tracking-[0.2em] block"
                style={{ fontSize: "11px", color: "var(--color-ds-warm)", marginBottom: "var(--fib-3)" }}
              >
                What helps us reply faster
              </span>
              <p
                className="text-ds-text-secondary"
                style={{ fontSize: "var(--text-fib-sm)", lineHeight: 1.618, marginBottom: "var(--fib-3)", maxWidth: "40ch" }}
              >
                A sentence or two on what you run today, what is breaking, and what you want changed. Stack names, rough team size, and the deadline you&apos;re working against beat polished ones.
              </p>
              <p
                className="text-ds-text-secondary"
                style={{ fontSize: "var(--text-fib-sm)", lineHeight: 1.618, maxWidth: "40ch" }}
              >
                Or email{" "}
                <a
                  href="mailto:sayhi@digitalsourcery.ai"
                  className="text-white hover:text-[var(--color-ds-warm)] transition-colors"
                  style={{ borderBottom: "1px solid var(--color-ds-warm-dim)" }}
                >
                  sayhi@digitalsourcery.ai
                </a>{" "}
                if a form feels like ceremony.
              </p>
            </div>

            <div className="md:col-span-7 md:col-start-6">
              {status === "ok" ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease }}
                  role="status"
                  aria-live="polite"
                  style={{ padding: "var(--fib-5)", border: "1px solid var(--color-ds-warm-dim)" }}
                >
                  <span
                    className="font-[family-name:var(--font-mono)] uppercase tracking-[0.2em] block"
                    style={{ fontSize: "11px", color: "var(--color-ds-warm)", marginBottom: "var(--fib-3)" }}
                  >
                    Received
                  </span>
                  <h2
                    className="font-[family-name:var(--font-display)] font-bold text-white"
                    style={{ fontSize: "var(--text-fib-lg)", marginBottom: "var(--fib-3)", letterSpacing: "-0.01em" }}
                  >
                    Thanks. A senior engineer will reply within one working day.
                  </h2>
                  <p className="text-ds-text-secondary" style={{ fontSize: "var(--text-fib-sm)", lineHeight: 1.618, marginBottom: "var(--fib-4)" }}>
                    If we end up not being the right fit, we&apos;ll tell you and point you somewhere that is. Either way, you hear back.
                  </p>
                  <button
                    type="button"
                    onClick={resetForm}
                    className="inline-block font-[family-name:var(--font-mono)] uppercase tracking-[0.15em] text-ds-text-secondary hover:text-white transition-colors"
                    style={{ fontSize: "var(--text-fib-xs)", padding: "var(--fib-2) 0", borderBottom: "1px solid var(--color-ds-border)" }}
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  aria-describedby={status === "error" ? "contact-form-error" : undefined}
                  className="flex flex-col"
                  style={{ gap: "var(--fib-4)" }}
                >
                  <input type="hidden" name="form-name" value="contact" />
                  {/* Honeypot */}
                  <p className="hidden" aria-hidden="true">
                    <label>
                      Don&apos;t fill this out: <input name="bot-field" />
                    </label>
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "var(--fib-3)" }}>
                    <Field label="Your name" name="name" type="text" required autoComplete="name" />
                    <Field label="Work email" name="email" type="email" required autoComplete="email" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: "var(--fib-3)" }}>
                    <Field label="Company" name="company" type="text" required autoComplete="organization" />
                    <Select label="Role" name="role" required options={[
                      "CTO",
                      "VP / Head of Engineering",
                      "Head of Platform / SRE",
                      "Director of Cloud Infra",
                      "Founder",
                      "Other",
                    ]} />
                  </div>
                  <Field
                    label="Context"
                    name="context"
                    as="textarea"
                    rows={5}
                    placeholder="What runs today, what's breaking, what you'd like changed."
                    required
                  />

                  {status === "error" && (
                    <p
                      id="contact-form-error"
                      role="alert"
                      style={{
                        fontSize: "var(--text-fib-sm)",
                        color: "var(--color-ds-warm)",
                        padding: "var(--fib-2) var(--fib-3)",
                        border: "1px solid var(--color-ds-warm-dim)",
                      }}
                    >
                      {errorMsg ?? "We couldn't send your message. Email sayhi@digitalsourcery.ai, or try again in a moment."}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="self-start inline-block font-[family-name:var(--font-display)] font-bold tracking-[0.15em] uppercase bg-white text-black hover:scale-[0.97] transition-transform duration-200 rotating-gradient-btn disabled:opacity-50"
                    style={{ fontSize: "var(--text-fib-sm)", padding: "var(--fib-3) var(--fib-5)" }}
                  >
                    <span>{status === "submitting" ? "Sending…" : "Talk to a senior engineer"}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

interface FieldBaseProps {
  label: string;
  name: string;
  required?: boolean;
}

interface InputFieldProps extends FieldBaseProps {
  type?: string;
  placeholder?: string;
  autoComplete?: string;
  as?: never;
  rows?: never;
}

interface TextareaFieldProps extends FieldBaseProps {
  as: "textarea";
  rows?: number;
  placeholder?: string;
  autoComplete?: string;
  type?: never;
}

type FieldProps = InputFieldProps | TextareaFieldProps;

function Field(props: FieldProps) {
  const { label, name, required, placeholder } = props;
  const isTextarea = props.as === "textarea";
  const id = `field-${name}`;
  const sharedClass = "font-[family-name:var(--font-body)] text-white bg-transparent w-full";
  const sharedStyle: React.CSSProperties = {
    fontSize: "var(--text-fib-base)",
    border: "1px solid var(--color-ds-border)",
    padding: "var(--fib-2) var(--fib-3)",
    outline: "none",
    transition: "border-color 0.2s ease",
  };
  return (
    <div className="flex flex-col" style={{ gap: "var(--fib-1)" }}>
      <label
        htmlFor={id}
        className="font-[family-name:var(--font-mono)] uppercase tracking-[0.15em]"
        style={{ fontSize: "10px", color: "var(--color-ds-text-dim)" }}
      >
        {label} {required && <span aria-hidden="true" style={{ color: "var(--color-ds-warm)" }}>*</span>}
      </label>
      {isTextarea ? (
        <textarea
          id={id}
          name={name}
          required={required}
          aria-required={required}
          placeholder={placeholder}
          rows={props.rows ?? 4}
          autoComplete={props.autoComplete}
          className={sharedClass}
          style={sharedStyle}
        />
      ) : (
        <input
          id={id}
          name={name}
          required={required}
          aria-required={required}
          placeholder={placeholder}
          type={props.type ?? "text"}
          autoComplete={props.autoComplete}
          className={sharedClass}
          style={sharedStyle}
        />
      )}
    </div>
  );
}

interface SelectProps extends FieldBaseProps {
  options: string[];
}

function Select({ label, name, required, options }: SelectProps) {
  const id = `field-${name}`;
  return (
    <div className="flex flex-col" style={{ gap: "var(--fib-1)" }}>
      <label
        htmlFor={id}
        className="font-[family-name:var(--font-mono)] uppercase tracking-[0.15em]"
        style={{ fontSize: "10px", color: "var(--color-ds-text-dim)" }}
      >
        {label} {required && <span aria-hidden="true" style={{ color: "var(--color-ds-warm)" }}>*</span>}
      </label>
      <select
        id={id}
        name={name}
        required={required}
        aria-required={required}
        defaultValue=""
        className="font-[family-name:var(--font-body)] text-white bg-transparent w-full"
        style={{
          fontSize: "var(--text-fib-base)",
          border: "1px solid var(--color-ds-border)",
          padding: "var(--fib-2) var(--fib-3)",
          outline: "none",
        }}
      >
        <option value="" disabled>
          Select…
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt} style={{ background: "var(--color-ds-black)", color: "var(--color-ds-text)" }}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}
