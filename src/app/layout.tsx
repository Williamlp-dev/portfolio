import type { Metadata } from "next"
import { Outfit, Roboto_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/ui/theme-provider"

const fontSans = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

const SITE_URL = "https://williamlp.dev"

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "William Lopes — Engenheiro Full-Stack",
    template: "%s | William Lopes",
  },
  description:
    "Portfolio de William Lopes, Engenheiro de Software Full-Stack. TypeScript, React, Next.js e sistemas backend escaláveis.",
  keywords: [
    "William Lopes",
    "Engenheiro Full-Stack",
    "Desenvolvedor",
    "Portfolio",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
  ],
  authors: [{ name: "William Lopes", url: SITE_URL }],
  creator: "William Lopes",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: "William Lopes",
    title: "William Lopes — Engenheiro Full-Stack",
    description:
      "2,5+ anos desenvolvendo aplicações web e mobile de alta performance. TypeScript, React, Next.js e sistemas backend escaláveis.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "William Lopes — Engenheiro Full-Stack",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "William Lopes — Engenheiro Full-Stack",
    description:
      "2,5+ anos desenvolvendo aplicações web e mobile de alta performance.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicons/favicon.ico", sizes: "any" },
      { url: "/favicons/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicons/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [
      {
        url: "/favicons/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  manifest: "/favicons/site.webmanifest",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <meta content="#1f1f23" name="theme-color" />
      </head>
      <body className={`${fontSans.variable} ${fontMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          disableTransitionOnChange
          enableSystem
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
