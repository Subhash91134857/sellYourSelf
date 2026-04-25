import T from "../../data/Theme";
import useBreakPoint from "../../hooks/useBreakPoint";

function Heading({ size = 48, children, style = {} }) {
  const { isMobile } = useBreakPoint();
  return (
    <h2
      style={{
        fontFamily: T.display,
        fontSize: isMobile ? Math.max(size * 0.72, 30) : size,
        fontWeight: 800,
        color: T.text,
        margin: 0,
        lineHeight: 1.08,
        ...style,
      }}
    >
      {children}
    </h2>
  );
}

export default Heading;
