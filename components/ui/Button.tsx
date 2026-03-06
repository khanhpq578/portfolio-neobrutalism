"use client";

import { useState } from "react";
import { THEME } from "../../constants/theme";

export function BtnPrimary({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const [hov, setHov] = useState(false);
  return (
    <a
      href={href}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: "inline-block",
        padding: "12px 28px",
        fontWeight: 800,
        fontSize: "0.9rem",
        background: hov ? THEME.pink : THEME.black,
        color: THEME.yellow,
        border: THEME.border,
        boxShadow: hov ? THEME.shadowLg : THEME.shadow,
        transform: hov ? "translate(-3px,-3px)" : "none",
        textDecoration: "none",
        cursor: "pointer",
        transition: "all .15s",
      }}
    >
      {children}
    </a>
  );
}

export function BtnSecondary({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const [hov, setHov] = useState(false);
  return (
    <a
      href={href}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: "inline-block",
        padding: "12px 28px",
        fontWeight: 800,
        fontSize: "0.9rem",
        background: hov ? THEME.yellow : "transparent",
        color: THEME.black,
        border: THEME.border,
        boxShadow: hov ? THEME.shadowLg : THEME.shadow,
        transform: hov ? "translate(-3px,-3px)" : "none",
        textDecoration: "none",
        cursor: "pointer",
        transition: "all .15s",
      }}
    >
      {children}
    </a>
  );
}
