import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Mercosur First — Sovereign Advisory & Capital Deployment",
  description:
    "The execution interface between European industrial capital and Mercosur operations. Corporate structuring, jurisdictional deployment, and regulatory navigation in Paraguay.",
  keywords: [
    "Paraguay investment",
    "Mercosur capital deployment",
    "European capital Paraguay",
    "Maquila regime Paraguay",
    "corporate structuring Paraguay",
    "sovereign advisory",
    "EU Mercosur partnership",
    "Paraguay tax regime",
    "family office advisory",
    "industrial capital deployment",
  ],
  authors: [{ name: "Mercosur First Agency" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mercosurfirst.com",
    title: "Mercosur First — Sovereign Advisory & Capital Deployment",
    description:
      "The execution interface between European industrial capital and Mercosur operations.",
    siteName: "Mercosur First",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mercosur First",
    description:
      "Sovereign advisory and capital deployment. European industrial capital into Paraguay and Mercosur.",
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        <NextIntlClientProvider messages={messages}>
          <SmoothScrollProvider>
            <Navigation />
            <main>{children}</main>
            <Footer />
          </SmoothScrollProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
