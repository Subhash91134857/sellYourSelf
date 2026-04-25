function SectionPad(bp) {
  if (bp.isMobile) return "64px 20px";
  if (bp.isTablet) return "80px 32px";
  return "120px 48px";
}

export default SectionPad;
