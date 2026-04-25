import useBreakPoint from "../../hooks/useBreakPoint";
import Heading from "./Heading";
import Label from "./Label";

function SectionHeader({ label, title, center = true }) {
  const { isMobile } = useBreakPoint();
  return (
    <div
      style={{
        textAlign: center ? "center" : "left",
        marginBottom: isMobile ? 36 : 60,
      }}
    >
      <Label>{label}</Label>
      <Heading>{title}</Heading>
    </div>
  );
}
export default SectionHeader;
