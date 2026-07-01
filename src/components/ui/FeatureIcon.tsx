import type { Feature } from "@/lib/constants/features";
import {
  BarChart3,
  Play,
  TrendingUp,
  Users,
  Target,
} from "lucide-react";

const icons = {
  chart: BarChart3,
  play: Play,
  trending: TrendingUp,
  users: Users,
  target: Target,
};

interface FeatureIconProps {
  icon: Feature["icon"];
  className?: string;
}

export function FeatureIcon({ icon, className = "" }: FeatureIconProps) {
  const Icon = icons[icon];
  return (
    <div
      className={`glass-red flex h-12 w-12 items-center justify-center rounded-xl text-brand-red ${className}`}
    >
      <Icon className="h-6 w-6" />
    </div>
  );
}
