import React from "react";
import useInView from "../../hooks/useInView";
import PORTFOLIO_DATA from "../../data/data";
import useBreakpoint from "../../hooks/useBreakPoint";
import T from "../../data/Theme";
import sectionPad from "../common/SectionPad";
import reveal from "../common/Reveal";
import Label from "../common/Label";
import Heading from "../common/Heading";
import Card from "../common/Card";

const AboutSection = () => {
  const [ref, inView] = useInView();
  const bp = useBreakpoint();
  const small = bp.isMobile || bp.isTablet;

  return (
    <section id="about" style={{ padding: sectionPad(bp), background: T.bg1 }}>
      <div ref={ref} style={{ maxWidth: T.maxW, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: small ? "1fr" : "1fr 1fr",
            gap: small ? 36 : 80,
            alignItems: "center",
          }}
        >
          {/* Text */}
          <div style={reveal(inView, 0, "X")}>
            <Label>About Me</Label>
            <Heading style={{ marginBottom: 18 }}>
              Code with
              <br />
              <span style={{ color: T.accent }}>Purpose.</span>
            </Heading>
            <p
              style={{
                fontFamily: T.body,
                fontSize: 15,
                color: T.muted,
                lineHeight: 1.82,
                marginBottom: 26,
              }}
            >
              {PORTFOLIO_DATA.about}
            </p>
            <div style={{ display: "flex", gap: 9, flexWrap: "wrap" }}>
              {PORTFOLIO_DATA.traits.map((t) => (
                <span
                  key={t}
                  style={{
                    fontFamily: T.mono,
                    fontSize: 9,
                    padding: "5px 12px",
                    border: `1px solid rgba(74,144,217,.3)`,
                    borderRadius: 2,
                    color: T.accent,
                    letterSpacing: "0.08em",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 14,
              ...reveal(inView, 0.18),
            }}
          >
            {PORTFOLIO_DATA.stats.map((s, i) => (
              <Card
                key={i}
                style={{
                  padding: bp.isMobile ? "22px 14px" : "28px 20px",
                  textAlign: "center",
                }}
                data-h=""
              >
                <div
                  style={{
                    fontFamily: T.display,
                    fontSize: bp.isMobile ? 36 : 44,
                    fontWeight: 800,
                    color: T.accent,
                    lineHeight: 1,
                  }}
                >
                  {s.value}
                </div>
                <div
                  style={{
                    fontFamily: T.mono,
                    fontSize: 9,
                    color: T.dim,
                    marginTop: 8,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}
                >
                  {s.label}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
