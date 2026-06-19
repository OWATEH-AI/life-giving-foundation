"use client";

import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useState } from "react";

const programs = [
  {
    title: "Education and Scholarships",
    description:
      "Providing access to quality education, school supplies, tutoring, and scholarships to empower the next generation of leaders.",
    image: "/images/gallery/child-studying.jpg",
    imagePosition: "center",
    color: "var(--color-purple)",
  },
  {
    title: "Healthcare and Nutrition",
    description:
      "Delivering essential medical care, health education, and nutritional support to underserved communities and vulnerable families.",
    image: "/images/gallery/community-gathering.jpg",
    imagePosition: "center",
    color: "var(--color-teal)",
  },
  {
    title: "Community Development",
    description:
      "Building infrastructure, clean water systems, and sustainable livelihoods that strengthen entire communities from the ground up.",
    image: "/images/gallery/eye-contact.jpg",
    imagePosition: "center",
    color: "var(--color-primary)",
  },
  {
    title: "Youth Empowerment",
    description:
      "Mentoring, life skills training, and leadership development programs that equip young people to reach their full potential.",
    image: "/images/gallery/school-children.jpg",
    imagePosition: "center 35%",
    color: "var(--color-purple)",
  },
  {
    title: "Emergency Relief",
    description:
      "Rapid response humanitarian aid including food, shelter, and critical supplies during times of crisis and natural disaster.",
    image: "/images/gallery/download-11.png",
    imagePosition: "center",
    color: "var(--color-gold-dark)",
  },
  {
    title: "Faith and Spiritual Growth",
    description:
      "Nurturing the whole person through spiritual enrichment, counseling, community worship, and holistic faith-based programs.",
    image: "/images/gallery/community-support.jpg",
    imagePosition: "center",
    color: "var(--color-gold)",
  },
];

export function ProgramsOverview() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="programs-overview"
      style={{
        padding: "var(--section-padding) 0",
        background: "linear-gradient(180deg, var(--color-light-warm) 0%, var(--color-light) 100%)",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 clamp(1rem, 4vw, 2rem)",
        }}
      >
        <ScrollReveal>
          <SectionHeader
            label="What We Do"
            title="Our Programs"
            subtitle="Through six core pillars, we address the most pressing needs of communities and families, creating sustainable change that lasts for generations."
          />
        </ScrollReveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
            gap: "1.75rem",
          }}
        >
          {programs.map((program, i) => {
            const isHovered = hoveredIndex === i;

            return (
              <ScrollReveal key={program.title} delay={i * 0.1}>
                <div
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  style={{
                    borderRadius: "var(--radius-lg)",
                    overflow: "hidden",
                    background: "var(--color-card-bg, white)",
                    border: "1px solid rgba(0, 0, 0, 0.06)",
                    boxShadow: isHovered ? "var(--shadow-lg)" : "var(--shadow-sm)",
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    transform: isHovered ? "translateY(-6px)" : "translateY(0)",
                    cursor: "pointer",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {/* Image */}
                  <div
                    style={{
                      position: "relative",
                      height: "200px",
                      overflow: "hidden",
                    }}
                  >
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      style={{
                        objectFit: "cover",
                        objectPosition: program.imagePosition,
                        transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                        transform: isHovered ? "scale(1.08)" : "scale(1)",
                      }}
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                    {/* Gradient overlay */}
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background: `linear-gradient(180deg, transparent 30%, ${program.color}88 100%)`,
                        opacity: isHovered ? 0.8 : 0,
                        transition: "opacity 0.4s ease",
                      }}
                    />
                  </div>

                  {/* Content */}
                  <div
                    style={{
                      padding: "2rem 1.5rem 1.5rem",
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontSize: "1.25rem",
                        fontWeight: 700,
                        color: "var(--color-text)",
                        marginBottom: "0.75rem",
                      }}
                    >
                      {program.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "0.9rem",
                        lineHeight: 1.7,
                        color: "var(--color-text-muted)",
                        flex: 1,
                      }}
                    >
                      {program.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
