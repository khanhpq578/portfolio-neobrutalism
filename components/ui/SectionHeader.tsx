import { THEME } from "../../constants/theme";

export function SectionHeader({
  children,
  light,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <div
      style={{
        fontFamily: "'Bebas Neue',sans-serif",
        fontSize: "clamp(2.2rem,4.5vw,3.5rem)",
        letterSpacing: 3,
        marginBottom: "2.5rem",
        display: "inline-block",
        color: light ? THEME.yellow : THEME.black,
        borderBottom: `6px solid ${light ? THEME.white : THEME.yellow}`,
        paddingBottom: 4,
      }}
    >
      {children}
    </div>
  );
}
