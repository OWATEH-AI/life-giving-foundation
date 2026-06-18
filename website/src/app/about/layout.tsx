import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "About Us — Our Story, Mission & Values",
  description:
    "Learn about Life Giving Foundation, founded by Sophia Sakupwanya — a faith-inspired humanitarian organization dedicated to empowering communities through education, healthcare, and community development in Zimbabwe. Discover our history, vision, and core values.",
  keywords: [
    "about Life Giving Foundation",
    "Sophia Sakupwanya founder",
    "humanitarian organization Zimbabwe",
    "foundation history",
    "mission vision values",
    "faith-based charity Zimbabwe",
    "community empowerment",
  ],
  alternates: {
    canonical: "https://www.sophiasakupwanya.org/about",
  },
  openGraph: {
    title: "About Life Giving Foundation — Founded by Sophia Sakupwanya",
    description:
      "Discover the story behind Life Giving Foundation, founded by Sophia Sakupwanya. A journey of faith, compassion, and dedication to bringing light to communities in Zimbabwe.",
    url: "https://www.sophiasakupwanya.org/about",
    images: [
      {
        url: "/images/logo/logo.jpeg",
        width: 800,
        height: 600,
        alt: "Life Giving Foundation — About Us",
      },
    ],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.sophiasakupwanya.org" },
          { name: "About", url: "https://www.sophiasakupwanya.org/about" },
        ]}
      />
      {children}
    </>
  );
}
