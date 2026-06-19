"use client";

import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Heart, Target, Sparkles, Users, ArrowLeft } from "lucide-react";

export default function AboutPage() {
  return (
    <div style={{ paddingTop: "80px" }}>
      {/* Page Hero */}
      <section
        style={{
          position: "relative",
          padding: "6rem 0",
          background: "var(--color-dark)",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.3,
          }}
        >
          <Image
            src="/images/gallery/community-support.jpg"
            alt="About Life Giving Foundation"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(90deg, var(--color-dark) 0%, transparent 100%)",
            }}
          />
        </div>

        <div
          style={{
            position: "relative",
            zIndex: 1,
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 clamp(1rem, 4vw, 2rem)",
          }}
        >
          <ScrollReveal>
            <Link
              href="/"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                textDecoration: "none",
                color: "rgba(255, 255, 255, 0.78)",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                borderRadius: "var(--radius-md)",
                padding: "0.55rem 1rem",
                marginBottom: "1.5rem",
                fontSize: "0.9rem",
                transition: "all 0.2s ease",
              }}
            >
              <ArrowLeft size={16} />
              Back to Home
            </Link>
            <h1
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                fontWeight: 800,
                color: "white",
                marginBottom: "1rem",
              }}
            >
              Our <span style={{ color: "var(--color-gold)" }}>Story</span>
            </h1>
            <p
              style={{
                fontSize: "1.2rem",
                color: "rgba(255, 255, 255, 0.8)",
                maxWidth: "600px",
                lineHeight: 1.6,
              }}
            >
              A journey of faith, compassion, and relentless dedication to bringing light to the world's darkest corners.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* History & Vision */}
      <section style={{ padding: "var(--section-padding) 0", background: "var(--color-light)" }}>
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 clamp(1rem, 4vw, 2rem)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "4rem",
            alignItems: "center",
          }}
        >
          <ScrollReveal direction="left">
            <div style={{ position: "relative", height: "500px", borderRadius: "var(--radius-lg)", overflow: "hidden" }}>
              <Image
                src="/images/gallery/eye-contact.jpg"
                alt="Foundation History"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <SectionHeader
              label="Our History"
              title="A Legacy of Light"
              align="left"
            />
            <div style={{ fontSize: "1.05rem", color: "var(--color-text-muted)", lineHeight: 1.8 }}>
              <p style={{ marginBottom: "1.5rem" }}>
                Founded on the profound belief that every human being is created with inherent dignity and purpose, the Life Giving Foundation began as a small grassroots initiative. Driven by faith and a commitment to serve the most vulnerable, we started by providing basic educational resources to a single community.
              </p>
              <p style={{ marginBottom: "1.5rem" }}>
                Over the years, our mission expanded. We recognized that true transformation requires a holistic approach—addressing not just educational needs, but also healthcare, community infrastructure, and spiritual well-being. Today, we operate comprehensive programs across multiple regions, touching thousands of lives annually.
              </p>
              <p>
                Our work is guided by the simple yet powerful mandate to "Let there be light." We strive to be that light in places where hope seems distant, partnering with local leaders to build sustainable, thriving communities.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Core Values */}
      <section style={{ padding: "var(--section-padding) 0", background: "var(--color-light-warm)" }}>
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 clamp(1rem, 4vw, 2rem)",
          }}
        >
          <ScrollReveal>
            <SectionHeader
              label="What Drives Us"
              title="Our Core Values"
              subtitle="The foundational principles that guide every decision we make and every action we take."
            />
          </ScrollReveal>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "2rem",
            }}
          >
            {[
              {
                icon: Heart,
                title: "Compassion",
                desc: "We serve with deep empathy and genuine love for those we help, recognizing their inherent worth.",
                color: "var(--color-purple)",
              },
              {
                icon: Target,
                title: "Integrity",
                desc: "We operate with complete transparency and accountability in all our programs and financial stewardship.",
                color: "var(--color-primary)",
              },
              {
                icon: Sparkles,
                title: "Faith",
                desc: "Our work is inspired by our faith, driving us to bring hope and light to communities in need.",
                color: "var(--color-gold-dark)",
              },
              {
                icon: Users,
                title: "Collaboration",
                desc: "We believe in the power of partnership, working alongside local communities to create sustainable change.",
                color: "var(--color-teal)",
              },
            ].map((value, i) => {
              const Icon = value.icon;
              return (
                <ScrollReveal key={value.title} delay={i * 0.1}>
                  <div
                    style={{
                      background: "var(--color-card-bg, white)",
                      padding: "2.5rem 2rem",
                      borderRadius: "var(--radius-lg)",
                      boxShadow: "var(--shadow-sm)",
                      border: "1px solid rgba(0,0,0,0.05)",
                      height: "100%",
                      transition: "transform 0.3s ease",
                    }}
                    className="hover-lift"
                  >
                    <div
                      style={{
                        width: "60px",
                        height: "60px",
                        borderRadius: "50%",
                        background: `${value.color}15`,
                        color: value.color,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: "1.5rem",
                      }}
                    >
                      <Icon size={30} />
                    </div>
                    <h3
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontSize: "1.4rem",
                        fontWeight: 700,
                        color: "var(--color-text)",
                        marginBottom: "1rem",
                      }}
                    >
                      {value.title}
                    </h3>
                    <p style={{ color: "var(--color-text-muted)", lineHeight: 1.7 }}>
                      {value.desc}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>
      <style jsx>{`
        .hover-lift:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-md);
        }
      `}</style>
    </div>
  );
}
