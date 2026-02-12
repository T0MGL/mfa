"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/cn";

export function Navigation() {
  const params = useParams();
  const pathname = usePathname();
  const locale = params.locale as string;
  const t = useTranslations("nav");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const links = [
    { href: `/${locale}/about`, label: t("about") },
    { href: `/${locale}/opportunity`, label: t("opportunity") },
    { href: `/${locale}/why-paraguay`, label: t("whyParaguay") },
    { href: `/${locale}/contact`, label: t("contact") },
  ];

  const otherLocale = locale === "en" ? "es" : "en";
  const localePath = pathname.replace(`/${locale}`, `/${otherLocale}`);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-[#0a0a0f]/90 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      )}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link
          href={`/${locale}`}
          className="font-sans font-semibold text-sm tracking-[0.3em] uppercase transition-colors duration-300 group"
        >
          <span className="text-white group-hover:text-[#c9a96e] transition-colors duration-300">
            Mercosur First
          </span>
          <span className="text-[#c9a96e] ml-1.5">
            Agency
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-[11px] tracking-[0.2em] uppercase transition-colors duration-300",
                  isActive ? "text-[#c9a96e]" : "text-white/70 hover:text-white"
                )}
              >
                {link.label}
              </Link>
            );
          })}

          {/* Divider */}
          <span className="w-px h-4 bg-white/20" />

          {/* Language toggle */}
          <Link
            href={localePath}
            className="text-[11px] tracking-[0.2em] uppercase text-white/50 hover:text-white transition-colors duration-300"
          >
            {otherLocale.toUpperCase()}
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-[5px] py-2"
          aria-label="Toggle menu"
        >
          <span
            className={cn(
              "block w-5 h-px bg-white transition-all duration-300 origin-center",
              mobileOpen && "rotate-45 translate-y-[3px]"
            )}
          />
          <span
            className={cn(
              "block w-5 h-px bg-white transition-all duration-300",
              mobileOpen && "-rotate-45 -translate-y-[3px]"
            )}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-500 bg-[#0a0a0f]/95 backdrop-blur-md",
          mobileOpen ? "max-h-[400px] border-b border-white/5" : "max-h-0"
        )}
      >
        <div className="px-6 py-6 flex flex-col gap-4">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-[12px] tracking-[0.2em] uppercase transition-colors duration-300",
                  isActive ? "text-[#c9a96e]" : "text-white/70 hover:text-white"
                )}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href={localePath}
            className="text-[12px] tracking-[0.2em] uppercase text-white/50 hover:text-white transition-colors duration-300 pt-2 border-t border-white/10"
          >
            {otherLocale === "en" ? "English" : "Español"}
          </Link>
        </div>
      </div>
    </nav>
  );
}
