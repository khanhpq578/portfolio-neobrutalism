"use client";

import { useState, useRef, useEffect } from "react";
import { THEME } from "../../constants/theme";

interface SkillCardProps {
  title: string;
  bg: string;
  tags: string[];
  dark?: boolean;
  delay?: number;
}

export function SkillCard({
  title,
  bg,
  tags,
  dark,
  delay = 0,
}: SkillCardProps) {
  const [hov, setHov] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting)
          setTimeout(() => el.classList.add("visible"), delay);
      },
      { threshold: 0.1 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);
  return (
    <div
      ref={ref}
      className="reveal"
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: bg,
        border: THEME.border,
        padding: "1.4rem",
        boxShadow: hov ? THEME.shadowLg : THEME.shadow,
        transform: hov ? "translate(-4px,-4px)" : "none",
        transition: "all .15s",
      }}
    >
      <div
        style={{
          fontFamily: "'Bebas Neue',sans-serif",
          fontSize: "1.2rem",
          letterSpacing: 2,
          borderBottom: `3px solid ${dark ? THEME.yellow : THEME.black}`,
          paddingBottom: 8,
          marginBottom: 14,
          color: dark ? THEME.yellow : THEME.black,
        }}
      >
        {title}
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
        {tags.map((t) => (
          <span
            key={t}
            style={{
              padding: "4px 10px",
              fontSize: "0.75rem",
              fontWeight: 700,
              border: `2px solid ${dark ? THEME.yellow : THEME.black}`,
              background: dark ? "transparent" : THEME.white,
              color: dark ? THEME.white : THEME.black,
            }}
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
