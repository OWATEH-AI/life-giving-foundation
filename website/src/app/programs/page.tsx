"use client";

import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProgramsOverview } from "@/components/sections/ProgramsOverview";
import { CheckCircle2 } from "lucide-react";

const approaches = [
  "Community-Led Initiatives",
  "Sustainable Development Goals",
  "Holistic Care Models",
  "Partnerships with Local Leaders",
  "Data-Driven Impact Measurement",
  "Faith-Based Values in Action",
];

export default function ProgramsPage() {
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
            src="/images/gallery/download-12.png"
            alt="Our Programs"
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
            <h1
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                fontWeight: 800,
                color: "white",
                marginBottom: "1rem",
              }}
            >
              Our <span style={{ color: "var(--color-gold)" }}>Programs</span>
            </h1>
            <p
              style={{
                fontSize: "1.2rem",
                color: "rgba(255, 255, 255, 0.8)",
                maxWidth: "600px",
                lineHeight: 1.6,
              }}
            >
              Comprehensive initiatives designed to empower individuals, strengthen families, and build resilient communities.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Programs Grid (Reusing the component) */}
      <ProgramsOverview />

      {/* Our Approach */}
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
            <SectionHeader
              label="Methodology"
              title="Our Approach to Change"
              align="left"
            />
            <p style={{ fontSize: "1.05rem", color: "var(--color-text-muted)", lineHeight: 1.8, marginBottom: "2rem" }}>
              We don't just provide temporary relief; we aim for long-term transformation. By combining immediate assistance with sustainable development strategies, we ensure that communities can thrive independently long after our initial intervention.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              {approaches.map((item, index) => (
                <div key={index} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                  <CheckCircle2 size={20} style={{ color: "var(--color-gold)", flexShrink: 0, marginTop: "2px" }} />
                  <span style={{ fontSize: "0.95rem", color: "var(--color-text)", fontWeight: 500 }}>{item}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div style={{ position: "relative", height: "450px", borderRadius: "var(--radius-lg)", overflow: "hidden", boxShadow: "var(--shadow-lg)" }}>
              <Image
                src="/images/gallery/download-9.png"
                alt="Our Approach"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
