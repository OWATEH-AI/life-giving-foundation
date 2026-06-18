import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Our Programs — Education, Healthcare & Community Development",
  description:
    "Explore Life Giving Foundation's comprehensive programs: education & youth development, healthcare & medical outreach, community infrastructure, food security, and spiritual care. Founded by Sophia Sakupwanya in Zimbabwe.",
  keywords: [
    "Life Giving Foundation programs",
    "education charity Zimbabwe",
    "healthcare outreach Zimbabwe",
    "community development programs",
    "Sophia Sakupwanya programs",
    "youth development Zimbabwe",
    "rural healthcare Africa",
    "sustainable development Zimbabwe",
  ],
  alternates: {
    canonical: "https://www.sophiasakupwanya.org/programs",
  },
  openGraph: {
    title:
      "Programs — Life Giving Foundation | Education, Healthcare & Development",
    description:
      "Comprehensive initiatives designed to empower individuals, strengthen families, and build resilient communities in Zimbabwe. Founded by Sophia Sakupwanya.",
    url: "https://www.sophiasakupwanya.org/programs",
    images: [
      {
        url: "/images/logo/logo.jpeg",
        width: 800,
        height: 600,
        alt: "Life Giving Foundation Programs",
      },
    ],
  },
};

export default function ProgramsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.sophiasakupwanya.org" },
          {
            name: "Programs",
            url: "https://www.sophiasakupwanya.org/programs",
          },
        ]}
      />
      {children}
    </>
  );
}
