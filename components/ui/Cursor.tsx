"use client";

import { useRef, useEffect } from "react";
import { THEME } from "../../constants/theme";

export function Cursor() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (ref.current) {
        ref.current.style.left = e.clientX - 10 + "px";
        ref.current.style.top = e.clientY - 10 + "px";
      }
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      ref={ref}
      style={{
        position: "fixed",
        pointerEvents: "none",
        zIndex: 9999,
        width: 20,
        height: 20,
        background: THEME.yellow,
        border: `2px solid ${THEME.black}`,
        mixBlendMode: "multiply",
        top: 0,
        left: 0,
      }}
    />
  );
}
