export const LIVE_PLATFORM = {
  headline: "Every workout is live. Every athlete joins an instructor.",
  subheadline:
    "Gymieq is built around real-time coaching — not pre-recorded libraries. Members must join a live session hosted by a certified instructor, whether in a group class or a private 1-on-1.",
  principles: [
    {
      title: "Instructor-Led Only",
      description:
        "All training on Gymieq happens through live sessions. Members cannot work out alone with static videos — they join an instructor's live broadcast and train together in real time.",
    },
    {
      title: "Group & Private Formats",
      description:
        "Every instructor hosts both group live sessions (multiple members) and private live sessions (one member). You choose the format; the coaching is always live.",
    },
    {
      title: "Real-Time Accountability",
      description:
        "Instructors see who's training, offer live cues, correct form on camera, and keep the energy high — the same experience as being in the room together.",
    },
    {
      title: "Scheduled & Bookable",
      description:
        "Browse instructor calendars, reserve your spot in a group class, or book a private live slot. Show up, join the stream, and train.",
    },
  ],
} as const;

export const MEMBER_JOURNEY = [
  {
    step: "01",
    title: "Create your account",
    description:
      "Sign up for Gymieq and set your fitness goals, experience level, and preferred workout types.",
  },
  {
    step: "02",
    title: "Choose an instructor",
    description:
      "Browse certified coaches by specialty, rating, and schedule. Every instructor leads live group and private sessions.",
  },
  {
    step: "03",
    title: "Join a live session",
    description:
      "Reserve a spot in a group live class or book a private live session. At start time, tap Join — you'll enter the instructor's live stream.",
  },
  {
    step: "04",
    title: "Train in real time",
    description:
      "Follow along as your instructor coaches you live. Ask questions in chat, get form feedback, and track your progress after every session.",
  },
] as const;

export const INSTRUCTOR_JOURNEY = [
  {
    step: "01",
    title: "Get certified & onboarded",
    description:
      "Apply with your fitness credentials. We train you on Gymieq's live streaming tools, safety protocols, and community standards.",
  },
  {
    step: "02",
    title: "Set your live schedule",
    description:
      "Publish group live class times and open private live session slots. Members book directly through your instructor profile.",
  },
  {
    step: "03",
    title: "Go live with your community",
    description:
      "Stream group classes to dozens or hundreds of members at once. Coach, motivate, and interact through live chat and video.",
  },
  {
    step: "04",
    title: "Host private live sessions",
    description:
      "Meet members 1-on-1 in private live rooms. Deliver personalized programming, form checks, and goal-setting in real time.",
  },
] as const;

export const LIVE_SESSION_RULES = [
  "Every member must join an instructor's live session to work out — no solo pre-recorded workouts",
  "Instructors must be live on camera for the entire session duration",
  "Group live sessions: one instructor broadcasts to many members in real time",
  "Private live sessions: one instructor coaches one member via live video",
  "Members reserve or join live sessions through an instructor's published schedule",
  "Group sessions may offer 48-hour replays; private sessions are live-only",
] as const;

export const LIVE_SESSION_FAQ = [
  {
    question: "Do I have to join a live session to work out on Gymieq?",
    answer:
      "Yes. Every workout on Gymieq is instructor-led and live. You join a group live class or a private live session — there are no solo, pre-recorded workouts.",
  },
  {
    question: "What's the difference between group and private live sessions?",
    answer:
      "Group live sessions have multiple members training together with one instructor broadcasting live. Private live sessions are 1-on-1 — just you and your instructor on a live video call.",
  },
  {
    question: "Can I pick any instructor?",
    answer:
      "Yes. Browse all certified instructors, view their live schedules, and join whichever group class or private slot fits your goals and availability.",
  },
  {
    question: "What if I miss a live session?",
    answer:
      "Group live sessions are available as replays for 48 hours. Private sessions are live-only — you can reschedule with your instructor if you need to.",
  },
  {
    question: "How do instructors earn on Gymieq?",
    answer:
      "Instructors are paid per group live class (based on attendance) and per private live session booked. Top instructors grow their own member communities on the platform.",
  },
] as const;

export const INSTRUCTOR_RESPONSIBILITIES = [
  "Publish a weekly live schedule for group classes and private session slots",
  "Go live on camera for every session — members join your room to train",
  "Coach group live classes with real-time cues, chat interaction, and energy",
  "Deliver private live 1-on-1 sessions with personalized programming and form checks",
  "Ensure every member in your session receives live coaching attention",
  "Maintain safety standards and adapt workouts for different fitness levels",
  "Build and retain a community of members who join your live sessions regularly",
] as const;

export const CONTACT_FAQS = [
  ...LIVE_SESSION_FAQ,
  {
    question: "How do I join a group live session?",
    answer:
      "Browse an instructor's schedule, reserve your spot, and tap Join when the session goes live. You'll enter their live stream alongside other members and follow along in real time.",
  },
  {
    question: "How do I book a private live session?",
    answer:
      "Select an instructor, view their available private live slots, and book a time. At your appointment, you'll join a live 1-on-1 video room with your coach.",
  },
  {
    question: "Can I work out without joining a live session?",
    answer:
      "No. Gymieq is instructor-led and live-only. Every workout requires joining an instructor's live group class or private session.",
  },
] as const;
