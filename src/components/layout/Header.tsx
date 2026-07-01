"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ShoppingBag } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";
import { NAV_LINKS } from "@/lib/constants/brand";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-black/40 backdrop-blur-sm sticky top-0 z-50 !rounded-none !border-x-0 !border-t-0">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo size="sm" />

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/70 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/marketplace"
            className="glass rounded-full p-2.5 text-white/70 transition-all hover:text-white"
            aria-label="Shop"
          >
            <ShoppingBag className="h-5 w-5" />
          </Link>
          <Button href="#download">Get the App</Button>
        </div>

        <button
          type="button"
          className="glass rounded-lg p-2 text-white md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav className="glass border-t border-white/10 px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="glass rounded-lg px-3 py-2 text-sm font-medium text-white/70 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
            <Button href="#download" className="mt-2 w-full">
              Get the App
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}
