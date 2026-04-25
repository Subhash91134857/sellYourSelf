import React, { useEffect, useState } from "react";
import T from "../../data/Theme";
const Cursor = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hov, setHov] = useState(false);
  useEffect(() => {
    const mv = (e) => setPos({ x: e.clientX, y: e.clientY });
    const ov = (e) => setHov(!!e.target.closest("a,button,[data-h]"));
    window.addEventListener("mousemove", mv);
    window.addEventListener("mouseover", ov);
    return () => {
      window.removeEventListener("mousemove", mv);
      window.removeEventListener("mouseover", ov);
    };
  }, []);
  return (
    <div
      className="cursor"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        pointerEvents: "none",
        zIndex: 9999,
      }}
    >
      <div
        style={{
          position: "fixed",
          left: pos.x,
          top: pos.y,
          width: hov ? 38 : 9,
          height: hov ? 38 : 9,
          marginLeft: hov ? -19 : -4.5,
          marginTop: hov ? -19 : -4.5,
          background: hov ? "transparent" : T.accent,
          border: hov ? `1.5px solid ${T.accent}` : "none",
          borderRadius: "50%",
          transition: "all 0.14s ease",
        }}
      />
      <div
        style={{
          position: "fixed",
          left: pos.x - 2.5,
          top: pos.y - 2.5,
          width: 5,
          height: 5,
          background: T.accentLt,
          borderRadius: "50%",
          opacity: hov ? 0 : 1,
          transition: "opacity 0.14s",
        }}
      />
    </div>
  );
};

export default Cursor;
