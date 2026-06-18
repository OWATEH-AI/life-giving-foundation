"use client";

import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Heart, Users } from "lucide-react";

export function CTABanner() {
  return (
    <section
      id="cta-banner"
      style={{
        position: "relative",
        padding: "var(--section-padding) 0",
        background: "linear-gradient(135deg, var(--color-dark) 0%, var(--color-primary-dark) 50%, var(--color-purple-dark) 100%)",
        overflow: "hidden",
      }}
    >
      {/* Decorative circles */}
      <div
        style={{
          position: "absolute",
          top: "-150px",
          left: "-100px",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(201, 168, 76, 0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-100px",
          right: "-50px",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(107, 45, 139, 0.1) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Subtle animated light dots */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            width: `${3 + i}px`,
            height: `${3 + i}px`,
            borderRadius: "50%",
            background: "rgba(201, 168, 76, 0.3)",
            top: `${15 + i * 14}%`,
            left: `${10 + i * 15}%`,
            animation: `float ${3 + i * 0.5}s ease-in-out infinite`,
            animationDelay: `${i * 0.3}s`,
          }}
        />
      ))}

      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "800px",
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
              marginBottom: "1rem",
            }}
          >
            Make a Difference Today
          </span>
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2rem, 5vw, 3.2rem)",
              fontWeight: 800,
              color: "white",
              lineHeight: 1.15,
              marginBottom: "1.25rem",
            }}
          >
            Together, We Can{" "}
            <span
              style={{
                background: "linear-gradient(90deg, var(--color-gold), var(--color-gold-light))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Change Lives
            </span>
          </h2>
          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: 1.7,
              color: "rgba(255, 255, 255, 0.7)",
              marginBottom: "2.5rem",
              maxWidth: "600px",
              margin: "0 auto 2.5rem",
            }}
          >
            Your generosity can provide education, healthcare, and hope to
            families who need it most. Every contribution — no matter the
            size — creates ripples of change.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Link href="/donate" className="btn-primary" style={{ fontSize: "1rem", padding: "1rem 2.5rem" }}>
              <Heart size={20} />
              Donate Now
            </Link>
            <Link href="/contact" className="btn-secondary" style={{ fontSize: "1rem", padding: "1rem 2.5rem" }}>
              <Users size={20} />
              Get Involved
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
