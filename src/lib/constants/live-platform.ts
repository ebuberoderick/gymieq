export const PLATFORM_MODEL = {
  headline: "Every workout is live. Every athlete trains with an instructor.",
  description:
    "Gymieq is built around real-time connection — not pre-recorded libraries. Members never train alone. Every session on the platform is a live broadcast led by a certified instructor, whether you're in a group class with hundreds of athletes or a private 1-on-1 room.",
  principles: [
    {
      title: "Instructor-Led Only",
      description:
        "There are no solo, self-guided workouts on Gymieq. Every training experience is hosted and coached live by a verified instructor in real time.",
    },
    {
      title: "Live by Default",
      description:
        "All group and private sessions are streamed live. Instructors see you, cue your form, and adapt the workout as it happens — just like being in the gym.",
    },
    {
      title: "Join, Don't Browse",
      description:
        "Members browse instructor schedules, reserve a spot, and join the live room when the session starts. Your camera and mic connect you directly to your coach.",
    },
    {
      title: "Two Formats, One Standard",
      description:
        "Group sessions bring the energy of a full class. Private sessions deliver focused 1-on-1 coaching. Both are live, both are instructor-led, both count toward your goals.",
    },
  ],
} as const;

export const MEMBER_JOURNEY = [
  {
    step: "01",
    title: "Choose your instructor",
    description:
      "Browse certified coaches by specialty — Strength, HIIT, Yoga, and more. Read bios, check ratings, and see their live session schedule.",
  },
  {
    step: "02",
    title: "Reserve a live session",
    description:
      "Pick a group class on the calendar or book a private 1-on-1 slot. Every reservation guarantees your place in the instructor's live room.",
  },
  {
    step: "03",
    title: "Join the live room",
    description:
      "When the session starts, tap Join Live. Your video feed connects to the instructor's stream. You'll see real-time coaching, cues, and corrections.",
  },
  {
    step: "04",
    title: "Train together in real time",
    description:
      "Follow along as your instructor leads the workout live. In group sessions, train alongside other members with chat and leaderboards. In private sessions, get fully personalized attention.",
  },
  {
    step: "05",
    title: "Track & return",
    description:
      "Session stats, attendance, and progress are logged automatically. Book your next live session and build a consistent training rhythm with your coach.",
  },
] as const;

export const INSTRUCTOR_MODEL = [
  {
    title: "Host Group Live Classes",
    description:
      "Go live on schedule and coach dozens or hundreds of members simultaneously. Set your class capacity, discipline, and difficulty level. Members join your live room and train together under your guidance.",
    details: [
      "Stream in HD with multi-camera support",
      "Real-time chat, shoutouts, and leaderboard",
      "Set recurring weekly class schedules",
      "Earn per attendee with transparent payouts",
    ],
  },
  {
    title: "Offer Private Live Sessions",
    description:
      "Open 1-on-1 live slots on your calendar for members who want personalized coaching. Private rooms are exclusive — just you and your athlete, connected live via video.",
    details: [
      "Flexible booking windows you control",
      "Custom programming delivered live",
      "Form checks and real-time adjustments",
      "Higher per-session earnings",
    ],
  },
  {
    title: "Build Your Community",
    description:
      "Your members follow you, not just the platform. Grow a loyal student base that joins your live sessions week after week and refers friends to your classes.",
    details: [
      "Public instructor profile with reviews",
      "Member follow & notification system",
      "Session replay clips for marketing",
      "Dedicated instructor success support",
    ],
  },
] as const;

export const LIVE_SESSION_FAQS = [
  {
    question: "Do I have to join a live session to work out on Gymieq?",
    answer:
      "Yes. Gymieq is an instructor-led, live-first platform. Every workout happens inside a live session hosted by a certified coach — either a group class or a private 1-on-1. There are no pre-recorded solo workouts.",
  },
  {
    question: "What's the difference between group and private live sessions?",
    answer:
      "Group live sessions are instructor-led classes where many members join the same live room and train together. Private live sessions are exclusive 1-on-1 video sessions between you and your instructor, with fully personalized coaching.",
  },
  {
    question: "Can I join a session after it has started?",
    answer:
      "You can join within the first 10 minutes of a group live session if spots remain. Private sessions require joining at the scheduled start time to respect your instructor's calendar.",
  },
  {
    question: "Do I need a camera for live sessions?",
    answer:
      "A camera is recommended so your instructor can provide form corrections. For group sessions, you can choose audio-only mode. Private sessions work best with video enabled for personalized coaching.",
  },
  {
    question: "How do instructors go live on Gymieq?",
    answer:
      "Instructors use the Gymieq Studio app to start their scheduled group or private sessions. When they go live, all reserved members receive a notification to join the room instantly.",
  },
  {
    question: "Are session replays available?",
    answer:
      "Group live sessions include a 48-hour replay so you can review cues you missed. Private sessions are not recorded by default to protect your privacy, unless you and your instructor agree otherwise.",
  },
] as const;
