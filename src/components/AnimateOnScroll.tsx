import { ReactNode, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface AnimateOnScrollProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  scale?: number;
}

export function AnimateOnScroll({ 
  children, 
  delay = 0,
  direction = "up",
  scale = 0.93
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.15 });

  const getInitialOffset = () => {
    switch (direction) {
      case "up": return { y: 60, x: 0 };
      case "down": return { y: -60, x: 0 };
      case "left": return { x: 50, y: 0 };
      case "right": return { x: -50, y: 0 };
      default: return { y: 60, x: 0 };
    }
  };

  const offset = getInitialOffset();

  return (
    <div ref={ref} style={{ width: "100%" }}>
      <motion.div
        initial={{ opacity: 0, scale: scale, filter: "blur(6px)", ...offset }}
        animate={
          isInView
            ? { opacity: 1, scale: 1, filter: "blur(0px)", x: 0, y: 0 }
            : { opacity: 0, scale: scale, filter: "blur(6px)", ...offset }
        }
        transition={{
          duration: 0.75,
          delay: isInView ? delay : 0,
          ease: [0.16, 1, 0.3, 1], // Signature Apple fluid curve
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
