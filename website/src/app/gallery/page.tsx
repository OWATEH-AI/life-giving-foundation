"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { X, ZoomIn, ArrowLeft } from "lucide-react";

const images = [
  { src: "/images/gallery/community-gathering.jpg", alt: "Community Gathering" },
  { src: "/images/gallery/happy-children.jpg", alt: "Happy Children" },
  { src: "/images/gallery/youth-portrait.jpg", alt: "Youth Portrait" },
  { src: "/images/gallery/village-life.jpg", alt: "Village Life" },
  { src: "/images/gallery/homeless-awareness.jpg", alt: "Homeless Awareness" },
  { src: "/images/gallery/school-children.jpg", alt: "School Children" },
  { src: "/images/gallery/child-studying.jpg", alt: "Child Studying" },
  { src: "/images/gallery/child-labor-awareness.jpg", alt: "Child Labor Awareness" },
  { src: "/images/gallery/community-support.jpg", alt: "Community Support" },
  { src: "/images/gallery/eye-contact.jpg", alt: "Eye Contact" },
  { src: "/images/gallery/own-versions.jpg", alt: "Creating Change" },
  { src: "/images/gallery/download-7.png", alt: "Faith in Action" },
  { src: "/images/gallery/download-9.png", alt: "Hearts of Service" },
  { src: "/images/gallery/download-10.png", alt: "Healing Communities" },
  { src: "/images/gallery/download-11.png", alt: "Building Bridges" },
  { src: "/images/gallery/download-12.png", alt: "A Brighter Future" },
  { src: "/images/gallery/premium-photo.jpg", alt: "Let There Be Light" },
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Simple column distribution for a masonry-like look
  const cols = [[], [], []] as any[][];
  images.forEach((img, i) => cols[i % 3].push(img));

  return (
    <div style={{ paddingTop: "80px", minHeight: "100vh", background: "var(--color-light)" }}>
      {/* Page Header */}
      <section style={{ padding: "2rem 0 1rem", textAlign: "center" }}>
        <ScrollReveal>
          <div style={{ textAlign: "left", maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(1rem, 4vw, 2rem)", marginBottom: "1.5rem" }}>
            <Link
              href="/"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                textDecoration: "none",
                color: "var(--color-text-muted)",
                border: "1px solid rgba(0, 0, 0, 0.12)",
                borderRadius: "var(--radius-md)",
                padding: "0.55rem 1rem",
                fontSize: "0.9rem",
                transition: "all 0.2s ease",
              }}
            >
              <ArrowLeft size={16} />
              Back to Home
            </Link>
          </div>
          <h1
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
              fontWeight: 800,
              color: "var(--color-text)",
              marginBottom: "1rem",
            }}
          >
            Moments of <span style={{ color: "var(--color-purple)" }}>Impact</span>
          </h1>
          <p
            style={{
              fontSize: "1.1rem",
              color: "var(--color-text-muted)",
              maxWidth: "600px",
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            A visual journey through the lives we've touched and the communities we serve.
          </p>
        </ScrollReveal>
      </section>

      {/* Masonry Grid */}
      <section style={{ padding: "2rem clamp(1rem, 4vw, 2rem) 6rem" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1rem", alignItems: "start" }}>
            {cols.map((col, colIndex) => (
              <div key={colIndex} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {col.map((image, index) => (
                  <ScrollReveal key={index} delay={index * 0.1}>
                    <div
                      className="gallery-item"
                      onClick={() => setSelectedImage(image.src)}
                      style={{
                        position: "relative",
                        width: "100%",
                        paddingBottom: Math.random() > 0.5 ? "120%" : "75%", // Varying aspect ratios
                        borderRadius: "var(--radius-md)",
                        overflow: "hidden",
                        cursor: "zoom-in",
                      }}
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        style={{ objectFit: "cover", transition: "transform 0.5s ease" }}
                        className="gallery-img"
                      />
                      <div className="gallery-overlay">
                        <ZoomIn size={32} color="white" />
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 2000,
              background: "rgba(10, 15, 28, 0.95)",
              backdropFilter: "blur(10px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "2rem",
            }}
          >
            <button
              onClick={() => setSelectedImage(null)}
              style={{
                position: "absolute",
                top: "2rem",
                right: "2rem",
                background: "transparent",
                border: "none",
                color: "white",
                cursor: "pointer",
                padding: "0.5rem",
                zIndex: 2001,
              }}
            >
              <X size={32} />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "1000px",
                height: "80vh",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Enlarged view"
                fill
                style={{ objectFit: "contain" }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .gallery-overlay {
          position: absolute;
          inset: 0;
          background: rgba(107, 45, 139, 0.4);
          display: flex;
          alignItems: center;
          justifyContent: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .gallery-item:hover .gallery-overlay {
          opacity: 1;
        }
        .gallery-item:hover .gallery-img {
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
}
