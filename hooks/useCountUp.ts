"use client";

import { useState, useEffect, useRef } from "react";

export function useCountUp(target: number, suffix = "", duration = 1500) {
  const [display, setDisplay] = useState(`0${suffix}`);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const steps = 60;
          const inc = target / steps;
          let curr = 0;
          const timer = setInterval(() => {
            curr += inc;
            if (curr >= target) {
              clearInterval(timer);
              setDisplay(`${target}${suffix}`);
            } else setDisplay(`${Math.floor(curr)}${suffix}`);
          }, duration / steps);
        }
      },
      { threshold: 0.5 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, suffix, duration]);

  return { display, ref };
}
