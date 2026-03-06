import { THEME } from "../../constants/theme";
import { DATA } from "../../constants/data";
import { SectionHeader } from "../ui/SectionHeader";
import { SubHeader } from "../ui/SubHeader";
import { EduCard } from "../ui/EduCard";
import { SocialCard } from "../ui/SocialCard";

export function Contact() {
  return (
    <section
      id="contact"
      style={{ background: THEME.white, padding: "5rem 6rem" }}
    >
      <SectionHeader>Get In Touch</SectionHeader>
      <div
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem" }}
      >
        {/* Left */}
        <div className="reveal-left">
          <EduCard />
          <div style={{ marginTop: "1.5rem" }}>
            <SubHeader>🌍 Languages</SubHeader>
            {DATA.languages.map((l) => (
              <div
                key={l.name}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  border: THEME.border,
                  padding: "0.8rem 1.2rem",
                  marginBottom: 8,
                  boxShadow: "3px 3px 0 #0a0a0a",
                }}
              >
                <span style={{ fontWeight: 700 }}>{l.name}</span>
                <div style={{ display: "flex", gap: 4 }}>
                  {[0, 1, 2].map((i) => (
                    <div
                      key={i}
                      style={{
                        width: 14,
                        height: 14,
                        border: `2px solid ${THEME.black}`,
                        background: i < l.dots ? THEME.yellow : "transparent",
                      }}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="reveal-right">
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.8,
              marginBottom: "1.5rem",
              color: "#444",
            }}
          >
            Open to backend engineering roles, freelance projects, and
            interesting collaborations. Let&apos;s build something reliable
            together.
          </p>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              flexWrap: "wrap",
              marginBottom: "1.5rem",
            }}
          >
            {DATA.social.map((sc) => (
              <SocialCard key={sc.label} {...sc} />
            ))}
          </div>
          <div
            style={{
              border: THEME.border,
              boxShadow: THEME.shadowLg,
              padding: "1.6rem",
              background: THEME.yellow,
            }}
          >
            <div
              style={{
                fontFamily: "'Bebas Neue',sans-serif",
                fontSize: "1.3rem",
                marginBottom: 12,
                letterSpacing: 1,
              }}
            >
              📬 Direct Contact
            </div>
            <div
              style={{
                fontFamily: "'JetBrains Mono',monospace",
                fontSize: "0.88rem",
                marginBottom: 8,
              }}
            >
              ✉️ {DATA.email}
            </div>
            <div
              style={{
                fontFamily: "'JetBrains Mono',monospace",
                fontSize: "0.88rem",
              }}
            >
              📞 {DATA.phone}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
