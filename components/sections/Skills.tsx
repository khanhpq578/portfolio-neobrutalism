import { THEME } from "../../constants/theme";
import { DATA } from "../../constants/data";
import { SectionHeader } from "../ui/SectionHeader";
import { SkillCard } from "../ui/SkillCard";

export function Skills() {
  return (
    <section
      id="skills"
      style={{ background: THEME.yellow, padding: "5rem 6rem" }}
    >
      <SectionHeader>Skills</SectionHeader>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "1.4rem",
        }}
      >
        {DATA.skillCards.map((card, i) => (
          <SkillCard key={card.title} {...card} delay={i * 70} />
        ))}
      </div>
    </section>
  );
}
