import React from "react";
import useInView from "../../hooks/useInView";
import PORTFOLIO_DATA from "../../data/data";
import useBreakpoint from "../../hooks/useBreakPoint";
import T from "../../data/Theme";
import sectionPad from "../common/SectionPad";
import SectionHeader from "../common/SectionHeader";

const SkillSection = () => {
  const [ref, inView] = useInView();
  const bp = useBreakpoint();

  return (
    <section
      id="skills"
      style={{
        padding: sectionPad(bp),
        background: T.bg0,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          width: 520,
          height: 520,
          background:
            "radial-gradient(circle, rgba(74,144,217,0.04) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />
      <div ref={ref} style={{ maxWidth: T.maxW, margin: "0 auto" }}>
        <SectionHeader
          label="Expertise"
          title={
            <>
              My <span style={{ color: T.accent }}>Skills</span>
            </>
          }
        />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: bp.isMobile ? "1fr" : "1fr 1fr",
            gap: bp.isMobile ? 14 : 22,
          }}
        >
          {PORTFOLIO_DATA.skills.map((s, i) => (
            <div
              key={i}
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "none" : "translateY(16px)",
                transition: `opacity 0.6s ${i * 0.07}s ease, transform 0.6s ${i * 0.07}s ease`,
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: 7,
                }}
              >
                <span
                  style={{
                    fontFamily: T.body,
                    fontSize: 13,
                    color: "rgba(255,255,255,.75)",
                    fontWeight: 500,
                  }}
                >
                  {s.name}
                </span>
                <span
                  style={{ fontFamily: T.mono, fontSize: 10, color: s.color }}
                >
                  {s.level}%
                </span>
              </div>
              <div
                style={{
                  height: 3,
                  background: "rgba(255,255,255,0.06)",
                  borderRadius: 2,
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    height: "100%",
                    width: inView ? `${s.level}%` : "0%",
                    background: `linear-gradient(90deg, ${s.color}80, ${s.color})`,
                    borderRadius: 2,
                    boxShadow: `0 0 8px ${s.color}50`,
                    transition: `width 1.2s ${i * 0.07 + 0.3}s ease`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
