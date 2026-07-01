export interface Feature {
  title: string;
  description: string;
  icon: "chart" | "play" | "trending" | "users" | "target";
}

export const FEATURES: Feature[] = [
  {
    title: "Smarter Workouts",
    description:
      "AI-powered recommendations adapt to your fitness level, goals, and recovery needs.",
    icon: "chart",
  },
  {
    title: "On-Demand & Live Classes",
    description:
      "Join live sessions with elite instructors or stream on-demand workouts anytime.",
    icon: "play",
  },
  {
    title: "Track Your Progress",
    description:
      "Detailed analytics, streak tracking, and milestone celebrations keep you motivated.",
    icon: "trending",
  },
  {
    title: "Supportive Community",
    description:
      "Connect with fellow athletes, share achievements, and train together virtually.",
    icon: "users",
  },
  {
    title: "Achieve Your Goals",
    description:
      "Personalized training plans designed to help you reach every fitness milestone.",
    icon: "target",
  },
];
