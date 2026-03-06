"use client";

import { useState } from "react";
import { THEME } from "../../constants/theme";
import { DATA } from "../../constants/data";
import { SectionHeader } from "../ui/SectionHeader";

export function Journey() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const j = DATA.journey[0];

  return (
    <section
      id="journey"
      style={{ padding: "5rem 6rem", background: THEME.white }}
    >
      <SectionHeader>My Journey</SectionHeader>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "290px 1fr",
          gap: "2.5rem",
          alignItems: "start",
        }}
      >
        {/* ── Left: sticky experience card ── */}
        <div
          className="reveal-left"
          style={{
            border: THEME.border,
            boxShadow: THEME.shadowLg,
            background: THEME.black,
            color: THEME.white,
            padding: "1.6rem",
            position: "sticky",
            top: 80,
          }}
        >
          <div
            style={{
              display: "inline-block",
              background: THEME.yellow,
              color: THEME.black,
              border: THEME.border,
              fontFamily: "'JetBrains Mono',monospace",
              fontSize: "0.7rem",
              fontWeight: 700,
              padding: "3px 10px",
              marginBottom: 14,
            }}
          >
            📅 {j.period}
          </div>

          <div
            style={{
              fontFamily: "'Bebas Neue',sans-serif",
              fontSize: "1.7rem",
              letterSpacing: 2,
              lineHeight: 1.1,
              color: THEME.yellow,
              marginBottom: 4,
            }}
          >
            {j.role}
          </div>
          <div
            style={{ fontWeight: 800, fontSize: "1.05rem", marginBottom: 4 }}
          >
            @ {j.company}
          </div>
          <div
            style={{
              fontSize: "0.78rem",
              color: "#999",
              marginBottom: 14,
              fontFamily: "'JetBrains Mono',monospace",
            }}
          >
            📍 {j.location} · {j.type}
          </div>
          <div
            style={{
              fontSize: "0.86rem",
              lineHeight: 1.75,
              color: "#ccc",
              marginBottom: 16,
              borderLeft: `3px solid ${THEME.yellow}`,
              paddingLeft: 10,
            }}
          >
            {j.summary}
          </div>

          <div
            style={{
              fontSize: "0.7rem",
              color: "#777",
              fontWeight: 700,
              letterSpacing: 1,
              textTransform: "uppercase",
              marginBottom: 8,
            }}
          >
            Tech Stack
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
            {j.tech.map((t) => (
              <span
                key={t}
                style={{
                  padding: "3px 8px",
                  border: `2px solid ${THEME.yellow}`,
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  color: THEME.yellow,
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* ── Right: highlight grid ── */}
        <div className="reveal-right">
          <div
            style={{
              marginBottom: "1rem",
              fontWeight: 700,
              fontSize: "0.75rem",
              letterSpacing: 1,
              color: "#999",
              textTransform: "uppercase",
            }}
          >
            Click each area to explore →
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "0.9rem",
            }}
          >
            {j.highlights.map((h, i) => {
              const active = openIdx === i;
              return (
                <div
                  key={h.label}
                  onClick={() => setOpenIdx(active ? null : i)}
                  style={{
                    border: THEME.border,
                    boxShadow: active ? THEME.shadowLg : "3px 3px 0 #0a0a0a",
                    background: active ? THEME.yellow : THEME.white,
                    transform: active ? "translate(-3px,-3px)" : "none",
                    padding: "1.1rem 1.3rem",
                    cursor: "pointer",
                    transition: "all .2s",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Bebas Neue',sans-serif",
                      fontSize: "1rem",
                      letterSpacing: 1,
                      color: active ? THEME.black : "#888",
                      marginBottom: active ? 8 : 0,
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                    }}
                  >
                    <span
                      style={{
                        display: "inline-block",
                        width: 18,
                        height: 18,
                        background: active ? THEME.black : THEME.yellow,
                        border: THEME.border,
                        fontSize: "0.55rem",
                        lineHeight: "18px",
                        textAlign: "center",
                        fontWeight: 900,
                        color: active ? THEME.yellow : THEME.black,
                        flexShrink: 0,
                      }}
                    >
                      {active ? "▼" : "▶"}
                    </span>
                    {h.label}
                  </div>
                  {active && (
                    <div
                      style={{
                        fontSize: "0.84rem",
                        lineHeight: 1.65,
                        color: THEME.black,
                        fontWeight: 500,
                      }}
                    >
                      {h.text}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
