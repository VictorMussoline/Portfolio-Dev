import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import "./CustomCursor.css";

export function CustomCursor() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  // Offset calculations using useTransform
  const dotX = useTransform(mouseX, (x) => x - 4);
  const dotY = useTransform(mouseY, (y) => y - 4);

  const outlineTargetX = useTransform(mouseX, (x) => x - 20);
  const outlineTargetY = useTransform(mouseY, (y) => y - 20);

  // Smooth springs for outer circle
  const outlineX = useSpring(outlineTargetX, { stiffness: 150, damping: 15, mass: 0.5 });
  const outlineY = useSpring(outlineTargetY, { stiffness: 150, damping: 15, mass: 0.5 });

  useEffect(() => {
    // Apenas ativa se tiver mouse (ignora touch/mobile)
    if (window.matchMedia("(pointer: fine)").matches) {
      setIsMobile(false);
    }

    const updateMousePosition = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === 'a' || 
        target.tagName.toLowerCase() === 'button' || 
        target.closest('a') || 
        target.closest('button')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY]);

  if (isMobile) return null;

  return (
    <>
      <motion.div
        className="cursor-dot"
        style={{
          x: dotX,
          y: dotY,
        }}
        animate={{
          scale: isHovering ? 0 : 1,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
      />
      <motion.div
        className="cursor-outline"
        style={{
          x: outlineX,
          y: outlineY,
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          backgroundColor: isHovering ? "rgba(41, 151, 255, 0.1)" : "rgba(0, 0, 0, 0)",
        }}
      />
    </>
  );
}

