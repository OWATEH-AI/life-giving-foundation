import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website Credits — Built by ARTGALZIM-OWA Technologies",
  description:
    "Website credits for sophiasakupwanya.org — the official website of Life Giving Foundation. Built by Samuel T Samoyo at ARTGALZIM-OWA Technologies.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.sophiasakupwanya.org/credits",
  },
};

export default function CreditsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
