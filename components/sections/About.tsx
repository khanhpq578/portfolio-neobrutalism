"use client";

import { useState } from "react";
import { THEME } from "../../constants/theme";
import { DATA } from "../../constants/data";
import { SectionHeader } from "../ui/SectionHeader";
import { Highlight } from "../ui/Highlight";
import { useCountUp } from "../../hooks/useCountUp";

function AnimatedStatCard({
  target,
  suffix,
  label,
}: {
  target: number;
  suffix: string;
  label: string;
}) {
  const { display, ref } = useCountUp(target, suffix);
  const [hov, setHov] = useState(false);
  return (
    <div
      ref={ref}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        border: `3px solid ${THEME.yellow}`,
        padding: "1.5rem",
        boxShadow: hov
          ? `8px 8px 0 ${THEME.yellow}`
          : `5px 5px 0 ${THEME.yellow}`,
        transform: hov ? "translate(-3px,-3px)" : "none",
        transition: "all .15s",
        cursor: "default",
      }}
    >
      <div
        style={{
          fontFamily: "'Bebas Neue',sans-serif",
          fontSize: "3.5rem",
          color: THEME.yellow,
          lineHeight: 1,
          transform: hov ? "scale(1.06)" : "scale(1)",
          transition: "transform .15s",
        }}
      >
        {display}
      </div>
      <div
        style={{
          fontSize: "0.8rem",
          color: "#aaa",
          marginTop: 6,
          fontWeight: 700,
          letterSpacing: 1,
          textTransform: "uppercase",
        }}
      >
        {label}
      </div>
    </div>
  );
}

export function About() {
  return (
    <section
      id="about"
      style={{
        background: THEME.black,
        color: THEME.white,
        padding: "5rem 6rem",
      }}
    >
      <SectionHeader light>About Me</SectionHeader>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "3rem",
          alignItems: "start",
        }}
      >
        <div className="reveal-left">
          {[
            <span key="1">
              Backend Engineer with over{" "}
              <Highlight color={THEME.yellow}>
                4 years of hands-on experience
              </Highlight>{" "}
              designing, building, and operating production systems serving{" "}
              <Highlight color={THEME.cyan}>
                tens of thousands of users
              </Highlight>
              .
            </span>,
            <span key="2">
              Specialized in{" "}
              <Highlight color={THEME.yellow}>Node.js (NestJS)</Highlight>,{" "}
              <Highlight color={THEME.cyan}>
                event-driven architecture
              </Highlight>
              , and{" "}
              <Highlight color={THEME.pink}>high-concurrency systems</Highlight>
              . Proven track record with cloud infrastructure on AWS & GCP,
              Kubernetes deployments, and full observability stacks.
            </span>,
            <span key="3">
              Deep expertise in{" "}
              <Highlight color={THEME.yellow}>
                performance optimization
              </Highlight>
              ,{" "}
              <Highlight color={THEME.cyan}>
                distributed system design
              </Highlight>
              , and{" "}
              <Highlight color={THEME.pink}>production reliability</Highlight>.
            </span>,
          ].map((p, i) => (
            <p
              key={i}
              style={{
                fontSize: "1rem",
                lineHeight: 1.8,
                marginBottom: "1.2rem",
              }}
            >
              {p}
            </p>
          ))}
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1.5rem",
          }}
          className="reveal-right"
        >
          {DATA.stats.map((st) => (
            <AnimatedStatCard key={st.label} {...st} />
          ))}
        </div>
      </div>
    </section>
  );
}
