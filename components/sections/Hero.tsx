import { THEME } from "../../constants/theme";
import { DATA } from "../../constants/data";
import { BtnPrimary, BtnSecondary } from "../ui/Button";
import { Badge } from "../ui/Badge";

export function Hero() {
  const badgeColors = [
    THEME.yellow,
    THEME.white,
    THEME.cyan,
    THEME.white,
    THEME.pink,
    THEME.white,
    THEME.yellow,
  ];
  const tagBase = {
    position: "absolute" as const,
    border: THEME.border,
    boxShadow: THEME.shadow,
    fontWeight: 800,
    fontSize: "0.8rem",
    padding: "6px 12px",
  };

  return (
    <section
      id="home"
      className="grid-bg"
      style={{
        marginTop: 60,
        minHeight: "calc(100vh - 60px)",
        padding: "4rem 6rem",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "4rem",
        alignItems: "center",
      }}
    >
      {/* Left */}
      <div className="animate-slide-left">
        <div
          className="animate-fade-1"
          style={{
            fontSize: "1.3rem",
            fontWeight: 700,
            color: "#666",
            marginBottom: "0.5rem",
          }}
        >
          Hi there! 👋
        </div>
        <h1
          className="animate-fade-2"
          style={{
            fontFamily: "'Bebas Neue',sans-serif",
            fontSize: "clamp(3.2rem,6.5vw,5.5rem)",
            lineHeight: 1,
            letterSpacing: 2,
            marginBottom: "1.5rem",
          }}
        >
          I&apos;m{" "}
          <span
            style={{
              color: THEME.yellow,
              WebkitTextStroke: `2px ${THEME.black}`,
            }}
          >
            {DATA.name}
          </span>
          .
        </h1>
        <p
          className="animate-fade-3"
          style={{
            fontSize: "1rem",
            lineHeight: 1.75,
            color: "#444",
            maxWidth: 500,
            marginBottom: "2rem",
          }}
        >
          {DATA.bio}
        </p>
        <div
          className="animate-fade-4"
          style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
        >
          <BtnPrimary href="#contact">Get In Touch!</BtnPrimary>
          <BtnSecondary href="#projects">📂 View Projects</BtnSecondary>
        </div>
        <div
          className="animate-fade-5"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 8,
            marginTop: "2rem",
          }}
        >
          {DATA.badges.map((b, i) => (
            <Badge key={b} bg={badgeColors[i]}>
              {b}
            </Badge>
          ))}
        </div>
      </div>

      {/* Right */}
      <div
        className="animate-slide-right"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div style={{ position: "relative", width: 320, height: 340 }}>
          <div
            style={{
              width: 300,
              height: 300,
              background: THEME.cyan,
              border: THEME.border,
              boxShadow: THEME.shadowLg,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "7rem",
            }}
          >
            <span className="animate-float">🧑‍💻</span>
          </div>
          <div
            className="animate-wiggle"
            style={{
              ...tagBase,
              top: -18,
              right: -28,
              background: THEME.yellow,
            }}
          >
            ⬡ NestJS
          </div>
          <div
            className="animate-wiggle2"
            style={{
              ...tagBase,
              top: 120,
              right: -50,
              background: THEME.black,
              color: THEME.yellow,
            }}
          >
            Backend Engineer 🚀
          </div>
          <div
            className="animate-wiggle3"
            style={{
              ...tagBase,
              bottom: -10,
              left: -18,
              background: THEME.pink,
              color: "#fff",
            }}
          >
            ☸ Kubernetes EKS
          </div>
        </div>
      </div>
    </section>
  );
}
