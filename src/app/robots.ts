import type { MetadataRoute } from "next"

const SITE_URL = "https://williamlp.dev"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
