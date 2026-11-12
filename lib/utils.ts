import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getDirectionsUrl() {
  return "https://maps.app.goo.gl/Lk68g4tKVnuAja5L7";
}
