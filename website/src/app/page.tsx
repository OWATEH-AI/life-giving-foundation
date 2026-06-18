import { HeroSlideshow } from "@/components/hero/HeroSlideshow";
import { MissionStatement } from "@/components/sections/MissionStatement";
import { ProgramsOverview } from "@/components/sections/ProgramsOverview";
import { ImpactStats } from "@/components/sections/ImpactStats";
import { TestimonialsCarousel } from "@/components/sections/TestimonialsCarousel";
import { CTABanner } from "@/components/sections/CTABanner";
import { LatestNews } from "@/components/sections/LatestNews";

export default function Home() {
  return (
    <>
      <HeroSlideshow />
      <MissionStatement />
      <ProgramsOverview />
      <ImpactStats />
      <TestimonialsCarousel />
      <CTABanner />
      <LatestNews />
    </>
  );
}
