import { ImageResponse } from "next/og";
import { company } from "@/content/company";

export const alt = `${company.name} — Admin, Living & Gate for residential communities`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "linear-gradient(135deg, #0a1626 0%, #115e59 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 18,
              background: "linear-gradient(135deg, #0f766e, #5eead4)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 40,
              fontWeight: 700,
            }}
          >
            N
          </div>
          <div style={{ fontSize: 40, fontWeight: 700, letterSpacing: 2 }}>NEXORA PVT</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.05, maxWidth: 980 }}>
            Smarter Living for Every Community.
          </div>
          <div style={{ fontSize: 32, color: "#99f6e4" }}>Nexora Admin · Nexora Living · Nexora Gate</div>
        </div>
      </div>
    ),
    size
  );
}
