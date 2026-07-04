export type WorkoutCategory =
  | "Strength"
  | "HIIT"
  | "Yoga"
  | "Mobility"
  | "Cardio"
  | "Core";

export interface Category {
  name: WorkoutCategory;
  icon: string;
  description: string;
  image: string;
  liveClasses: number;
  avgDuration: string;
}

export const CATEGORIES: Category[] = [
  {
    name: "Strength",
    icon: "dumbbell",
    description: "Build muscle and power with progressive overload coaching.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
    liveClasses: 420,
    avgDuration: "45 min",
  },
  {
    name: "HIIT",
    icon: "zap",
    description: "High-intensity intervals to torch calories and boost endurance.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80",
    liveClasses: 380,
    avgDuration: "30 min",
  },
  {
    name: "Yoga",
    icon: "heart-handshake",
    description: "Flow, breathe, and restore with guided live yoga sessions.",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80",
    liveClasses: 290,
    avgDuration: "60 min",
  },
  {
    name: "Mobility",
    icon: "move",
    description: "Improve range of motion and prevent injury with expert cues.",
    image: "https://images.unsplash.com/photo-1599901860904-17e06e7080a0?w=800&q=80",
    liveClasses: 180,
    avgDuration: "25 min",
  },
  {
    name: "Cardio",
    icon: "heart-pulse",
    description: "Heart-pumping sessions to elevate stamina and burn fat.",
    image: "https://images.unsplash.com/photo-1476480862128-209bfaa8edc8?w=800&q=80",
    liveClasses: 310,
    avgDuration: "35 min",
  },
  {
    name: "Core",
    icon: "target",
    description: "Sculpt stability and strength from the center out.",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80",
    liveClasses: 220,
    avgDuration: "25 min",
  },
];

export interface LiveSession {
  id: string;
  title: string;
  instructor: string;
  duration: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  category: WorkoutCategory;
  isLive: boolean;
  viewers?: number;
  image: string;
}

export const LIVE_SESSIONS: LiveSession[] = [
  {
    id: "1",
    title: "Full Body Strength",
    instructor: "Marcus Chen",
    duration: "45 min",
    level: "Advanced",
    category: "Strength",
    isLive: true,
    viewers: 2847,
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
  },
  {
    id: "2",
    title: "Morning HIIT Blast",
    instructor: "Sarah Williams",
    duration: "30 min",
    level: "Intermediate",
    category: "HIIT",
    isLive: true,
    viewers: 1523,
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80",
  },
  {
    id: "3",
    title: "Power Yoga Flow",
    instructor: "Elena Rodriguez",
    duration: "60 min",
    level: "Beginner",
    category: "Yoga",
    isLive: false,
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80",
  },
  {
    id: "4",
    title: "Core Crusher",
    instructor: "James Okonkwo",
    duration: "25 min",
    level: "Advanced",
    category: "Core",
    isLive: false,
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80",
  },
];

export const FEATURED_SESSION = LIVE_SESSIONS[0];
