import React, { useMemo } from "react";

const Particles = ({ n = 36 }) => {
  const dots = useMemo(
    () =>
      Array.from({ length: n }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        dur: Math.random() * 8 + 6,
        delay: Math.random() * 8,
        op: Math.random() * 0.32 + 0.08,
      })),
    [n],
  );
  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      {dots.map((d) => (
        <div
          key={d.id}
          style={{
            position: "absolute",
            left: `${d.x}%`,
            top: `${d.y}%`,
            width: d.size,
            height: d.size,
            background: `rgba(74,144,217,${d.op})`,
            borderRadius: "50%",
            animation: `float ${d.dur}s ${d.delay}s infinite ease-in-out alternate`,
          }}
        />
      ))}
    </div>
  );
};

export default Particles;
