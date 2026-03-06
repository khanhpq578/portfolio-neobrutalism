"use client";

import { useState } from "react";
import { THEME } from "../../constants/theme";
import { DATA } from "../../constants/data";
import { SectionHeader } from "../ui/SectionHeader";

export function Projects() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section
      id="projects"
      style={{ background: THEME.black, padding: "5rem 6rem" }}
    >
      <SectionHeader light>Featured Projects</SectionHeader>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2,1fr)",
          gap: "1.5rem",
        }}
      >
        {DATA.projects.map((p, i) => {
          const hov = active === i;
          return (
            <div
              key={p.name}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              className="reveal"
              style={{
                border: THEME.border,
                boxShadow: hov ? THEME.shadowLg : THEME.shadow,
                background: hov ? p.color : THEME.white,
                transform: hov ? "translate(-5px,-5px)" : "none",
                padding: "1.8rem",
                transition: "all .22s",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  marginBottom: 6,
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: "'Bebas Neue',sans-serif",
                      fontSize: "1.6rem",
                      letterSpacing: 2,
                      lineHeight: 1,
                    }}
                  >
                    {p.name}
                  </div>
                  <div
                    style={{
                      fontSize: "0.82rem",
                      color: "#666",
                      fontStyle: "italic",
                      marginBottom: 10,
                    }}
                  >
                    {p.sub}
                  </div>
                </div>
                <span
                  style={{
                    fontSize: "2.2rem",
                    transition: "transform .2s",
                    transform: hov ? "scale(1.2) rotate(-5deg)" : "scale(1)",
                  }}
                >
                  {p.emoji}
                </span>
              </div>

              {/* Role badge */}
              <div
                style={{
                  display: "inline-block",
                  background: THEME.black,
                  color: hov ? p.color : THEME.yellow,
                  border: `2px solid ${hov ? p.color : THEME.yellow}`,
                  padding: "3px 10px",
                  fontFamily: "'JetBrains Mono',monospace",
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  marginBottom: 14,
                  transition: "all .2s",
                  alignSelf: "flex-start",
                }}
              >
                {p.role}
              </div>

              {/* Tech tags */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 6,
                  marginBottom: 14,
                }}
              >
                {p.tech.map((t) => (
                  <span
                    key={t}
                    style={{
                      padding: "3px 9px",
                      border: `2px solid ${THEME.black}`,
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      background: hov ? "rgba(0,0,0,0.12)" : THEME.white,
                      transition: "background .2s",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Divider */}
              <div
                style={{
                  height: 3,
                  background: hov ? THEME.black : THEME.yellow,
                  marginBottom: 14,
                  transition: "background .2s",
                }}
              />

              {/* Points */}
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: 7,
                }}
              >
                {p.points.map((pt) => (
                  <li
                    key={pt}
                    style={{
                      fontSize: "0.84rem",
                      lineHeight: 1.6,
                      color: "#222",
                      display: "flex",
                      gap: 8,
                    }}
                  >
                    <span
                      style={{
                        flexShrink: 0,
                        width: 18,
                        height: 18,
                        background: hov ? THEME.black : THEME.yellow,
                        border: `2px solid ${THEME.black}`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "0.55rem",
                        fontWeight: 900,
                        marginTop: 2,
                        color: hov ? THEME.yellow : THEME.black,
                        transition: "all .2s",
                      }}
                    >
                      →
                    </span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
