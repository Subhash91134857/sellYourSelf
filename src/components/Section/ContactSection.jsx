import React from "react";
import useInView from "../../hooks/useInView";
import PORTFOLIO_DATA from "../../data/data";
import T from "../../data/Theme";
import Card from "../common/Card";
import Reveal from "../common/Reveal";
import SectionPad from "../common/SectionPad";
import useBreakPoint from "../../hooks/useBreakPoint";

const ContactSection = () => {
  const [ref, inView] = useInView();
  const bp = useBreakPoint();

  const links = [
    { label: "Email", value: PORTFOLIO_DATA.email, icon: "◈" },
    { label: "GitHub", value: PORTFOLIO_DATA.github, icon: "◉" },
    { label: "LinkedIn", value: PORTFOLIO_DATA.linkedin, icon: "◎" },
    { label: "Location", value: PORTFOLIO_DATA.location, icon: "◌" },
  ];

  return (
    <section
      id="contact"
      style={{ padding: SectionPad(bp), background: T.bg1 }}
    >
      <div
        ref={ref}
        style={{ maxWidth: T.narrowW, margin: "0 auto", textAlign: "center" }}
      >
        <div
          style={{
            fontFamily: T.mono,
            fontSize: 10,
            color: T.accent,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            marginBottom: 14,
            ...Reveal(inView, 0),
          }}
        >
          ◈ Let's Talk
        </div>

        <h2
          style={{
            fontFamily: T.display,
            fontSize: bp.isMobile ? 36 : bp.isTablet ? 52 : 66,
            fontWeight: 800,
            color: T.text,
            lineHeight: 1.05,
            margin: "0 0 18px",
            ...Reveal(inView, 0.1),
          }}
        >
          Have an idea?
          <br />
          <span style={{ color: T.accent }}>Let's build it.</span>
        </h2>

        <p
          style={{
            fontFamily: T.body,
            fontSize: 15,
            color: "rgba(255,255,255,.42)",
            marginBottom: 44,
            ...Reveal(inView, 0.2),
          }}
        >
          I'm currently open to new opportunities. Whether you have a project, a
          question, or just want to say hi — my inbox is always open.
        </p>

        <div style={{ marginBottom: 52, ...Reveal(inView, 0.3) }}>
          <a
            href={`mailto:${PORTFOLIO_DATA.email}`}
            className="btn-primary"
            style={{
              padding: bp.isMobile ? "13px 32px" : "16px 50px",
              boxShadow: "0 0 38px rgba(74,144,217,.22)",
            }}
          >
            Say Hello ↗
          </a>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: bp.isMobile ? "1fr 1fr" : "repeat(4,1fr)",
            gap: 12,
            ...Reveal(inView, 0.4),
          }}
        >
          {links.map((l, i) => (
            <Card
              key={i}
              style={{ padding: "16px 10px", textAlign: "center" }}
              data-h=""
            >
              <div style={{ fontSize: 17, color: T.accent, marginBottom: 6 }}>
                {l.icon}
              </div>
              <div
                style={{
                  fontFamily: T.mono,
                  fontSize: 9,
                  color: T.dim,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: 5,
                }}
              >
                {l.label}
              </div>
              <div
                style={{
                  fontFamily: T.body,
                  fontSize: 11,
                  color: "rgba(255,255,255,.56)",
                  wordBreak: "break-all",
                  lineHeight: 1.4,
                }}
              >
                {l.value}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
