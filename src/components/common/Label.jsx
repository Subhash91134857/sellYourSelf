import T from "../../data/Theme";

function Label({ children }) {
  return (
    <div
      style={{
        fontFamily: T.mono,
        fontSize: 10,
        color: T.accent,
        letterSpacing: "0.22em",
        textTransform: "uppercase",
        marginBottom: 14,
      }}
    >
      ◈ {children}
    </div>
  );
}
export default Label;
