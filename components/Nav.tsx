"use client";

import { useState, useEffect } from "react";
import { THEME } from "../constants/theme";
import { useIsMobile } from "../hooks/useIsMobile";

interface NavProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const NAV_ITEMS = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Journey", id: "journey" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
];

export function Nav({ darkMode, setDarkMode }: NavProps) {
  const [hov, setHov] = useState<string | null>(null);
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  // Smooth scroll — offset 60px for fixed nav height
  const scrollTo = (
    e: React.MouseEvent<HTMLAnchorElement | HTMLDivElement>,
    id: string,
  ) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (!el) return;
    window.scrollTo({
      top: el.getBoundingClientRect().top + window.scrollY - 60,
      behavior: "smooth",
    });
  };

  // IntersectionObserver: track which section is in the middle of the viewport
  useEffect(() => {
    const ids = [...NAV_ITEMS.map((n) => n.id), "contact"];
    const observers = ids.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { rootMargin: "-50% 0px -45% 0px" },
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  // Close menu on scroll
  useEffect(() => {
    if (!menuOpen) return;
    const handler = () => setMenuOpen(false);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [menuOpen]);

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 999,
          background: THEME.yellow,
          borderBottom: THEME.border,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 1.5rem",
          height: 60,
        }}
      >
        {/* Logo */}
        <div
          onClick={(e) => scrollTo(e, "home")}
          style={{
            fontFamily: "'Bebas Neue',sans-serif",
            fontSize: "1.8rem",
            letterSpacing: 2,
            background: THEME.black,
            color: THEME.yellow,
            padding: "2px 12px",
            border: THEME.border,
            cursor: "pointer",
            userSelect: "none",
            flexShrink: 0,
          }}
        >
          PQK
        </div>

        {/* Desktop links */}
        {!isMobile && (
          <div style={{ display: "flex", alignItems: "center" }}>
            {NAV_ITEMS.map((item, i) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => scrollTo(e, item.id)}
                onMouseEnter={() => setHov(item.id)}
                onMouseLeave={() => setHov(null)}
                style={{
                  padding: "8px 16px",
                  fontWeight: 700,
                  fontSize: "0.85rem",
                  textDecoration: "none",
                  cursor: "pointer",
                  border: THEME.border,
                  borderLeft: i === 0 ? THEME.border : "none",
                  marginLeft: i === 0 ? 0 : -3,
                  transition: "background .15s, color .15s",
                  background:
                    active === item.id
                      ? THEME.black
                      : hov === item.id
                        ? "rgba(0,0,0,0.1)"
                        : "transparent",
                  color: active === item.id ? THEME.yellow : THEME.black,
                }}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => scrollTo(e, "contact")}
              onMouseEnter={() => setHov("cta")}
              onMouseLeave={() => setHov(null)}
              style={{
                padding: "8px 18px",
                fontWeight: 800,
                fontSize: "0.85rem",
                textDecoration: "none",
                display: "inline-block",
                marginLeft: 8,
                background: hov === "cta" ? THEME.pink : THEME.black,
                color: THEME.yellow,
                border: THEME.border,
                boxShadow: hov === "cta" ? THEME.shadowLg : THEME.shadow,
                transform: hov === "cta" ? "translate(-2px,-2px)" : "none",
                transition: "all .15s",
              }}
            >
              Hire Me!
            </a>
          </div>
        )}

        {/* Right controls */}
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          {/* Theme toggle */}
          <button
            onClick={() => setDarkMode((d) => !d)}
            style={{
              width: 38,
              height: 38,
              border: THEME.border,
              background: THEME.white,
              cursor: "pointer",
              fontSize: "1rem",
              flexShrink: 0,
            }}
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          {/* Hamburger — mobile only */}
          {isMobile && (
            <button
              onClick={() => setMenuOpen((o) => !o)}
              style={{
                width: 38,
                height: 38,
                border: THEME.border,
                background: menuOpen ? THEME.black : THEME.white,
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 5,
                padding: 8,
                flexShrink: 0,
              }}
              aria-label="Toggle menu"
            >
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  style={{
                    display: "block",
                    width: 20,
                    height: 2.5,
                    background: menuOpen ? THEME.yellow : THEME.black,
                    transition: "all .2s",
                    transform:
                      menuOpen && i === 0
                        ? "rotate(45deg) translate(5px,5px)"
                        : menuOpen && i === 1
                          ? "scaleX(0)"
                          : menuOpen && i === 2
                            ? "rotate(-45deg) translate(5px,-5px)"
                            : "none",
                  }}
                />
              ))}
            </button>
          )}
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      {isMobile && menuOpen && (
        <div className="mobile-menu animate-slide-down">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => scrollTo(e, item.id)}
              style={{
                fontWeight: active === item.id ? 800 : 700,
                background:
                  active === item.id ? "rgba(0,0,0,0.08)" : "transparent",
              }}
            >
              {active === item.id ? "▶ " : ""}
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="m-cta"
            onClick={(e) => scrollTo(e, "contact")}
          >
            Hire Me!
          </a>
        </div>
      )}
    </>
  );
}
