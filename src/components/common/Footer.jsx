import React from "react";
import PORTFOLIO_DATA from "../../data/data";
import T from "../../data/Theme";
import useBreakPoint from "../../hooks/useBreakPoint";

const Footer = () => {
  const { isMobile } = useBreakPoint();
  return (
    <footer
      style={{
        padding: isMobile ? "18px 20px" : "22px 48px",
        background: T.bg0,
        borderTop: `1px solid rgba(74,144,217,.08)`,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 8,
        flexDirection: isMobile ? "column" : "row",
        textAlign: isMobile ? "center" : "left",
      }}
    >
      <span
        style={{
          fontFamily: T.mono,
          fontSize: 10,
          color: T.faint,
          letterSpacing: "0.06em",
        }}
      >
        © {PORTFOLIO_DATA.year} {PORTFOLIO_DATA.name} — Crafted with precision
      </span>
      <span style={{ fontFamily: T.mono, fontSize: 10, color: T.faint }}>
        Built with <span style={{ color: T.accent }}>React</span> ◈ Designed
        with intent
      </span>
    </footer>
  );
};

export default Footer;
