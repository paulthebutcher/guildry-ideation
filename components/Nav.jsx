"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { href: "/", label: "Overview" },
  { href: "/story", label: "Story" },
  { href: "/products", label: "Products" },
  {
    label: "System",
    children: [
      { href: "/system/ai", label: "Conversational AI", desc: "How the AI layer works" },
      { href: "/system/security", label: "Security", desc: "Data privacy & compliance" },
      { href: "/architecture", label: "Architecture", desc: "Repo structure & principles" },
      { href: "/data-model", label: "Data Model", desc: "17 entities, 7 layers" },
    ],
  },
  { href: "/roadmap", label: "Roadmap" },
  { href: "/challenges", label: "Challenges" },
];

function Dropdown({ item, pathname }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const isChildActive = item.children?.some((child) => pathname === child.href);

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className={`
          flex items-center gap-1 px-3 py-1.5 rounded-md text-sm transition-all duration-150 font-mono text-xs
          bg-transparent border-none cursor-pointer
          ${isChildActive
            ? "text-teal-700 bg-teal-50"
            : "text-slate-500 hover:text-slate-800 hover:bg-slate-100"
          }
        `}
      >
        {item.label}
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        >
          <path d="M3 5l3 3 3-3" />
        </svg>
      </button>

      {open && (
        <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg border border-slate-200 shadow-lg py-2 z-50">
          {item.children.map((child) => {
            const isActive = pathname === child.href;
            return (
              <Link
                key={child.href}
                href={child.href}
                onClick={() => setOpen(false)}
                className={`
                  block px-4 py-2 no-underline transition-colors
                  ${isActive ? "bg-teal-50" : "hover:bg-slate-50"}
                `}
              >
                <span className={`block font-mono text-xs font-medium ${isActive ? "text-teal-700" : "text-slate-700"}`}>
                  {child.label}
                </span>
                {child.desc && (
                  <span className="block text-[11px] text-slate-400 mt-0.5">{child.desc}</span>
                )}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default function Nav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 no-underline">
          <div className="w-7 h-7 rounded-md flex items-center justify-center text-xs font-bold"
            style={{ background: "linear-gradient(135deg, #0d9488, #4f46e5)" }}>
            <span className="text-white">G</span>
          </div>
          <span className="font-mono text-sm font-semibold text-slate-800 tracking-wide">
            Guildry
          </span>
          <span className="font-mono text-[10px] text-slate-400 hidden sm:inline">v0.1</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => {
            if (item.children) {
              return <Dropdown key={item.label} item={item} pathname={pathname} />;
            }

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
            if (item.children) {
              return (
                <div key={item.label} className="py-2">
                  <span className="block px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-slate-400">
                    {item.label}
                  </span>
                  {item.children.map((child) => {
                    const isActive = pathname === child.href;
                    return (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className={`
                          block px-3 py-2 rounded-md text-sm no-underline font-mono
                          ${isActive ? "text-teal-700 bg-teal-50" : "text-slate-500"}
                        `}
                      >
                        {child.label}
                      </Link>
                    );
                  })}
                </div>
              );
            }

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
