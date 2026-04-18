import { forwardRef, type HTMLAttributes, type ElementType } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";

interface RevealProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
}

const Reveal = forwardRef<HTMLElement, RevealProps>(
  ({ as: Tag = "div", className, children, ...rest }, _ref) => {
    const innerRef = useScrollReveal<HTMLElement>();
    return (
      <Tag ref={innerRef} className={cn("mtmn-reveal", className)} {...rest}>
        {children}
      </Tag>
    );
  }
);

Reveal.displayName = "Reveal";

export default Reveal;
