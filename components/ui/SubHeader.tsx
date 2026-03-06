import { THEME } from "../../constants/theme";

export function SubHeader({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        fontFamily: "'Bebas Neue',sans-serif",
        fontSize: "1.1rem",
        letterSpacing: 2,
        borderBottom: `3px solid ${THEME.black}`,
        paddingBottom: 8,
        marginBottom: 14,
      }}
    >
      {children}
    </div>
  );
}
