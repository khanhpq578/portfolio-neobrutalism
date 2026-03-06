"use client";

import { useState } from "react";
import { THEME } from "../../constants/theme";
import { DATA } from "../../constants/data";
import { SubHeader } from "./SubHeader";

export function EduCard() {
  const [hov, setHov] = useState(false);
  const { degree, school, year, location } = DATA.education;
  return (
    <div>
      <SubHeader>🎓 Education</SubHeader>
      <div
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        style={{
          border: THEME.border,
          padding: "1.4rem",
          boxShadow: hov ? THEME.shadowLg : THEME.shadow,
          transform: hov ? "translate(-3px,-3px)" : "none",
          transition: "all .15s",
        }}
      >
        <div style={{ fontWeight: 800, fontSize: "1rem", marginBottom: 2 }}>
          {degree}
        </div>
        <div style={{ color: "#555", fontSize: "0.9rem", marginBottom: 6 }}>
          {school}
        </div>
        <div
          style={{
            display: "inline-block",
            background: THEME.cyan,
            border: THEME.border,
            padding: "2px 10px",
            fontFamily: "'JetBrains Mono',monospace",
            fontSize: "0.72rem",
            fontWeight: 700,
            marginBottom: 6,
          }}
        >
          {year}
        </div>
        <div style={{ fontSize: "0.8rem", color: "#666" }}>📍 {location}</div>
      </div>
    </div>
  );
}
