import React from "react";
import useInView from "../../hooks/useInView";
import PORTFOLIO_DATA from "../../data/data";
import T from "../../data/Theme";
import Card from "../common/Card";
import Reveal from "../common/Reveal";
import SectionHeader from "../common/SectionHeader";
import SectionPad from "../common/SectionPad";
import useBreakPoint from "../../hooks/useBreakPoint";

const ExperiencesSection = () => {
  const [ref, inView] = useInView();
  const bp = useBreakPoint();

  return (
    <section
      id="experience"
      style={{ padding: SectionPad(bp), background: T.bg0 }}
    >
      <div ref={ref} style={{ maxWidth: T.maxW, margin: "0 auto" }}>
        <SectionHeader
          label="Journey"
          title={
            <>
              Work <span style={{ color: T.accent }}>Experience</span>
            </>
          }
        />

        <div style={{ position: "relative" }}>
          {!bp.isMobile && (
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                left: 24,
                top: 0,
                bottom: 0,
                width: 1,
                background:
                  "linear-gradient(180deg, transparent, rgba(74,144,217,0.26) 15%, rgba(74,144,217,0.26) 85%, transparent)",
              }}
            />
          )}

          {PORTFOLIO_DATA.experience.map((e, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                gap: bp.isMobile ? 14 : 40,
                marginBottom:
                  i < PORTFOLIO_DATA.experience.length - 1
                    ? bp.isMobile
                      ? 20
                      : 36
                    : 0,
                ...Reveal(inView, i * 0.14, "X"),
              }}
            >
              <div style={{ flexShrink: 0 }}>
                <div
                  style={{
                    width: bp.isMobile ? 34 : 48,
                    height: bp.isMobile ? 34 : 48,
                    borderRadius: "50%",
                    background: "rgba(74,144,217,0.1)",
                    border: `1px solid rgba(74,144,217,0.26)`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: T.mono,
                    fontSize: bp.isMobile ? 10 : 13,
                    color: T.accent,
                    fontWeight: 700,
                  }}
                >
                  0{i + 1}
                </div>
              </div>

              <Card
                style={{ flex: 1, padding: bp.isMobile ? "18px" : "24px 28px" }}
                data-h=""
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: 7,
                    flexWrap: "wrap",
                    gap: 6,
                  }}
                >
                  <div>
                    <h3
                      style={{
                        fontFamily: T.display,
                        fontSize: bp.isMobile ? 15 : 18,
                        fontWeight: 700,
                        color: T.text,
                        margin: "0 0 3px",
                      }}
                    >
                      {e.role}
                    </h3>
                    <div
                      style={{
                        fontFamily: T.mono,
                        fontSize: 11,
                        color: T.accent,
                      }}
                    >
                      {e.company}
                    </div>
                  </div>
                  <span
                    style={{
                      fontFamily: T.mono,
                      fontSize: 10,
                      color: T.dim,
                      letterSpacing: "0.07em",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {e.period}
                  </span>
                </div>
                <p
                  style={{
                    fontFamily: T.body,
                    fontSize: 13,
                    color: T.muted,
                    lineHeight: 1.75,
                    margin: 0,
                  }}
                >
                  {e.desc}
                </p>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperiencesSection;
