"use client";

import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

const news = [
  {
    id: 1,
    title: "Sophia Sakupwanya and Team's Vision for Life Giving Foundation",
    excerpt:
      "Sophia Sakupwanya and Team look forward to a strong and trusted foundation that reaches children, families, and communities with practical love, dignity, and long-term hope.",
    image: "/images/gallery/community-support.jpg",
    category: "Vision",
  },
  {
    id: 2,
    title: "Giving Credit to Sophia Sakupwanya and Team for a Meaningful Programme",
    excerpt:
      "This programme reflects the heart of Sophia Sakupwanya and Team for education, care, and community upliftment. It deserves support because it is built to change lives, not just run activities.",
    image: "/images/gallery/child-studying.jpg",
    category: "Leadership",
  },
  {
    id: 3,
    title: "A Story That Invites Donors, Funders, and Partners",
    excerpt:
      "Every contribution can help turn this vision into scholarships, food support, healthcare outreach, youth empowerment, and visible change that supporters can believe in.",
    image: "/images/gallery/community-gathering.jpg",
    category: "Partnership",
  },
];

export function LatestNews() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section
      id="news"
      style={{
        padding: "var(--section-padding) 0",
        background: "var(--color-light-warm)",
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
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: "3.5rem",
              flexWrap: "wrap",
              gap: "1.5rem",
            }}
          >
            <div style={{ margin: 0, maxWidth: "600px" }}>
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
                Updates and Stories
              </span>
              <div
                style={{
                  width: "50px",
                  height: "3px",
                  background: "linear-gradient(90deg, var(--color-purple), var(--color-gold))",
                  borderRadius: "9999px",
                  marginBottom: "1.25rem",
                }}
              />
              <h2
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                  fontWeight: 700,
                  color: "var(--color-text)",
                  lineHeight: 1.2,
                }}
              >
                Vision, Leadership, and Impact
              </h2>
              <p
                style={{
                  marginTop: "1rem",
                  color: "var(--color-text-muted)",
                  fontSize: "1rem",
                  lineHeight: 1.7,
                }}
              >
                These stories highlight the heart behind the foundation, the leadership of
                Sophia Sakupwanya and Team, and the kind of meaningful work that donors and funders
                can confidently support.
              </p>
            </div>

            <Link
              href="/donate"
              style={{
                fontFamily: "var(--font-accent)",
                fontSize: "0.95rem",
                fontWeight: 600,
                color: "var(--color-primary)",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.5rem 0",
                borderBottom: "2px solid transparent",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--color-purple)";
                e.currentTarget.style.borderColor = "var(--color-gold)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--color-primary)";
                e.currentTarget.style.borderColor = "transparent";
              }}
            >
              Support the Vision <ArrowRight size={16} />
            </Link>
          </div>
        </ScrollReveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "2rem",
          }}
        >
          {news.map((item, i) => {
            const isHovered = hoveredId === item.id;
            
            return (
              <ScrollReveal key={item.id} delay={i * 0.1}>
                <div
                  onMouseEnter={() => setHoveredId(item.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  style={{
                    background: "var(--color-card-bg, white)",
                    borderRadius: "var(--radius-lg)",
                    overflow: "hidden",
                    boxShadow: isHovered ? "var(--shadow-lg)" : "var(--shadow-sm)",
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    transform: isHovered ? "translateY(-6px)" : "translateY(0)",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                  }}
                >
                  {/* Image */}
                  <div
                    style={{
                      position: "relative",
                      height: "240px",
                      overflow: "hidden",
                    }}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      style={{
                        objectFit: "cover",
                        transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                        transform: isHovered ? "scale(1.05)" : "scale(1)",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: "1rem",
                        left: "1rem",
                        background: "var(--color-gold)",
                        color: "var(--color-dark)",
                        padding: "0.4rem 1rem",
                        borderRadius: "var(--radius-full)",
                        fontFamily: "var(--font-accent)",
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        letterSpacing: "0.05em",
                        textTransform: "uppercase",
                        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                      }}
                    >
                      {item.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div style={{ padding: "1.75rem", display: "flex", flexDirection: "column", flex: 1 }}>
                    <h3
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontSize: "1.3rem",
                        fontWeight: 700,
                        color: isHovered ? "var(--color-primary)" : "var(--color-text)",
                        marginBottom: "1rem",
                        lineHeight: 1.3,
                        transition: "color 0.3s ease",
                      }}
                    >
                      {item.title}
                    </h3>

                    <p
                      style={{
                        fontSize: "0.95rem",
                        color: "var(--color-text-muted)",
                        lineHeight: 1.6,
                        marginBottom: "1.5rem",
                        flex: 1,
                      }}
                    >
                      {item.excerpt}
                    </p>

                    <Link
                      href="/donate"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.4rem",
                        fontFamily: "var(--font-accent)",
                        fontSize: "0.9rem",
                        fontWeight: 600,
                        color: "var(--color-purple)",
                        textDecoration: "none",
                        marginTop: "auto",
                      }}
                    >
                      Support This Work
                      <ArrowRight
                        size={16}
                        style={{
                          transform: isHovered ? "translateX(4px)" : "translateX(0)",
                          transition: "transform 0.3s ease",
                        }}
                      />
                    </Link>
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
