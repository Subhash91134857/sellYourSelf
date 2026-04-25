import { useState } from "react";
import useScrollY from "../../hooks/UseScrollY";
import PORTFOLIO_DATA from "../../data/data";
import useBreakpoint from "../../hooks/useBreakPoint";
import T from "../../data/Theme";

function NavBar({ active }) {
  const scrollY = useScrollY();
  const bp = useBreakpoint();
  const [open, setOpen] = useState(false);
  const scrolled = scrollY > 50;

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 200,
          padding: `${scrolled ? 10 : bp.isMobile ? 16 : 22}px ${bp.isMobile ? 20 : 48}px`,
          background: scrolled || open ? "rgba(8,8,26,0.96)" : "transparent",
          backdropFilter: scrolled || open ? "blur(20px)" : "none",
          borderBottom: scrolled
            ? `1px solid ${T.borderAcc}`
            : "1px solid transparent",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          transition: "all 0.35s ease",
        }}
      >
        <a
          href="#home"
          style={{
            fontFamily: T.mono,
            fontSize: 20,
            fontWeight: 700,
            color: T.accent,
            textDecoration: "none",
            letterSpacing: "-0.02em",
          }}
        >
          {PORTFOLIO_DATA.initials}
          <span style={{ color: T.accentLt }}>.</span>
        </a>

        {/* Desktop links */}
        <div className="desktop-links" style={{ display: "flex", gap: 28 }}>
          {PORTFOLIO_DATA.nav.map((l) => (
            <a
              key={l}
              href={`#${l}`}
              className={`nav-link${active === l ? " active" : ""}`}
            >
              {l}
            </a>
          ))}
        </div>

        {/* Hamburger */}
        <button
          className="ham-btn"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          style={{
            display: "none",
            flexDirection: "column",
            gap: 5,
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 6,
          }}
        >
          <span
            className="ham"
            style={{
              transform: open ? "translateY(7px) rotate(45deg)" : "none",
            }}
          />
          <span className="ham" style={{ opacity: open ? 0 : 1 }} />
          <span
            className="ham"
            style={{
              transform: open ? "translateY(-7px) rotate(-45deg)" : "none",
            }}
          />
        </button>
      </nav>

      {/* Mobile overlay */}
      <div
        className="mobile-overlay"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 190,
          background: "rgba(8,8,26,0.98)",
          backdropFilter: "blur(20px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 30,
          opacity: open ? 1 : 0,
          pointerEvents: open ? "all" : "none",
          transition: "opacity 0.3s",
        }}
      >
        {PORTFOLIO_DATA.nav.map((l) => (
          <a
            key={l}
            href={`#${l}`}
            onClick={() => setOpen(false)}
            style={{
              fontFamily: T.display,
              fontSize: 34,
              fontWeight: 700,
              textDecoration: "none",
              color: active === l ? T.accentLt : T.muted,
              textTransform: "capitalize",
              transition: "color 0.2s",
            }}
          >
            {l}
          </a>
        ))}
      </div>
    </>
  );
}
export default NavBar;
