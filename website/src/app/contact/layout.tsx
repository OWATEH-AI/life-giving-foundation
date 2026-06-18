import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Contact Us — Get in Touch with Life Giving Foundation",
  description:
    "Contact Life Giving Foundation, founded by Sophia Sakupwanya. Reach us at Mungate Business Center, Domboshava, Zimbabwe. Phone: +263 71 586 1986. Email: info@sophiasakupwanya.org. We'd love to hear from you about our programs, volunteering, or partnerships.",
  keywords: [
    "contact Life Giving Foundation",
    "Sophia Sakupwanya contact",
    "Domboshava Zimbabwe charity",
    "volunteer opportunities Zimbabwe",
    "partner with charity",
    "humanitarian foundation contact",
    "Mungate Business Center",
  ],
  alternates: {
    canonical: "https://www.sophiasakupwanya.org/contact",
  },
  openGraph: {
    title: "Contact Life Giving Foundation — Get in Touch",
    description:
      "Have questions about our programs or want to volunteer? Contact Life Giving Foundation at Domboshava, Zimbabwe. Phone: +263 71 586 1986.",
    url: "https://www.sophiasakupwanya.org/contact",
    images: [
      {
        url: "/images/logo/logo.jpeg",
        width: 800,
        height: 600,
        alt: "Contact Life Giving Foundation",
      },
    ],
  },
};

export default function ContactLayout({
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
            name: "Contact",
            url: "https://www.sophiasakupwanya.org/contact",
          },
        ]}
      />
      {children}
    </>
  );
}
