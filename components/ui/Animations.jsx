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
