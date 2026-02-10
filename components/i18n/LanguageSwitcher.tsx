"use client";

import { useParams, usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/cn";

export function LanguageSwitcher() {
  const params = useParams();
  const pathname = usePathname();
  const currentLocale = (params?.locale as string) || "en";

  // Get the path without the locale prefix
  const pathWithoutLocale = pathname.replace(`/${currentLocale}`, "") || "/";

  const languages = [
    { code: "en", label: "EN" },
    { code: "es", label: "ES" },
  ];

  return (
    <div className="flex items-center gap-2">
      {languages.map((lang) => (
        <Link
          key={lang.code}
          href={`/${lang.code}${pathWithoutLocale}`}
          className={cn(
            "px-3 py-1.5 text-sm font-medium transition-all rounded-md",
            currentLocale === lang.code
              ? "bg-mercosur-blue text-white"
              : "text-text-secondary hover:text-mercosur-green hover:bg-mercosur-green/10"
          )}
        >
          {lang.label}
        </Link>
      ))}
    </div>
  );
}
