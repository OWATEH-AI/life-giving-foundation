import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Gallery — Moments of Impact | Our Work in Pictures",
  description:
    "View photos and moments of impact from Life Giving Foundation's work in Zimbabwe. See how Sophia Sakupwanya's vision is transforming communities through education, healthcare, and development.",
  keywords: [
    "Life Giving Foundation gallery",
    "humanitarian work photos",
    "Zimbabwe charity images",
    "community impact photos",
    "Sophia Sakupwanya foundation gallery",
    "education charity Zimbabwe photos",
  ],
  alternates: {
    canonical: "https://www.sophiasakupwanya.org/gallery",
  },
  openGraph: {
    title: "Gallery — Life Giving Foundation | Moments of Impact",
    description:
      "A visual journey through the lives we've touched and the communities we serve in Zimbabwe.",
    url: "https://www.sophiasakupwanya.org/gallery",
    images: [
      {
        url: "/images/logo/logo.jpeg",
        width: 800,
        height: 600,
        alt: "Life Giving Foundation Gallery",
      },
    ],
  },
};

export default function GalleryLayout({
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
            name: "Gallery",
            url: "https://www.sophiasakupwanya.org/gallery",
          },
        ]}
      />
      {children}
    </>
  );
}
