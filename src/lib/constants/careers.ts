export interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: "Full-time" | "Part-time" | "Contract";
  description: string;
}

export const INSTRUCTOR_PERKS = [
  {
    title: "Host Live Group Classes",
    description:
      "Go live and train dozens or hundreds of members at once. Set your schedule, build your community, and get paid per live session based on attendance.",
  },
  {
    title: "Offer Private Live Sessions",
    description:
      "Open 1-on-1 live video slots on your calendar. Members book directly — you coach them in real time with full personalized attention.",
  },
  {
    title: "Grow Your Member Base",
    description:
      "Every member must join an instructor's live session to train. Build loyalty through consistent live coaching and watch your community grow.",
  },
  {
    title: "Stream From Anywhere",
    description:
      "Broadcast from your home gym, studio, or on the road. Gymieq provides the live streaming tools, booking system, and payment infrastructure.",
  },
] as const;

export const BENEFITS = [
  { title: "Remote-First", description: "Work from anywhere with a global, async-friendly team." },
  { title: "Free Gymieq Premium", description: "Join any instructor's live group or private session — on us." },
  { title: "Health & Wellness", description: "Comprehensive health coverage and annual wellness stipend." },
  { title: "Learning Budget", description: "$2,000/year for courses, certifications, and conferences." },
  { title: "Equity Package", description: "Share in the growth of a fast-scaling fitness platform." },
  { title: "Flexible PTO", description: "Take the time you need to recharge and perform at your best." },
] as const;

export const JOB_OPENINGS: JobOpening[] = [
  {
    id: "1",
    title: "Senior Mobile Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "Build the apps members use to join live instructor sessions, book private slots, and stream workouts in real time.",
  },
  {
    id: "2",
    title: "Instructor Success Manager",
    department: "Operations",
    location: "Remote / NYC",
    type: "Full-time",
    description: "Onboard instructors, train them on live streaming tools, and help them grow group and private live session attendance.",
  },
  {
    id: "3",
    title: "Content Marketing Lead",
    department: "Marketing",
    location: "Remote",
    type: "Full-time",
    description: "Shape the Gymieq brand story across social, email, and partnerships in the fitness space.",
  },
  {
    id: "4",
    title: "Certified Fitness Instructor",
    department: "Instructor Network",
    location: "Remote",
    type: "Contract",
    description: "Lead live group classes and offer private 1-on-1 sessions to members worldwide. NASM, ACE, or equivalent required.",
  },
  {
    id: "5",
    title: "Product Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
    description: "Design intuitive experiences for joining live sessions, instructor booking, and real-time member interaction.",
  },
  {
    id: "6",
    title: "Live Streaming Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "Build low-latency live video infrastructure so instructors can broadcast group and private sessions flawlessly to members worldwide.",
  },
  {
    id: "7",
    title: "HIIT & Strength Instructor",
    department: "Instructor Network",
    location: "Remote",
    type: "Contract",
    description: "Go live daily with group classes and offer private 1-on-1 sessions. Members join your live room to train — you coach in real time.",
  },
];
