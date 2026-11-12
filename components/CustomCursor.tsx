"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [ring, setRing] = useState({ x: -100, y: -100 });
  const [hovering, setHovering] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updateEnabled = () => {
      setEnabled(finePointer.matches && !reduced.matches);
    };

    updateEnabled();
    finePointer.addEventListener("change", updateEnabled);
    reduced.addEventListener("change", updateEnabled);

    return () => {
      finePointer.removeEventListener("change", updateEnabled);
      reduced.removeEventListener("change", updateEnabled);
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;

    let raf = 0;
    let target = { x: -100, y: -100 };
    let current = { x: -100, y: -100 };

    const onMove = (e: MouseEvent) => {
      target = { x: e.clientX, y: e.clientY };
      setPos({ x: e.clientX, y: e.clientY });
    };

    const onOver = (e: MouseEvent) => {
      const el = e.target as HTMLElement | null;
      const interactive = el?.closest(
        "a, button, input, textarea, select, [data-cursor='hover']"
      );
      setHovering(Boolean(interactive));
    };

    const tick = () => {
      current.x += (target.x - current.x) * 0.18;
      current.y += (target.y - current.y) * 0.18;
      setRing({ x: current.x, y: current.y });
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div
        className={`custom-cursor ${hovering ? "hovering" : ""}`}
        style={{ left: pos.x, top: pos.y }}
      />
      <div
        className="custom-cursor-ring"
        style={{ left: ring.x, top: ring.y }}
      />
    </>
  );
}
