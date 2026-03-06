"use client";

import { useState } from "react";
import { THEME } from "../../constants/theme";

export function Badge({
  children,
  bg = THEME.white,
}: {
  children: React.ReactNode;
  bg?: string;
}) {
  const [hov, setHov] = useState(false);
  return (
    <span
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        padding: "5px 13px",
        border: THEME.border,
        fontFamily: "'JetBrains Mono',monospace",
        fontSize: "0.75rem",
        fontWeight: 700,
        background: bg,
        color: bg === THEME.pink ? "#fff" : THEME.black,
        boxShadow: hov ? "5px 5px 0 #0a0a0a" : "3px 3px 0 #0a0a0a",
        transform: hov ? "translate(-2px,-2px)" : "none",
        cursor: "default",
        transition: "all .1s",
        display: "inline-block",
      }}
    >
      {children}
    </span>
  );
}
