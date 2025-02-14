import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export function Reveal({
  className,
  delay = 0.2,
  duration = 0.6,
  initial = {},
  animate = {},
  as: Component = "div",
  ...props
}) {
  const MotionComponent = motion.create(Component);

  return (
    <MotionComponent
      className={cn(className)}
      initial={{ opacity: 0, scale: 0.8, ...initial }}
      whileInView={{ opacity: 1, scale: 1, ...animate }}
      viewport={{ once: true }}
      transition={{ duration, delay }}
      {...props}
    />
  );
}
export function FadeIn({
  className,
  delay = 0.2,
  duration = 0.6,
  initial = {},
  animate = {},
  as: Component = "div",
  ...props
}) {
  const MotionComponent = motion.create(Component);
  return (
    <MotionComponent
      className={cn("overflow-hidden h-fit ", className)}
      initial={{ opacity: 0, y: 40, ...initial }}
      whileInView={{ opacity: 1, y: 0, ...animate }}
      viewport={{ once: true }}
      transition={{ duration, delay }}
      {...props}
    />
  );
}

export const AnimatedButton = ({ children, className, ...props }) => {
  return (
    <motion.div
      className={cn(
        "relative overflow-hidden cursor-pointer w-full h-fit",
        className
      )}
      initial="initial"
      // animate="animate"
      whileHover="hovered"
      whileTap="tap"
      variants={{
        initial: {
          scale: 1,
        },
        hovered: {
          scale: 1.05,
        },
        tap: {
          scale: 0.97,
        },
      }}
      {...props}
    >
      <motion.div
        variants={{
          initial: {
            clipPath: " polygon(0 90%, 100% 89%, 100% 100%, 0% 100%)",
            y: 20,
          },
          hovered: {
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
            y: 0,
          },
        }}
        transition={{ duration: 0.4, ease: [0.37, 0.1, 0.37, 0.67] }}
        className="absolute z-[1] inset-0 bg-button-primary origin-bottom h-full "
      />
      <motion.div className="z-[2] relative">{children}</motion.div>
    </motion.div>
  );
};
