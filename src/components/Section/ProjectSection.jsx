import React, { useState } from "react";
import useInView from "../../hooks/useInView";
import PORTFOLIO_DATA from "../../data/data";
import useBreakPoint from "../../hooks/useBreakPoint";
import T from "../../data/Theme";
import SectionPad from "../common/SectionPad";
import SectionHeader from "../common/SectionHeader";

function ProjectCard({ p, idx, inView }) {
  const [hov, setHov] = useState(false);
  const bp = useBreakPoint();
  const [r, g, b] = [
    parseInt(p.color.slice(1, 3), 16),
    parseInt(p.color.slice(3, 5), 16),
    parseInt(p.color.slice(5, 7), 16),
  ];

  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      data-h=""
      style={{
        padding: bp.isMobile ? "22px" : "32px",
        position: "relative",
        overflow: "hidden",
        background: hov ? `rgba(${r},${g},${b},0.06)` : T.surface,
        border: `1px solid ${hov ? p.color + "44" : T.border}`,
        borderRadius: 12,
        cursor: "default",
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : "translateY(28px)",
        transition: `opacity 0.7s ${idx * 0.11}s ease, transform 0.7s ${idx * 0.11}s ease, background 0.3s, border 0.3s`,
      }}
    >
      {/* Ghost watermark */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: -14,
          right: -10,
          fontSize: 104,
          opacity: hov ? 0.07 : 0.025,
          color: p.color,
          lineHeight: 1,
          pointerEvents: "none",
          transition: "opacity 0.3s",
        }}
      >
        {p.icon}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: 16,
        }}
      >
        <div style={{ fontSize: 28, color: p.color, lineHeight: 1 }}>
          {p.icon}
        </div>
        <div style={{ display: "flex", gap: 14 }}>
          {[
            ["Live ↗", p.live],
            ["Repo ↗", p.repo],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              style={{
                fontFamily: T.mono,
                fontSize: 9,
                color: T.dim,
                textDecoration: "none",
                letterSpacing: "0.08em",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = p.color)}
              onMouseLeave={(e) => (e.currentTarget.style.color = T.dim)}
            >
              {label}
            </a>
          ))}
        </div>
      </div>

      <h3
        style={{
          fontFamily: T.display,
          fontSize: bp.isMobile ? 19 : 22,
          fontWeight: 700,
          color: T.text,
          margin: "0 0 9px",
        }}
      >
        {p.title}
      </h3>
      <p
        style={{
          fontFamily: T.body,
          fontSize: 13,
          color: T.muted,
          lineHeight: 1.75,
          margin: "0 0 20px",
        }}
      >
        {p.desc}
      </p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
        {p.tech.map((t) => (
          <span
            key={t}
            style={{
              fontFamily: T.mono,
              fontSize: 9,
              padding: "3px 8px",
              background: `${p.color}12`,
              border: `1px solid ${p.color}26`,
              color: p.color,
              borderRadius: 2,
              letterSpacing: "0.07em",
            }}
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

function ProjectSection() {
  const [ref, inView] = useInView();
  const bp = useBreakPoint();
  const cols = bp.isMobile ? "1fr" : bp.isTablet ? "1fr" : "1fr 1fr";

  return (
    <section
      id="projects"
      style={{ padding: SectionPad(bp), background: T.bg1 }}
    >
      <div ref={ref} style={{ maxWidth: T.maxW, margin: "0 auto" }}>
        <SectionHeader
          label="Portfolio"
          title={
            <>
              Featured <span style={{ color: T.accent }}>Projects</span>
            </>
          }
        />
        <div style={{ display: "grid", gridTemplateColumns: cols, gap: 18 }}>
          {PORTFOLIO_DATA.projects.map((p, i) => (
            <ProjectCard key={i} p={p} idx={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectSection;
