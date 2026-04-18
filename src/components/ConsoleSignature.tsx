"use client";

import { useEffect } from "react";

/**
 * Quiet console signature for developers who open DevTools.
 * On-brand: Precise · Quiet · Arcane. No emoji. No exclamations.
 * Runs once per page load.
 */
export default function ConsoleSignature() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const printed = (window as unknown as { __dsSig?: boolean }).__dsSig;
    if (printed) return;
    (window as unknown as { __dsSig?: boolean }).__dsSig = true;

    const labelStyle = [
      "font-family: ui-monospace, 'JetBrains Mono', monospace",
      "font-size: 11px",
      "letter-spacing: 0.18em",
      "text-transform: uppercase",
      "color: #E3CCB1",
    ].join(";");

    const bodyStyle = [
      "font-family: ui-monospace, 'JetBrains Mono', monospace",
      "font-size: 12px",
      "color: #c8d0e0",
      "line-height: 1.6",
    ].join(";");

    const dimStyle = [
      "font-family: ui-monospace, 'JetBrains Mono', monospace",
      "font-size: 11px",
      "color: #8a8a8a",
    ].join(";");

    // eslint-disable-next-line no-console
    console.log(
      "%cDIGITAL SORCERY\n%cInfrastructure engineering. Built to outlast us.\n%cReading the source is a fair signal. sayhi@digitalsourcery.ai",
      labelStyle,
      bodyStyle,
      dimStyle
    );
  }, []);

  return null;
}
