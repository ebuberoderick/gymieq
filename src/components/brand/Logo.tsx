import Image from "next/image";
import Link from "next/link";
import { BRAND } from "@/lib/constants/brand";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showTagline?: boolean;
}

/** Native wordmark is 488×144 (~3.39:1). */
const ASPECT = 488 / 144;

const sizes = {
  sm: 28,
  md: 36,
  lg: 48,
} as const;

export function Logo({ size = "md", showTagline = false }: LogoProps) {
  const height = sizes[size];
  const width = Math.round(height * ASPECT);

  return (
    <Link href="/" className="group flex flex-col items-start gap-1">
      <div className="flex items-center gap-2">
        <div className="">
          <Image
            src="/images/logo-light.png"
            alt={BRAND.name}
            width={width}
            height={height}
            priority
            className="object-contain object-left transition-opacity group-hover:opacity-90"
            style={{ height: height * 2, width: "auto" }}
          />
        </div>
        <div className="relative right-4">
          <Image
            src="/images/gymicq.png"
            alt={BRAND.name}
            width={width}
            height={height}
            priority
            className="object-contain object-left transition-opacity group-hover:opacity-90"
            style={{ height, width: "auto" }}
          />
          {showTagline && (
            <span className="text-[10px] font-semibold relative bottom-2 left-1 tracking-[0.2em] text-brand-red uppercase">
              {BRAND.tagline}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
