"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote:
      "What makes this vision powerful is that it speaks to real needs in Zimbabwe and beyond. When children, youth, and families are supported early, communities become stronger, hope grows, and the cycle of poverty begins to break.",
    name: "Rudo M.",
    role: "Community Representative",
    location: "Mbare, Harare",
  },
  {
    quote:
      "Many young people are battling unemployment, hopelessness, and negative influences such as drug abuse. Support through education, mentorship, and skills development can help them discover purpose and become responsible builders of the nation.",
    name: "Tatenda K.",
    role: "Youth Mentor",
    location: "Chitungwiza",
  },
  {
    quote:
      "Families are not only looking for handouts. They need practical support, dignity, and opportunity. Work in food support, health outreach, family care, and community development can reduce hardship and protect vulnerable households from deeper crisis.",
    name: "Memory D.",
    role: "Women and Family Advocate",
    location: "Mutoko",
  },
  {
    quote:
      "When charity work reaches children, youth, mothers, and vulnerable households, it helps reduce the pressures that often lead to crime, school dropout, and social instability. Compassionate support today can produce responsible, caring citizens tomorrow.",
    name: "Bongani N.",
    role: "Volunteer Coordinator",
    location: "Bulawayo",
  },
  {
    quote:
      "When people are helped with sincerity, many of them grow up to help others as well. That is how charity becomes a culture, communities begin to heal, and government officials, donors, and partners can see the long-term value of supporting this work.",
    name: "Nyasha T.",
    role: "Supporter of Community Development",
    location: "Gweru",
  },
];

export function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section
      id="testimonials"
      style={{
        padding: "var(--section-padding) 0",
        background: "var(--color-light)",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "0 clamp(1rem, 4vw, 2rem)",
        }}
      >
        <ScrollReveal>
          <SectionHeader
            label="Community Voices"
            title="Why This Vision Matters in Zimbabwe and Beyond"
            subtitle="These voices reflect the wider vision of fighting poverty, reducing drug abuse, discouraging criminal activity, opening pathways to employment, and raising people who can one day become a blessing to others through charity and service."
          />
        </ScrollReveal>

        {/* Carousel */}
        <div>
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <div
                style={{
                  background: "var(--color-card-bg, white)",
                  borderRadius: "var(--radius-xl)",
                  padding: "clamp(2rem, 4vw, 3.5rem)",
                  boxShadow: "var(--shadow-md)",
                  border: "1px solid rgba(0, 0, 0, 0.04)",
                  textAlign: "center",
                  position: "relative",
                }}
              >
                <Quote
                  size={48}
                  style={{
                    color: "var(--color-gold)",
                    opacity: 0.15,
                    margin: "0 auto 1rem",
                  }}
                />
                <p
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "clamp(1.05rem, 2vw, 1.3rem)",
                    fontWeight: 500,
                    lineHeight: 1.7,
                    color: "var(--color-text)",
                    marginBottom: "2rem",
                    fontStyle: "italic",
                  }}
                >
"{testimonials[current].quote}"
                </p>

                {/* Divider */}
                <div
                  style={{
                    width: "40px",
                    height: "3px",
                    background: "linear-gradient(90deg, var(--color-purple), var(--color-gold))",
                    borderRadius: "9999px",
                    margin: "0 auto 1.25rem",
                  }}
                />

                {/* Author */}
                <div
                  style={{
                    fontFamily: "var(--font-accent)",
                    fontSize: "1rem",
                    fontWeight: 600,
                    color: "var(--color-primary)",
                  }}
                >
                  {testimonials[current].name}
                </div>
                <div
                  style={{
                    fontSize: "0.85rem",
                    color: "var(--color-text-muted)",
                    marginTop: "0.25rem",
                  }}
                >
                  {testimonials[current].role} — {testimonials[current].location}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "0.75rem",
              marginTop: "1.25rem",
              flexWrap: "wrap",
            }}
          >
            <button
              onClick={prevSlide}
              aria-label="Previous testimonial"
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                background: "var(--color-card-bg, white)",
                border: "1px solid rgba(0, 0, 0, 0.08)",
                boxShadow: "var(--shadow-md)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--color-text)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--color-purple)";
                e.currentTarget.style.color = "white";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "var(--color-card-bg, white)";
                e.currentTarget.style.color = "var(--color-text)";
              }}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next testimonial"
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                background: "var(--color-card-bg, white)",
                border: "1px solid rgba(0, 0, 0, 0.08)",
                boxShadow: "var(--shadow-md)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--color-text)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--color-purple)";
                e.currentTarget.style.color = "white";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "var(--color-card-bg, white)";
                e.currentTarget.style.color = "var(--color-text)";
              }}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Dots */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "8px",
            marginTop: "2rem",
          }}
        >
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              style={{
                width: i === current ? "24px" : "10px",
                height: "10px",
                borderRadius: "9999px",
                background:
                  i === current ? "var(--color-purple)" : "rgba(0, 0, 0, 0.1)",
                border: "none",
                cursor: "pointer",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
