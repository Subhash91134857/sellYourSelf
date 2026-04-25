function Reveal(inView, delay = 0, axis = "Y") {
  return {
    opacity: inView ? 1 : 0,
    transform: inView
      ? "none"
      : axis === "X"
        ? "translateX(-32px)"
        : "translateY(22px)",
    transition: `opacity 0.8s ${delay}s ease, transform 0.8s ${delay}s ease`,
  };
}

export default Reveal;
