import { THEME } from "../../constants/theme";

export function Highlight({
  children,
  color = THEME.yellow,
}: {
  children: React.ReactNode;
  color?: string;
}) {
  return (
    <span
      style={{
        background: color,
        padding: "0 4px",
        fontWeight: 700,
        color: color === THEME.pink ? "#fff" : THEME.black,
      }}
    >
      {children}
    </span>
  );
}
