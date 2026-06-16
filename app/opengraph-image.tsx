import { ImageResponse } from "next/og";

export const alt =
  "temetro — the open-source workspace for patient care";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0a0a0a",
          color: "#fafafa",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontSize: "32px",
            color: "#a1a1a1",
          }}
        >
          <div
            style={{
              width: "14px",
              height: "14px",
              borderRadius: "9999px",
              background: "#fafafa",
            }}
          />
          Open source · Built for clinics
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
          <div
            style={{
              fontSize: "76px",
              fontWeight: 600,
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
              maxWidth: "900px",
            }}
          >
            The open-source workspace for patient care
          </div>
          <div
            style={{
              fontSize: "34px",
              color: "#a1a1a1",
              maxWidth: "880px",
              lineHeight: 1.3,
            }}
          >
            Patient records, scheduling, prescriptions, and notes — self-hostable,
            with role-based access for your whole care team.
          </div>
        </div>

        <div style={{ display: "flex", fontSize: "40px", fontWeight: 600 }}>
          temetro.com
        </div>
      </div>
    ),
    { ...size },
  );
}
