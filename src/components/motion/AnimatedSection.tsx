import { motion, type Variants, type HTMLMotionProps } from "framer-motion";
import { forwardRef } from "react";

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.1,
    },
  },
};

type Props = HTMLMotionProps<"section">;

const AnimatedSection = forwardRef<HTMLElement, Props>(
  ({ children, ...props }, ref) => (
    <motion.section
      ref={ref}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      {...props}
    >
      {children}
    </motion.section>
  )
);

AnimatedSection.displayName = "AnimatedSection";

export default AnimatedSection;
