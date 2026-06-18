"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import Image from "next/image";

const trustPoints = [
  {
    title: "A New Foundation",
    description:
      "Life Giving Foundation is at the beginning of its journey, and we choose to speak honestly about where we are and what we are building.",
  },
  {
    title: "A Clear Vision",
    description:
      "Our vision is to serve children, families, and communities through education, care, empowerment, and practical support rooted in compassion.",
  },
  {
    title: "Transparent Leadership",
    description:
      "Sophia Sakupwanya and Team are committed to building trust with supporters through openness, accountability, and genuine community work.",
  },
  {
    title: "Room to Grow",
    description:
      "Early donors and funders have the opportunity to help shape real impact from the start and become part of a sincere long-term mission.",
  },
];

export function ImpactStats() {
  return (
    <section
      id="impact"
      style={{
        position: "relative",
        padding: "var(--section-padding) 0",
        overflow: "hidden",
      }}
    >
      {/* Background Image with Parallax Effect */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
        }}
      >
        <Image
          src="/images/gallery/school-children.jpg"
          alt="Impact background"
          fill
          style={{
            objectFit: "cover",
            objectPosition: "center 30%",
          }}
          sizes="100vw"
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg, rgba(10, 15, 28, 0.92) 0%, rgba(26, 37, 102, 0.88) 50%, rgba(10, 15, 28, 0.95) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 clamp(1rem, 4vw, 2rem)",
          textAlign: "center",
        }}
      >
        <ScrollReveal>
          <span
            style={{
              fontFamily: "var(--font-accent)",
              fontSize: "0.8rem",
              fontWeight: 600,
              color: "var(--color-gold)",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              display: "block",
              marginBottom: "0.75rem",
            }}
          >
            Our Vision
          </span>
          <div
            style={{
              width: "50px",
              height: "3px",
              background: "linear-gradient(90deg, var(--color-purple-light), var(--color-gold))",
              borderRadius: "9999px",
              margin: "0 auto 1.25rem",
            }}
          />
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 700,
              color: "white",
              lineHeight: 1.2,
              marginBottom: "1rem",
            }}
          >
            Building Trust Through{" "}
            <span style={{ color: "var(--color-gold)" }}>Honest Beginnings</span>
          </h2>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.7,
              color: "rgba(255, 255, 255, 0.65)",
              maxWidth: "600px",
              margin: "0 auto 3rem",
            }}
          >
            We are a new foundation, so instead of using inflated numbers, we
            want people to see the truth: this is a growing vision led with
            sincerity, purpose, and a real desire to serve.
          </p>
        </ScrollReveal>

        {/* Vision Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1rem",
          }}
        >
          {trustPoints.map((point, i) => (
            <ScrollReveal key={point.title} delay={i * 0.15}>
              <div
                style={{
                  padding: "2rem 1.5rem",
                  borderRadius: "var(--radius-lg)",
                  background: "rgba(255, 255, 255, 0.05)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  transition: "all 0.3s ease",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "1.5rem",
                    fontWeight: 700,
                    color: "var(--color-gold)",
                    marginBottom: "0.75rem",
                  }}
                >
                  {point.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.98rem",
                    lineHeight: 1.7,
                    color: "rgba(255, 255, 255, 0.78)",
                    margin: 0,
                  }}
                >
                  {point.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
