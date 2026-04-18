import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Digital Sorcery — Infrastructure That Thinks";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px 96px",
          background:
            "radial-gradient(circle at 25% 40%, rgba(200, 208, 224, 0.08) 0%, transparent 60%), #050508",
          color: "#ffffff",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        {/* Top — eyebrow + brand mark */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <svg width="34" height="34" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <g fill="#c8d0e0">
              <circle cx="16" cy="16" r="1.6" />
              <circle cx="20.5" cy="13.5" r="1.4" opacity="0.85" />
              <circle cx="22" cy="19" r="1.3" opacity="0.7" />
              <circle cx="17.5" cy="22" r="1.2" opacity="0.6" />
              <circle cx="12" cy="20.5" r="1.1" opacity="0.55" />
              <circle cx="11" cy="14" r="1" opacity="0.5" />
              <circle cx="15" cy="10" r="0.9" opacity="0.45" />
              <circle cx="20" cy="9" r="0.8" opacity="0.4" />
            </g>
          </svg>
          <span
            style={{
              fontSize: 22,
              letterSpacing: 2,
              textTransform: "uppercase",
              color: "#E3CCB1",
            }}
          >
            Digital Sorcery
          </span>
        </div>

        {/* Middle — headline */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 96,
              lineHeight: 0.95,
              letterSpacing: -3,
              fontWeight: 700,
              color: "#ffffff",
              display: "flex",
            }}
          >
            Infrastructure
          </div>
          <div
            style={{
              fontSize: 96,
              lineHeight: 0.95,
              letterSpacing: -3,
              fontWeight: 700,
              color: "#c8d0e0",
              display: "flex",
            }}
          >
            That Thinks.
          </div>
        </div>

        {/* Bottom — sub */}
        <div
          style={{
            fontSize: 26,
            lineHeight: 1.4,
            color: "#a8aeb8",
            maxWidth: 900,
            display: "flex",
          }}
        >
          The intelligence layer for production systems. Predictive observability,
          autonomous remediation, cost control.
        </div>
      </div>
    ),
    { ...size }
  );
}
