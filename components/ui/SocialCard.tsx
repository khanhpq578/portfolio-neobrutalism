"use client";

import { useState } from "react";
import { THEME } from "../../constants/theme";

interface SocialCardProps {
  label: string;
  icon: string;
  bg: string;
  url: string;
  white?: boolean;
}

export function SocialCard({ label, icon, bg, url, white }: SocialCardProps) {
  const [hov, setHov] = useState(false);
  return (
    <a
      href={url}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        flex: 1,
        minWidth: 120,
        padding: "1.4rem",
        border: THEME.border,
        boxShadow: hov ? THEME.shadowLg : THEME.shadow,
        transform: hov ? "translate(-4px,-4px)" : "none",
        textAlign: "center",
        textDecoration: "none",
        color: white ? "#fff" : THEME.black,
        background: bg,
        fontWeight: 800,
        fontSize: "0.88rem",
        transition: "all .15s",
        display: "block",
      }}
    >
      <span style={{ fontSize: "2rem", display: "block", marginBottom: 6 }}>
        {icon}
      </span>
      {label}
    </a>
  );
}
