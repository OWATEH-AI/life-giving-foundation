import type { Metadata } from "next";
import { playfair, inter, outfit } from "@/lib/fonts";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { OrganizationJsonLd, WebSiteJsonLd } from "@/components/seo/JsonLd";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sophiasakupwanya.org"),
  title: {
    default:
      "Life Giving Foundation — Founded by Sophia Sakupwanya | Let There Be Light",
    template: "%s | Life Giving Foundation — Sophia Sakupwanya",
  },
  description:
    "Life Giving Foundation is a faith-inspired humanitarian organization founded by Sophia Sakupwanya, dedicated to empowering communities, transforming lives, and bringing light to those in need through education, healthcare, and community development in Zimbabwe and beyond.",
  keywords: [
    "Sophia Sakupwanya",
    "Life Giving Foundation",
    "life giving foundation",
    "Life Giving Foundation Zimbabwe",
    "humanitarian foundation",
    "charity Zimbabwe",
    "community development",
    "education charity",
    "healthcare foundation",
    "faith-based organization",
    "donate charity Zimbabwe",
    "volunteer Zimbabwe",
    "nonprofit Zimbabwe",
    "Sophia Sakupwanya foundation",
    "sophiasakupwanya.org",
    "Domboshava charity",
    "Zimbabwe humanitarian aid",
    "child welfare Zimbabwe",
    "rural development Africa",
    "let there be light foundation",
  ],
  authors: [
    { name: "Life Giving Foundation", url: "https://www.sophiasakupwanya.org" },
    { name: "Sophia Sakupwanya" },
  ],
  creator: "Sophia Sakupwanya",
  publisher: "Life Giving Foundation",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "https://www.sophiasakupwanya.org",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.sophiasakupwanya.org",
    siteName: "Life Giving Foundation",
    title:
      "Life Giving Foundation — Founded by Sophia Sakupwanya | Let There Be Light",
    description:
      "Life Giving Foundation is a faith-inspired humanitarian organization founded by Sophia Sakupwanya. Empowering communities, transforming lives, and bringing light to those in need through education, healthcare, and community development in Zimbabwe.",
    images: [
      {
        url: "/images/logo/logo.jpeg",
        width: 800,
        height: 600,
        alt: "Life Giving Foundation Logo — Founded by Sophia Sakupwanya",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Life Giving Foundation — Founded by Sophia Sakupwanya | Let There Be Light",
    description:
      "Life Giving Foundation is a faith-inspired humanitarian organization founded by Sophia Sakupwanya. Empowering communities through education, healthcare, and development in Zimbabwe.",
    images: ["/images/logo/logo.jpeg"],
    creator: "@LifeGivingFdn",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your Google Search Console verification code here after registering
    // google: "YOUR_GOOGLE_VERIFICATION_CODE",
  },
  category: "nonprofit",
  other: {
    "msapplication-TileColor": "#6B2D8B",
    "theme-color": "#6B2D8B",
    "google-site-verification": "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} ${outfit.variable} antialiased`}
    >
      <head>
        <link rel="author" href="/humans.txt" />
        <link rel="manifest" href="/manifest.json" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `
          }}
        />
      </head>
      <body
        style={{
          fontFamily: "var(--font-body)",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <OrganizationJsonLd />
        <WebSiteJsonLd />
        <Navbar />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
