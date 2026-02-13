"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const params = useParams();
  const locale = params.locale as string;
  const t = useTranslations();

  const navLinks = [
    { href: `/${locale}/about`, label: t("nav.about") },
    { href: `/${locale}/opportunity`, label: t("nav.opportunity") },
    { href: `/${locale}/why-paraguay`, label: t("nav.whyParaguay") },
    { href: `/${locale}/contact`, label: t("nav.contact") },
  ];

  return (
    <footer className="bg-[#060609] border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Main footer */}
        <div className="py-16 grid md:grid-cols-3 gap-12">
          {/* Navigation */}
          <div>
            <span className="text-[10px] tracking-[0.2em] uppercase text-white/20 mb-4 block">
              Navigation
            </span>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[13px] text-white/40 hover:text-[#84cc16] transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <span className="text-[10px] tracking-[0.2em] uppercase text-white/20 mb-4 block">
              Contact
            </span>
            <div className="space-y-4">
              <div>
                <p className="text-[13px] text-white/40">Asunción, Paraguay</p>
                <p className="text-[11px] text-white/30 mb-1">Miami Tower</p>
                <a
                  href="mailto:contact@mercosurfirstagency.com"
                  className="text-[13px] text-white/40 hover:text-[#84cc16] transition-colors duration-300"
                >
                  contact@mercosurfirstagency.com
                </a>
              </div>
            </div>
          </div>

          {/* Brand */}
          <div className="md:text-right">
            <Link
              href={`/${locale}`}
              className="text-[13px] tracking-[0.25em] uppercase text-white/60 hover:text-white transition-colors duration-300 font-semibold"
            >
              Mercosur First
            </Link>
            <p className="mt-3 text-[12px] text-white/20 leading-relaxed max-w-[280px] md:ml-auto">
              Bridging European business with Mercosur opportunity.
            </p>
          </div>
        </div>

        {/* Copyright bar */}
        <div className="py-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-2">
          <span className="text-[11px] text-white/15">
            © {currentYear} {t("common.copyright")}. All rights reserved.
          </span>
          <span className="text-[11px] text-white/15">
            Asunción, Paraguay
          </span>
        </div>
      </div>
    </footer >
  );
}
