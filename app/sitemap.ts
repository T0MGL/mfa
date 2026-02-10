import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://mercosurfirst.com"; // Update with actual domain
  const locales = ["en", "es"];

  const routes = [
    "",
    "/about",
    "/why-paraguay",
    "/services",
    "/success-stories",
    "/contact",
  ];

  const sitemap: MetadataRoute.Sitemap = [];

  locales.forEach((locale) => {
    routes.forEach((route) => {
      sitemap.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === "" ? "weekly" : "monthly",
        priority: route === "" ? 1.0 : route === "/why-paraguay" ? 0.9 : 0.8,
      });
    });
  });

  return sitemap;
}
