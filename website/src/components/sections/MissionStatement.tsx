"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Quote } from "lucide-react";

export function MissionStatement() {
  return (
    <section
      id="mission"
      style={{
        padding: "var(--section-padding) 0",
        background: "var(--color-light)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative background element */}
      <div
        style={{
          position: "absolute",
          top: "-100px",
          right: "-100px",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(107, 45, 139, 0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 clamp(1rem, 4vw, 2rem)",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
          alignItems: "center",
        }}
        className="mission-grid"
      >
        {/* Left — Pull Quote */}
        <ScrollReveal direction="left">
          <div style={{ position: "relative" }} className="mission-quote">
            <Quote
              size={60}
              style={{
                color: "var(--color-gold)",
                opacity: 0.2,
                position: "absolute",
                top: "-10px",
                left: "-10px",
              }}
              className="mission-quote-icon"
            />
            <blockquote
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
                fontWeight: 600,
                color: "var(--color-text)",
                lineHeight: 1.4,
                paddingLeft: "1.5rem",
                borderLeft: "4px solid var(--color-gold)",
                margin: 0,
              }}
              className="mission-quote-text"
            >
"We believe that every life has immeasurable value, and that together, we can be instruments of hope, healing, and transformation."
            </blockquote>
            <div
              style={{
                marginTop: "1.5rem",
                paddingLeft: "1.5rem",
              }}
              className="mission-quote-meta"
            >
              <div
                style={{
                  width: "50px",
                  height: "3px",
                  background: "linear-gradient(90deg, var(--color-purple), var(--color-gold))",
                  borderRadius: "9999px",
                  marginBottom: "0.75rem",
                }}
              />
              <p
                style={{
                  fontFamily: "var(--font-accent)",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  color: "var(--color-purple)",
                  letterSpacing: "0.05em",
                }}
              >
                — Life Giving Foundation
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.85rem",
                  color: "var(--color-text-muted)",
                  fontStyle: "italic",
                  marginTop: "0.5rem",
                }}
              >
"The light shines in the darkness, and the darkness has not overcome it." — John 1:5
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Right — Descriptive Text */}
        <ScrollReveal direction="right" delay={0.2}>
          <div>
            <span
              style={{
                fontFamily: "var(--font-accent)",
                fontSize: "0.8rem",
                fontWeight: 600,
                color: "var(--color-purple)",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                display: "block",
                marginBottom: "0.75rem",
              }}
            >
              Our Mission
            </span>
            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                fontWeight: 700,
                color: "var(--color-text)",
                lineHeight: 1.2,
                marginBottom: "1.5rem",
              }}
            >
              Bringing Light to{" "}
              <span style={{ color: "var(--color-purple)" }}>Every Corner</span>{" "}
              of Our World
            </h2>
            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.8,
                color: "var(--color-text-muted)",
                marginBottom: "1.25rem",
              }}
            >
              Life Giving Foundation is a faith-inspired humanitarian organization
              committed to transforming communities through education, healthcare,
              and sustainable development. We work alongside local leaders and
              families to create lasting change that uplifts entire generations.
            </p>
            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.8,
                color: "var(--color-text-muted)",
                marginBottom: "2rem",
              }}
            >
              From providing scholarships and school supplies to delivering
              healthcare and nutritional support, our programs address the most
              pressing needs of underserved communities — always with dignity,
              compassion, and respect.
            </p>

            {/* Key pillars */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1rem",
              }}
              className="mission-pillars"
            >
              {[
                { label: "Education", desc: "Scholarships and mentoring" },
                { label: "Healthcare", desc: "Medical outreach programs" },
                { label: "Community", desc: "Sustainable development" },
                { label: "Faith", desc: "Spiritual empowerment" },
              ].map((pillar) => (
                <div
                  key={pillar.label}
                  style={{
                    padding: "1rem",
                    borderRadius: "var(--radius-md)",
                    background: "var(--color-light-warm)",
                    border: "1px solid rgba(201, 168, 76, 0.15)",
                    transition: "all 0.3s ease",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-accent)",
                      fontSize: "0.9rem",
                      fontWeight: 600,
                      color: "var(--color-primary)",
                      marginBottom: "0.25rem",
                    }}
                  >
                    {pillar.label}
                  </div>
                  <div
                    style={{
                      fontSize: "0.8rem",
                      color: "var(--color-text-muted)",
                    }}
                  >
                    {pillar.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .mission-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }

          .mission-quote-icon {
            width: 40px;
            height: 40px;
            left: 0 !important;
            top: -8px !important;
          }

          .mission-quote-text,
          .mission-quote-meta {
            padding-left: 1rem !important;
          }
        }

        @media (max-width: 560px) {
          .mission-pillars {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
