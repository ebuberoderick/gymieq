import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { GlassCard } from "@/components/ui/GlassCard";
import { BRAND } from "@/lib/constants/brand";

const footerLinks = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/#features" },
      { label: "Instructors", href: "/#instructors" },
      { label: "Live Sessions", href: "/#live-sessions" },
      { label: "Download App", href: "/#download" },
    ],
  },
  {
    title: "Shop",
    links: [
      { label: "All Products", href: "/marketplace" },
      { label: "Apparel", href: "/marketplace?category=Apparel" },
      { label: "Equipment", href: "/marketplace?category=Equipment" },
      { label: "Bundles", href: "/marketplace?category=Bundles" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/5">
      <div className="absolute inset-0 bg-gradient-to-t from-brand-red/5 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <GlassCard variant="strong" className="p-8 lg:p-12">
          <div className="grid gap-12 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <Logo size="md" showTagline />
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/50">
                {BRAND.subtitle} Stream live classes, track progress, and gear up
                with premium training essentials.
              </p>
            </div>

            {footerLinks.map((group) => (
              <div key={group.title}>
                <h3 className="text-sm font-semibold text-white">{group.title}</h3>
                <ul className="mt-4 space-y-3">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-white/50 transition-colors hover:text-brand-red"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row">
            <p className="text-sm text-white/40">
              &copy; {new Date().getFullYear()} {BRAND.name}. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-white/40">
              <Link href="#" className="hover:text-white">
                Privacy
              </Link>
              <Link href="#" className="hover:text-white">
                Terms
              </Link>
            </div>
          </div>
        </GlassCard>
      </div>
    </footer>
  );
}
