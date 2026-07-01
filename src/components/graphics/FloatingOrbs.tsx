"use client";

import { Parallax } from "@/components/motion/Parallax";

const orbs = [
  { size: 300, top: "10%", left: "5%", color: "bg-brand-red/10", speed: 0.08, delay: "0s" },
  { size: 200, top: "60%", left: "80%", color: "bg-white/5", speed: 0.12, delay: "1s" },
  { size: 150, top: "30%", left: "70%", color: "bg-brand-red/8", speed: 0.06, delay: "2s" },
  { size: 120, top: "75%", left: "15%", color: "bg-white/4", speed: 0.1, delay: "0.5s" },
  { size: 80, top: "45%", left: "40%", color: "bg-brand-red/6", speed: 0.14, delay: "1.5s" },
];

export function FloatingOrbs() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      {orbs.map((orb, i) => (
        <Parallax key={i} speed={orb.speed}>
          <div
            className={`absolute animate-float-slow rounded-full blur-3xl ${orb.color}`}
            style={{
              width: orb.size,
              height: orb.size,
              top: orb.top,
              left: orb.left,
              animationDelay: orb.delay,
            }}
          />
        </Parallax>
      ))}
    </div>
  );
}
