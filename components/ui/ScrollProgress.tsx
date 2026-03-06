"use client";

import { useState, useEffect } from "react";
import { THEME } from "../../constants/theme";

export function ScrollProgress() {
  const [w, setW] = useState(0);
  useEffect(() => {
    const fn = () =>
      setW(
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) *
          100,
      );
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return (
    <div
      style={{
        position: "fixed",
        top: 60,
        left: 0,
        height: 4,
        zIndex: 998,
        background: THEME.yellow,
        borderRight: `3px solid ${THEME.black}`,
        width: `${w}%`,
        transition: "width .08s linear",
      }}
    />
  );
}
