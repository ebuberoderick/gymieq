export const PLATFORM_PROMISE = {
  headline: "Every workout is live. Every athlete trains with an instructor.",
  description:
    "Gymieq is built around real-time connection. Unlike apps with pre-recorded libraries you follow alone, every session on our platform is led live by a certified instructor — whether you're joining a group class with dozens of athletes or a private 1-on-1 call.",
} as const;

export const MEMBER_JOURNEY = [
  {
    step: "01",
    title: "Create your account",
    description:
      "Sign up, set your fitness goals, and unlock access to our full network of live instructor sessions.",
  },
  {
    step: "02",
    title: "Choose your instructor",
    description:
      "Browse certified coaches by specialty, rating, and schedule. Follow instructors whose style and discipline match your goals.",
  },
  {
    step: "03",
    title: "Join a live session",
    description:
      "Every workout requires joining an instructor's live session — either a group class with other members or a booked private slot. No solo workouts, no guessing.",
  },
  {
    step: "04",
    title: "Train in real time",
    description:
      "Stream the session on any device. Your instructor coaches you live — correcting form, pushing pace, and adapting on the fly.",
  },
  {
    step: "05",
    title: "Track & return",
    description:
      "Log progress after each live session, rebook with your favorite instructor, and build a consistent training rhythm.",
  },
] as const;

export const INSTRUCTOR_JOURNEY = [
  {
    step: "01",
    title: "Get certified & onboarded",
    description:
      "Complete our vetting process with NASM, ACE, or equivalent credentials. We train you on our live streaming tools and coaching standards.",
  },
  {
    step: "02",
    title: "Set your live schedule",
    description:
      "Publish group class times and open private session slots. You control when you go live and how many members you take on.",
  },
  {
    step: "03",
    title: "Go live for group sessions",
    description:
      "Host live group classes where members join your virtual room. Coach the entire class in real time with chat, leaderboards, and energy.",
  },
  {
    step: "04",
    title: "Host private live sessions",
    description:
      "Run 1-on-1 live video sessions with individual members. Deliver personalized programming, form checks, and accountability.",
  },
  {
    step: "05",
    title: "Grow your community",
    description:
      "Build a loyal following of members who return to your live sessions week after week. Earn from both group attendance and private bookings.",
  },
] as const;

export const LIVE_SESSION_RULES = [
  {
    title: "Instructor-led only",
    description:
      "All training on Gymieq happens inside a live instructor session. Members cannot access standalone workout videos — they join an instructor who is live on camera.",
  },
  {
    title: "Group or private — always live",
    description:
      "Instructors offer both formats. Group sessions let many users join one live room; private sessions are live 1-on-1 video calls. Both are real-time, never pre-recorded.",
  },
  {
    title: "Members must join to train",
    description:
      "To work out on Gymieq, every member selects an instructor and joins their scheduled live session. This ensures expert coaching, safety, and accountability on every rep.",
  },
  {
    title: "Real-time interaction",
    description:
      "Instructors see and respond to members live — shouting encouragement, correcting form, and adjusting intensity based on how the room is performing.",
  },
] as const;

export const CONTACT_FAQ = [
  {
    question: "Do I have to join a live session to work out?",
    answer:
      "Yes. Every workout on Gymieq is instructor-led and live. You choose an instructor, then join their group class or book a private live session. This is how we guarantee real coaching on every workout.",
  },
  {
    question: "What's the difference between group and private live sessions?",
    answer:
      "Group sessions are live classes where you train alongside other members in the same virtual room with one instructor leading everyone. Private sessions are live 1-on-1 video calls with your instructor for fully personalized coaching.",
  },
  {
    question: "Can I work out without an instructor?",
    answer:
      "No. Gymieq is built on live instructor connection. All members join an instructor's session — that's what makes training smarter, safer, and more effective.",
  },
  {
    question: "How do I become an online instructor?",
    answer:
      "Apply through our Careers page or contact form. You'll need a recognized certification (NASM, ACE, RYT, etc.), a reliable internet setup, and passion for coaching live. We onboard you on our streaming platform and help you launch group and private sessions.",
  },
  {
    question: "How much can instructors earn?",
    answer:
      "Instructors earn per group session attendee and per private booking. Top coaches on Gymieq run 10+ live group classes weekly plus private slots — income scales with your schedule and community.",
  },
  {
    question: "What equipment do I need to join a live session?",
    answer:
      "A phone, tablet, or laptop with a camera, stable internet, and enough space to move. Your instructor will list any specific gear (dumbbells, mat, etc.) in the session description before you join.",
  },
] as const;
