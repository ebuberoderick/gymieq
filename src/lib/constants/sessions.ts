export type WorkoutCategory =
  | "Strength"
  | "HIIT"
  | "Yoga"
  | "Mobility"
  | "Cardio"
  | "Core";

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

export const CATEGORIES: { name: WorkoutCategory; icon: string }[] = [
  { name: "Strength", icon: "dumbbell" },
  { name: "HIIT", icon: "zap" },
  { name: "Yoga", icon: "heart-handshake" },
  { name: "Mobility", icon: "move" },
  { name: "Cardio", icon: "heart-pulse" },
  { name: "Core", icon: "target" },
];

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
