import { useEffect, useRef, useState } from "react";

function useTypewriter(phrases, speed = 70) {
  const [text, setText] = useState("");
  const s = useRef({ p: 0, c: 0, mode: "typing" });
  useEffect(() => {
    const tick = setInterval(() => {
      const { p, c, mode } = s.current;
      const cur = phrases[p];
      if (mode === "typing") {
        s.current.c++;
        setText(cur.slice(0, s.current.c));
        if (s.current.c === cur.length) {
          s.current.mode = "wait";
          setTimeout(() => {
            s.current.mode = "erase";
          }, 1800);
        }
      } else if (mode === "erase") {
        s.current.c--;
        setText(cur.slice(0, s.current.c));
        if (s.current.c === 0) {
          s.current.p = (p + 1) % phrases.length;
          s.current.mode = "typing";
        }
      }
    }, speed);
    return () => clearInterval(tick);
  }, []);
  return text;
}

export default useTypewriter;
