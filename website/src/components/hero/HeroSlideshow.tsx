"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Heart, ArrowRight } from "lucide-react";

const slides = [
  {
    src: "/images/gallery/community-gathering.jpg",
    tagline: "Empowering Communities",
    subtitle: "Building stronger futures, one community at a time",
  },
  {
    src: "/images/gallery/happy-children.jpg",
    tagline: "Nurturing Young Lives",
    subtitle: "Every child deserves a chance to shine",
  },
  {
    src: "/images/gallery/youth-portrait.jpg",
    tagline: "Inspiring Hope",
    subtitle: "Transforming lives through compassion and purpose",
  },
  {
    src: "/images/gallery/village-life.jpg",
    tagline: "Reaching the Unreached",
    subtitle: "Bringing light to the most remote communities",
  },
  {
    src: "/images/gallery/homeless-awareness.jpg",
    tagline: "Standing With the Vulnerable",
    subtitle: "Because every life has immeasurable value",
  },
  {
    src: "/images/gallery/school-children.jpg",
    tagline: "Education Changes Everything",
    subtitle: "Unlocking potential through knowledge and learning",
  },
  {
    src: "/images/gallery/child-studying.jpg",
    tagline: "Investing in Tomorrow",
    subtitle: "Supporting dreams that will shape generations",
  },
  {
    src: "/images/gallery/child-labor-awareness.jpg",
    tagline: "Protecting Childhood",
    subtitle: "Advocating for the rights and dignity of every child",
  },
  {
    src: "/images/gallery/community-support.jpg",
    tagline: "Together We Rise",
    subtitle: "United in faith, purpose, and love",
  },
  {
    src: "/images/gallery/eye-contact.jpg",
    tagline: "Seeing the Unseen",
    subtitle: "Every face tells a story worth hearing",
  },
  {
    src: "/images/gallery/own-versions.jpg",
    tagline: "Creating Lasting Change",
    subtitle: "Sustainable impact that endures for generations",
  },
  {
    src: "/images/gallery/download-7.png",
    tagline: "Faith in Action",
    subtitle: "Living out our calling to serve humanity",
  },
  {
    src: "/images/gallery/download-9.png",
    tagline: "Hearts of Service",
    subtitle: "Dedicated volunteers making a real difference",
  },
  {
    src: "/images/gallery/download-10.png",
    tagline: "Healing Communities",
    subtitle: "Healthcare and nutrition for those who need it most",
  },
  {
    src: "/images/gallery/download-11.png",
    tagline: "Building Bridges",
    subtitle: "Connecting resources with those who need them",
  },
  {
    src: "/images/gallery/download-12.png",
    tagline: "A Brighter Future",
    subtitle: "Where hope meets action, transformation begins",
  },
  {
    src: "/images/gallery/premium-photo.jpg",
    tagline: "Let There Be Light",
    subtitle: "Illuminating paths to a better tomorrow",
  },
];

const kenBurnsVariants = [
  { scale: [1, 1.15], x: [0, 0] },
  { scale: [1.1, 1], x: [0, 0] },
  { scale: [1.05, 1.15], x: ["-2%", "2%"] },
  { scale: [1.05, 1.15], x: ["2%", "-2%"] },
];

export function HeroSlideshow() {
  const [current, setCurrent] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(nextSlide, 7000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const kbVariant = kenBurnsVariants[current % kenBurnsVariants.length];

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        minHeight: "600px",
        overflow: "hidden",
        background: "var(--color-dark)",
      }}
    >
      {/* Slides */}
      <AnimatePresence mode="sync">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 1,
          }}
        >
          <motion.div
            animate={{
              scale: kbVariant.scale,
              x: kbVariant.x,
            }}
            transition={{
              duration: 8,
              ease: "linear",
            }}
            style={{
              position: "absolute",
              inset: "-5%",
              willChange: "transform",
            }}
          >
            <Image
              src={slides[current].src}
              alt={slides[current].tagline}
              fill
              style={{ objectFit: "cover" }}
              priority={current < 2}
              sizes="100vw"
              quality={85}
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Dark Gradient Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 2,
          background:
            "linear-gradient(180deg, rgba(10, 15, 28, 0.4) 0%, rgba(10, 15, 28, 0.2) 30%, rgba(10, 15, 28, 0.6) 65%, rgba(10, 15, 28, 0.95) 100%)",
        }}
      />

      {/* Subtle vignette */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 2,
          background: "radial-gradient(ellipse at center, transparent 50%, rgba(10, 15, 28, 0.5) 100%)",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "0 clamp(1rem, 4vw, 2rem)",
        }}
      >
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{ marginBottom: "1.5rem" }}
        >
          <Image
            src="/images/logo/logo.jpeg"
            alt="Life Giving Foundation Logo"
            width={90}
            height={90}
            style={{
              borderRadius: "50%",
              border: "3px solid rgba(201, 168, 76, 0.4)",
              boxShadow: "0 0 40px rgba(201, 168, 76, 0.2)",
            }}
          />
        </motion.div>

        {/* Animated Tagline */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{ marginBottom: "0.5rem" }}
          >
            <span
              style={{
                fontFamily: "var(--font-accent)",
                fontSize: "clamp(0.75rem, 1.5vw, 0.9rem)",
                fontWeight: 600,
                color: "var(--color-gold)",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
              }}
            >
              {slides[current].tagline}
            </span>
          </motion.div>
        </AnimatePresence>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(2.2rem, 6vw, 4.5rem)",
            fontWeight: 800,
            color: "white",
            lineHeight: 1.1,
            marginBottom: "0.75rem",
            maxWidth: "900px",
            textShadow: "0 2px 20px rgba(0, 0, 0, 0.3)",
          }}
        >
          Let There Be Light
        </motion.h1>

        {/* Subtitle */}
        <AnimatePresence mode="wait">
          <motion.p
            key={`sub-${current}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(1rem, 2vw, 1.25rem)",
              fontWeight: 400,
              color: "rgba(255, 255, 255, 0.8)",
              maxWidth: "600px",
              lineHeight: 1.6,
              marginBottom: "2.5rem",
            }}
          >
            {slides[current].subtitle}
          </motion.p>
        </AnimatePresence>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
          style={{
            display: "flex",
            gap: "1rem",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <Link href="/about" className="btn-secondary">
            Learn Our Mission
            <ArrowRight size={18} />
          </Link>
          <Link href="/donate" className="btn-primary">
            <Heart size={18} />
            Donate Now
          </Link>
        </motion.div>

      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isLoaded ? { opacity: 1 } : {}}
        transition={{ delay: 1.5 }}
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          zIndex: 3,
          animation: "bounceDown 2s infinite",
          color: "rgba(255, 255, 255, 0.5)",
        }}
      >
        <ChevronDown size={28} />
      </motion.div>
    </section>
  );
}
