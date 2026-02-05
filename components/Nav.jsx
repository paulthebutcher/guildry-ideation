"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { href: "/", label: "Overview" },
  { href: "/data-model", label: "Data Model" },
  { href: "/products", label: "Products" },
  { href: "/architecture", label: "Architecture" },
  { href: "/roadmap", label: "Roadmap" },
  { href: "/challenges", label: "Challenges" },
];

export default function Nav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 no-underline">
          <div className="w-7 h-7 rounded-md flex items-center justify-center text-xs font-bold"
            style={{ background: "linear-gradient(135deg, #0d9488, #4f46e5)" }}>
            <span className="text-white">P</span>
          </div>
          <span className="font-mono text-sm font-semibold text-slate-800 tracking-wide">
            Guildry
          </span>
          <span className="font-mono text-[10px] text-slate-400 hidden sm:inline">v0.1</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  px-3 py-1.5 rounded-md text-sm no-underline transition-all duration-150 font-mono text-xs
                  ${isActive
                    ? "text-teal-700 bg-teal-50"
                    : "text-slate-500 hover:text-slate-800 hover:bg-slate-100"
                  }
                `}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-slate-500 hover:text-slate-800 bg-transparent border-none cursor-pointer p-2"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
            {mobileOpen ? (
              <path d="M5 5l10 10M15 5l-10 10" />
            ) : (
              <path d="M3 6h14M3 10h14M3 14h14" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-slate-200 px-6 py-3 flex flex-col gap-1 bg-white/95 backdrop-blur-md">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`
                  px-3 py-2 rounded-md text-sm no-underline font-mono
                  ${isActive ? "text-teal-700 bg-teal-50" : "text-slate-500"}
                `}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
