export const SESSION_TYPES = [
  {
    type: "group" as const,
    title: "Live Group Sessions",
    tagline: "Join the room. Train together.",
    description:
      "Instructors go live and open a virtual class room. Members join in real time — streaming video, following along, and receiving live coaching alongside other athletes. Every user in the session is connected to the same instructor, live.",
    features: [
      "Instructor broadcasts live — members join the session to train",
      "Real-time coaching, cues, and form corrections for the whole class",
      "Live chat, reactions, and leaderboard competition with other members",
      "Scheduled sessions across Strength, HIIT, Yoga, Mobility, and more",
      "Members must join an instructor's live room — no solo playback",
    ],
    icon: "users",
  },
  {
    type: "private" as const,
    title: "Live Private Sessions",
    tagline: "1-on-1. Fully live. Fully yours.",
    description:
      "Members book a live video session directly with their chosen instructor. It's a real-time 1-on-1 call — not a recorded plan. The instructor coaches, watches form, and adapts the workout as you move, just like an in-person session.",
    features: [
      "Live 1-on-1 video between member and instructor — always real-time",
      "Personalized programming built and adjusted during the session",
      "Direct form analysis and injury-prevention guidance on camera",
      "Flexible booking around the instructor's open live slots",
      "Same live standard: every workout requires an instructor present",
    ],
    icon: "user",
  },
] as const;

export type SessionType = "group" | "private";

export interface Instructor {
  id: string;
  name: string;
  title: string;
  specialty: string;
  bio: string;
  image: string;
  sessionTypes: SessionType[];
  rating: number;
  students: number;
  groupClasses: number;
  privateSlots: string;
  liveWeeklyHours: number;
  avgGroupSize: number;
}

export const INSTRUCTORS: Instructor[] = [
  {
    id: "1",
    name: "Marcus Chen",
    title: "Head Strength Coach",
    specialty: "Strength & Conditioning",
    bio: "Former collegiate athlete with 12 years of coaching. Marcus runs daily live group strength sessions and books private live slots for personalized powerlifting programming.",
    image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=400&q=80",
    sessionTypes: ["group", "private"],
    rating: 4.9,
    students: 4200,
    groupClasses: 156,
    privateSlots: "Mon, Wed, Fri — 7AM & 6PM",
    liveWeeklyHours: 18,
    avgGroupSize: 85,
  },
  {
    id: "2",
    name: "Sarah Williams",
    title: "HIIT & Cardio Lead",
    specialty: "HIIT & Metabolic Training",
    bio: "NASM-certified trainer known for high-energy live group HIIT. Members join her live room for sweat-drenched sessions; private slots focus on metabolic testing and custom intervals.",
    image: "https://images.unsplash.com/photo-1594381898411-846597c8927d?w=400&q=80",
    sessionTypes: ["group", "private"],
    rating: 4.8,
    students: 3800,
    groupClasses: 210,
    privateSlots: "Tue, Thu, Sat — 8AM & 5PM",
    liveWeeklyHours: 22,
    avgGroupSize: 120,
  },
  {
    id: "3",
    name: "Sarah Williams",
    title: "HIIT & Cardio Lead",
    specialty: "HIIT & Metabolic Training",
    bio: "NASM-certified trainer known for high-energy live group HIIT. Members join her live room for sweat-drenched sessions; private slots focus on metabolic testing and custom intervals.",
    image: "https://images.unsplash.com/photo-1594381898411-846597c8927d?w=400&q=80",
    sessionTypes: ["group", "private"],
    rating: 4.8,
    students: 3800,
    groupClasses: 210,
    privateSlots: "Tue, Thu, Sat — 8AM & 5PM",
    liveWeeklyHours: 22,
    avgGroupSize: 120,
  },
  {
    id: "5",
    name: "John Doe",
    title: "Strength & Conditioning Coach",
    specialty: "Strength & Conditioning",
    bio: "Former collegiate athlete with 12 years of coaching. Marcus runs daily live group strength sessions and books private live slots for personalized powerlifting programming.",
    image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=400&q=80",
    sessionTypes: ["group", "private"],
    rating: 4.9,
    students: 4200,
    groupClasses: 156,
    privateSlots: "Mon, Wed, Fri — 7AM & 6PM",
    liveWeeklyHours: 18,
    avgGroupSize: 85,
  },
  {
    id: "5",
    name: "Jane Doe",
    title: "HIIT & Cardio Lead",
    specialty: "HIIT & Metabolic Training",
    bio: "NASM-certified trainer known for high-energy live group HIIT. Members join her live room for sweat-drenched sessions; private slots focus on metabolic testing and custom intervals.",
    image: "https://images.unsplash.com/photo-1594381898411-846597c8927d?w=400&q=80",
    sessionTypes: ["group", "private"],
    rating: 4.8,
    students: 3800,
    groupClasses: 210,
    privateSlots: "Tue, Thu, Sat — 8AM & 5PM",
    liveWeeklyHours: 22,
    avgGroupSize: 120,
  },
  {
    id: "6",
    name: "Jim Beam",
    title: "Strength & Conditioning Coach",
    specialty: "Strength & Conditioning",
    bio: "Former collegiate athlete with 12 years of coaching. Marcus runs daily live group strength sessions and books private live slots for personalized powerlifting programming.",
    image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=400&q=80",
    sessionTypes: ["group", "private"],
    rating: 4.9,
    students: 4200,
    groupClasses: 156,
    privateSlots: "Mon, Wed, Fri — 7AM & 6PM",
    liveWeeklyHours: 18,
    avgGroupSize: 85,
  },
  {
    id: "7",
    name: "Sarah Williams",
    title: "HIIT & Cardio Lead",
    specialty: "HIIT & Metabolic Training",
    bio: "NASM-certified trainer known for high-energy live group HIIT. Members join her live room for sweat-drenched sessions; private slots focus on metabolic testing and custom intervals.",
    image: "https://images.unsplash.com/photo-1594381898411-846597c8927d?w=400&q=80",
    sessionTypes: ["group", "private"],
    rating: 4.8,
    students: 3800,
    groupClasses: 210,
    privateSlots: "Tue, Thu, Sat — 8AM & 5PM",
    liveWeeklyHours: 22,
    avgGroupSize: 120,
  },
  {
    id: "3",
    name: "Elena Rodriguez",
    title: "Yoga & Mobility Director",
    specialty: "Yoga, Mobility & Recovery",
    bio: "RYT-500 instructor leading live group yoga flows and private mobility sessions. Every class is streamed live — members join her session to move, breathe, and recover together.",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&q=80",
    sessionTypes: ["group", "private"],
    rating: 5.0,
    students: 2900,
    groupClasses: 180,
    privateSlots: "Daily — 9AM & 4PM",
    liveWeeklyHours: 20,
    avgGroupSize: 65,
  },
  {
    id: "4",
    name: "James Okonkwo",
    title: "Core & Performance Coach",
    specialty: "Core Training & Athletic Performance",
    bio: "Sports performance specialist hosting live group core crushers and private athletic prep sessions. Members join his live room for explosive, coach-led training.",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&q=80",
    sessionTypes: ["group", "private"],
    rating: 4.9,
    students: 3100,
    groupClasses: 142,
    privateSlots: "Mon–Fri — 6AM & 7PM",
    liveWeeklyHours: 16,
    avgGroupSize: 70,
  },
];
