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
    <footer className="bg-[#0B0B0C] border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Main footer content */}
        <div className="py-20 grid md:grid-cols-12 gap-12 md:gap-16">
          {/* Brand Section */}
          <div className="md:col-span-4">
            <Link
              href={`/${locale}`}
              className="inline-block group"
            >
              <h3 className="text-xl md:text-2xl font-bold tracking-tight">
                <span className="text-white/90 group-hover:text-white transition-colors duration-300">
                  Mercosur First
                </span>
                <span className="block text-gold-accent group-hover:text-gold-hover transition-colors duration-300 mt-1">
                  Agency
                </span>
              </h3>
            </Link>
            <p className="mt-6 text-[15px] leading-relaxed text-white/40 max-w-[320px]">
              Strategic partner for European businesses entering the Mercosur market. We deliver market intelligence, regulatory guidance, and operational support.
            </p>

            {/* Social Links */}
            <div className="mt-8 flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/30 hover:text-gold-accent hover:border-gold-accent/30 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="mailto:contact@mercosurfirstagency.com"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/30 hover:text-gold-accent hover:border-gold-accent/30 transition-colors duration-300"
                aria-label="Email"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <h4 className="text-[11px] tracking-[0.2em] uppercase text-white/40 font-semibold mb-6">
              Navigation
            </h4>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[15px] text-white/50 hover:text-gold-accent transition-colors duration-300 w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div className="md:col-span-2">
            <h4 className="text-[11px] tracking-[0.2em] uppercase text-white/40 font-semibold mb-6">
              Services
            </h4>
            <ul className="flex flex-col gap-3">
              <li className="text-[15px] text-white/50">Market Entry</li>
              <li className="text-[15px] text-white/50">Legal Support</li>
              <li className="text-[15px] text-white/50">Tax Advisory</li>
              <li className="text-[15px] text-white/50">Recruitment</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-3">
            <h4 className="text-[11px] tracking-[0.2em] uppercase text-white/40 font-semibold mb-6">
              Contact
            </h4>
            <div className="space-y-4">
              <div>
                <p className="text-[13px] text-white/30 mb-1">Headquarters</p>
                <p className="text-[15px] text-white/60">Miami Tower</p>
                <p className="text-[15px] text-white/60">Asunción, Paraguay</p>
              </div>
              <div>
                <p className="text-[13px] text-white/30 mb-1">Email</p>
                <a
                  href="mailto:contact@mercosurfirstagency.com"
                  className="text-[15px] text-white/60 hover:text-gold-accent transition-colors duration-300 break-all"
                >
                  contact@mercosurfirstagency.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-4 text-[13px] text-white/25">
              <span>© {currentYear} Mercosur First Agency. All rights reserved.</span>
              <span className="hidden sm:inline text-white/10">·</span>
              <a
                href="https://thebrightidea.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-block text-white/25 hover:text-white/25 transition-none"
              >
                <span className="relative">
                  {t("common.developedBy")}{" "}
                  <span className="font-medium relative inline-block">
                    <span className="relative z-10 bg-gradient-to-r from-white/25 via-gold-accent to-white/25 bg-clip-text text-transparent bg-[length:200%_100%] group-hover:animate-[shimmer_1.5s_ease-in-out_infinite]">
                      Bright Idea
                    </span>
                  </span>
                </span>
              </a>
            </div>
            <div className="flex items-center gap-6 text-[13px]">
              <Link href={`/${locale}/privacy`} className="text-white/25 hover:text-white/50 transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href={`/${locale}/terms`} className="text-white/25 hover:text-white/50 transition-colors duration-300">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer >
  );
}
