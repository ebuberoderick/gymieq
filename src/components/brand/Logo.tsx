import Link from "next/link";
import { BRAND } from "@/lib/constants/brand";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showTagline?: boolean;
}

const sizes = {
  sm: { mark: 28, text: "text-lg" },
  md: { mark: 36, text: "text-xl" },
  lg: { mark: 48, text: "text-3xl" },
};

export function Logo({ size = "md", showTagline = false }: LogoProps) {
  const { mark, text } = sizes[size];

  return (
    <Link href="/" className="group flex items-center gap-3">
      <svg
        width={mark}
        height={mark}
        viewBox="0 0 48 48"
        fill="none"
        aria-hidden
        className="shrink-0"
      >
        <path
          d="M24 4C12.954 4 4 12.954 4 24s8.954 20 20 20c5.5 0 10.5-2.2 14.1-5.8"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M24 4c8 0 14 6 14 14v10l8 4"
          stroke="#EF4444"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <div className="flex flex-col">
        <span className={`${text} font-bold tracking-tight`}>
          <span className="text-white">Gymi</span>
          <span className="text-brand-red">eq</span>
        </span>
        {showTagline && (
          <span className="text-[10px] font-semibold tracking-[0.2em] text-brand-red uppercase">
            {BRAND.tagline}
          </span>
        )}
      </div>
    </Link>
  );
}
