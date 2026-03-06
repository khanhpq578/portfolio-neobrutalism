import { THEME } from "../constants/theme";
import { DATA } from "../constants/data";

export function Footer() {
  return (
    <footer
      style={{
        background: THEME.black,
        color: "#666",
        padding: "2rem clamp(1rem, 6vw, 6rem)",
        borderTop: THEME.border,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "0.5rem",
        fontSize: "0.85rem",
      }}
    >
      <span>
        Built with <b style={{ color: THEME.yellow }}>Next.js</b> +{" "}
        <b style={{ color: THEME.yellow }}>Neobrutalism</b> ♥
      </span>
      <span>
        © 2025 <b style={{ color: THEME.yellow }}>{DATA.name}</b>
      </span>
    </footer>
  );
}
