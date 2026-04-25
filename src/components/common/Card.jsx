import { useState } from "react";
import T from "../../data/Theme";

function Card({ children, style = {}, ...rest }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: T.surface,
        border: `1px solid ${hov ? T.borderAcc : T.border}`,
        borderRadius: 10,
        transition: "border-color 0.3s, transform 0.3s",
        transform: hov ? "translateY(-3px)" : "none",
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}

export default Card;
