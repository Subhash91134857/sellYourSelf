import React, { useEffect, useState } from "react";
import Particles from "../common/Particles";
import  PORTFOLIO_DATA  from "../../data/data";
import useTypewriter from "../../hooks/useTypeWritter";
import useBreakpoint from "../../hooks/useBreakPoint";
import T from "../../data/Theme";
const HeroSection = () => {
  const [vis, setVis] = useState(false);
  const typed = useTypewriter(PORTFOLIO_DATA.roles);
  const bp = useBreakpoint();
  useEffect(() => {
    const t = setTimeout(() => setVis(true), 120);
    return () => clearTimeout(t);
  }, []);

  const an = (d = 0) => ({
    opacity: vis ? 1 : 0,
    transform: vis ? "none" : "translateY(26px)",
    transition: `opacity 0.85s ${d}s ease, transform 0.85s ${d}s ease`,
  });

  const h1Size = bp.isMobile ? 54 : bp.isTablet ? 76 : 96;

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        background: `linear-gradient(135deg, ${T.bg0} 0%, ${T.bg2} 50%, ${T.bg0} 100%)`,
        padding: bp.isMobile ? "100px 20px 60px" : "0 48px",
      }}
    >
      <Particles n={bp.isMobile ? 20 : 42} />

      {!bp.isMobile && (
        <>
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              top: "18%",
              left: "8%",
              width: 360,
              height: 360,
              background:
                "radial-gradient(circle, rgba(74,144,217,0.07) 0%, transparent 70%)",
              borderRadius: "50%",
              animation: "pulse 5s ease-in-out infinite",
              pointerEvents: "none",
            }}
          />
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              bottom: "14%",
              right: "7%",
              width: 260,
              height: 260,
              background:
                "radial-gradient(circle, rgba(183,148,244,0.07) 0%, transparent 70%)",
              borderRadius: "50%",
              animation: "pulse 6s 1.2s ease-in-out infinite",
              pointerEvents: "none",
            }}
          />
        </>
      )}

      <div
        style={{ textAlign: "center", zIndex: 1, maxWidth: 820, width: "100%" }}
      >
        <div
          style={{
            fontFamily: T.mono,
            fontSize: 10,
            color: T.accent,
            letterSpacing: "0.24em",
            textTransform: "uppercase",
            marginBottom: 22,
            ...an(0),
          }}
        >
          ◈ Hello, World!
        </div>

        <h1
          style={{
            fontFamily: T.display,
            fontSize: h1Size,
            fontWeight: 800,
            lineHeight: 0.95,
            color: T.text,
            margin: "0 0 16px",
            ...an(0.15),
          }}
        >
          {PORTFOLIO_DATA.name.split(" ").map((w, i) => (
            <span
              key={i}
              style={{ display: "block", color: i === 1 ? T.accent : T.text }}
            >
              {w}
            </span>
          ))}
        </h1>

        <div
          style={{
            fontFamily: T.mono,
            fontSize: bp.isMobile ? 14 : 21,
            color: T.accentLt,
            marginBottom: 26,
            height: 32,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 3,
            ...an(0.3),
          }}
        >
          <span>{typed}</span>
          <span style={{ animation: "blink 1s infinite", color: T.accent }}>
            |
          </span>
        </div>

        <p
          style={{
            fontFamily: T.body,
            fontSize: bp.isMobile ? 14 : 16,
            color: T.muted,
            lineHeight: 1.78,
            maxWidth: 530,
            margin: "0 auto 42px",
            ...an(0.45),
          }}
        >
          {PORTFOLIO_DATA.tagline}
        </p>

        <div
          style={{
            display: "flex",
            gap: 14,
            justifyContent: "center",
            flexWrap: "wrap",
            ...an(0.6),
          }}
        >
          <a href="#projects" className="btn-primary">
            View Work
          </a>
          <a href="#contact" className="btn-outline">
            Get in Touch
          </a>
        </div>

        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            bottom: 30,
            left: "50%",
            animation: "bounce 2.2s infinite",
          }}
        >
          <div
            style={{
              width: 22,
              height: 38,
              border: "1.5px solid rgba(74,144,217,.32)",
              borderRadius: 11,
              display: "flex",
              justifyContent: "center",
              paddingTop: 6,
            }}
          >
            <div
              style={{
                width: 4,
                height: 7,
                background: T.accent,
                borderRadius: 2,
                animation: "scroll-d 2s infinite",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
