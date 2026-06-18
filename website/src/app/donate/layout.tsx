import type { Metadata } from "next";
import { BreadcrumbJsonLd, DonateActionJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Donate — Give the Gift of Hope | Support Our Cause",
  description:
    "Donate to Life Giving Foundation founded by Sophia Sakupwanya. Your contribution provides meals, education, healthcare, and sustainable development for communities in Zimbabwe. Every dollar makes a difference.",
  keywords: [
    "donate Life Giving Foundation",
    "charity donation Zimbabwe",
    "support humanitarian cause",
    "Sophia Sakupwanya donate",
    "give to charity Africa",
    "education donation",
    "healthcare donation Zimbabwe",
    "feed a family charity",
    "sponsor child Zimbabwe",
  ],
  alternates: {
    canonical: "https://www.sophiasakupwanya.org/donate",
  },
  openGraph: {
    title: "Donate to Life Giving Foundation — Give the Gift of Hope",
    description:
      "Your generosity translates directly into meals, education, healthcare, and sustainable development for communities in urgent need in Zimbabwe.",
    url: "https://www.sophiasakupwanya.org/donate",
    images: [
      {
        url: "/images/logo/logo.jpeg",
        width: 800,
        height: 600,
        alt: "Donate to Life Giving Foundation",
      },
    ],
  },
};

export default function DonateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.sophiasakupwanya.org" },
          { name: "Donate", url: "https://www.sophiasakupwanya.org/donate" },
        ]}
      />
      <DonateActionJsonLd />
      {children}
    </>
  );
}
