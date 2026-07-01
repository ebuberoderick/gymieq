import type { ReactNode } from "react";

type GlassVariant = "default" | "strong" | "red";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  variant?: GlassVariant;
  hover?: boolean;
  as?: "div" | "article" | "section";
}

const variants: Record<GlassVariant, string> = {
  default: "glass",
  strong: "glass-strong",
  red: "glass-red",
};

export function GlassCard({
  children,
  className = "",
  variant = "default",
  hover = false,
  as: Tag = "div",
}: GlassCardProps) {
  const hoverClass = hover ? "glass-card-hover" : "";
  return (
    <Tag className={`rounded-2xl ${variants[variant]} ${hoverClass} ${className}`}>
      {children}
    </Tag>
  );
}
