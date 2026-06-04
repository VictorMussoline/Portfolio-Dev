import { ReactNode } from "react";
import { motion } from "framer-motion";

interface AnimateOnScrollProps {
  children: ReactNode;
  delay?: number;
}

export function AnimateOnScroll({ children, delay = 0 }: AnimateOnScrollProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.8,
        delay: delay,
        ease: [0.16, 1, 0.3, 1], // Soft spring-like ease
      }}
    >
      {children}
    </motion.div>
  );
}
