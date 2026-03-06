import { THEME } from "../../constants/theme";
import { DATA } from "../../constants/data";
import { SectionHeader } from "../ui/SectionHeader";
import { SkillCard } from "../ui/SkillCard";

export function Skills() {
  return (
    <section
      id="skills"
      className="section-pad"
      style={{ background: THEME.yellow }}
    >
      <SectionHeader>Skills</SectionHeader>
      <div className="skills-grid">
        {DATA.skillCards.map((card, i) => (
          <SkillCard key={card.title} {...card} delay={i * 70} />
        ))}
      </div>
    </section>
  );
}
