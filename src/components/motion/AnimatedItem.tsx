import { motion, type Variants, type HTMLMotionProps } from "framer-motion";
import { forwardRef } from "react";

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

type Props = HTMLMotionProps<"div">;

const AnimatedItem = forwardRef<HTMLDivElement, Props>(
  ({ children, ...props }, ref) => (
    <motion.div ref={ref} variants={itemVariants} {...props}>
      {children}
    </motion.div>
  )
);

AnimatedItem.displayName = "AnimatedItem";

export default AnimatedItem;
