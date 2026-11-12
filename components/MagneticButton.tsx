"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";
import {
  useRef,
  type ComponentPropsWithoutRef,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";

type CommonProps = {
  children: ReactNode;
  className?: string;
  strength?: number;
};

type AsButton = CommonProps &
  Omit<ComponentPropsWithoutRef<"button">, "className" | "children"> & {
    href?: undefined;
  };

type AsLink = CommonProps & {
  href: string;
  target?: string;
  rel?: string;
};

type Props = AsButton | AsLink;

export default function MagneticButton(props: Props) {
  const { children, className, strength = 0.28 } = props;
  const ref = useRef<HTMLElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 280, damping: 20 });
  const springY = useSpring(y, { stiffness: 280, damping: 20 });

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(hover: none)").matches) return;
    const rect = el.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;
    x.set(offsetX * strength);
    y.set(offsetY * strength);
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  if ("href" in props && props.href) {
    return (
      <motion.div
        ref={ref as React.RefObject<HTMLDivElement>}
        style={{ x: springX, y: springY }}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className="inline-flex"
      >
        <Link
          href={props.href}
          target={props.target}
          rel={props.rel}
          className={cn("inline-flex", className)}
          data-cursor="hover"
        >
          {children}
        </Link>
      </motion.div>
    );
  }

  const buttonProps = props as AsButton;

  return (
    <motion.button
      ref={ref as React.RefObject<HTMLButtonElement>}
      type={buttonProps.type ?? "button"}
      onClick={buttonProps.onClick}
      disabled={buttonProps.disabled}
      className={cn("inline-flex", className)}
      style={{ x: springX, y: springY }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      data-cursor="hover"
    >
      {children}
    </motion.button>
  );
}
