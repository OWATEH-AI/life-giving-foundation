"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, Mail, Phone, MapPin, Share2, Camera, Play, ChevronRight } from "lucide-react";

const quickLinks = [
  { href: "/about", label: "About Us" },
  { href: "/programs", label: "Our Programs" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact Us" },
  { href: "/donate", label: "Donate" },
];

const programs = [
  "Education and Scholarships",
  "Healthcare and Nutrition",
  "Community Development",
  "Youth Empowerment",
  "Emergency Relief",
  "Faith and Spiritual Growth",
];

export function Footer() {
  return (
    <footer
      style={{
        background: "var(--color-dark)",
        color: "var(--color-text-on-dark)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative top border */}
      <div
        style={{
          height: "3px",
          background: "linear-gradient(90deg, var(--color-purple), var(--color-gold), var(--color-teal), var(--color-purple))",
          backgroundSize: "200% 100%",
        }}
      />

      {/* Main Footer Content */}
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "4rem clamp(1rem, 4vw, 2rem) 2rem",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "3rem",
            marginBottom: "3rem",
          }}
        >
          {/* Column 1 — About */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                marginBottom: "1.25rem",
              }}
            >
              <Image
                src="/images/logo/logo.jpeg"
                alt="Life Giving Foundation"
                width={52}
                height={52}
                style={{
                  borderRadius: "50%",
                  border: "2px solid rgba(201, 168, 76, 0.3)",
                }}
              />
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "1.15rem",
                    fontWeight: 700,
                    color: "white",
                    lineHeight: 1.2,
                  }}
                >
                  Life Giving Foundation
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-accent)",
                    fontSize: "0.7rem",
                    color: "var(--color-gold)",
                    letterSpacing: "0.1em",
                    fontStyle: "italic",
                  }}
                >
                  Let there be light.
                </div>
              </div>
            </div>
            <p
              style={{
                fontSize: "0.9rem",
                lineHeight: 1.7,
                color: "rgba(255, 255, 255, 0.65)",
                marginBottom: "1.5rem",
              }}
            >
              A faith-inspired humanitarian organization dedicated to empowering
              communities, transforming lives, and bringing the light of hope to
              those in need.
            </p>
            {/* Social Icons */}
            <div style={{ display: "flex", gap: "0.75rem" }}>
              {[
                { icon: Share2, href: "#", label: "Facebook" },
                { icon: Camera, href: "#", label: "Instagram" },
                { icon: Play, href: "#", label: "YouTube" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    border: "1px solid rgba(255, 255, 255, 0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "rgba(255, 255, 255, 0.6)",
                    transition: "all 0.3s ease",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "var(--color-gold)";
                    e.currentTarget.style.borderColor = "var(--color-gold)";
                    e.currentTarget.style.color = "var(--color-dark)";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.15)";
                    e.currentTarget.style.color = "rgba(255, 255, 255, 0.6)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-accent)",
                fontSize: "0.85rem",
                fontWeight: 600,
                color: "var(--color-gold)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "1.25rem",
              }}
            >
              Quick Links
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    style={{
                      fontSize: "0.9rem",
                      color: "rgba(255, 255, 255, 0.65)",
                      textDecoration: "none",
                      transition: "all 0.3s ease",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.4rem",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "var(--color-gold)";
                      e.currentTarget.style.paddingLeft = "4px";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "rgba(255, 255, 255, 0.65)";
                      e.currentTarget.style.paddingLeft = "0";
                    }}
                  >
                    <ChevronRight size={14} />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Programs */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-accent)",
                fontSize: "0.85rem",
                fontWeight: 600,
                color: "var(--color-gold)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "1.25rem",
              }}
            >
              Our Programs
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {programs.map((program) => (
                <li
                  key={program}
                  style={{
                    fontSize: "0.9rem",
                    color: "rgba(255, 255, 255, 0.65)",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.4rem",
                  }}
                >
                  <ChevronRight size={14} style={{ color: "var(--color-purple-light)", flexShrink: 0 }} />
                  {program}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-accent)",
                fontSize: "0.85rem",
                fontWeight: 600,
                color: "var(--color-gold)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "1.25rem",
              }}
            >
              Get in Touch
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                <MapPin size={18} style={{ color: "var(--color-gold)", flexShrink: 0, marginTop: "2px" }} />
                <span style={{ fontSize: "0.9rem", color: "rgba(255, 255, 255, 0.65)" }}>
                  Mungate Business Center, Domboshava, Zimbabwe
                </span>
              </div>
              <a
                href="mailto:info@sophiasakupwanya.org"
                style={{
                  display: "flex",
                  gap: "0.75rem",
                  alignItems: "center",
                  fontSize: "0.9rem",
                  color: "rgba(255, 255, 255, 0.65)",
                  textDecoration: "none",
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "var(--color-gold)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255, 255, 255, 0.65)"; }}
              >
                <Mail size={18} style={{ color: "var(--color-gold)", flexShrink: 0 }} />
                info@sophiasakupwanya.org
              </a>
              <a
            href="tel:+263715861986"
            style={{
              display: "flex",
              gap: "0.75rem",
              alignItems: "center",
              fontSize: "0.9rem",
              color: "rgba(255, 255, 255, 0.65)",
              textDecoration: "none",
              transition: "color 0.3s ease",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = "var(--color-gold)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255, 255, 255, 0.65)"; }}
          >
            <Phone size={18} style={{ color: "var(--color-gold)", flexShrink: 0 }} />
            +263 71 586 1986
          </a>
            </div>

            {/* Donate CTA */}
            <Link
              href="/donate"
              className="btn-primary"
              style={{
                marginTop: "1.5rem",
                display: "inline-flex",
                padding: "0.7rem 1.5rem",
                fontSize: "0.85rem",
              }}
            >
              <Heart size={16} />
              Support Our Mission
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255, 255, 255, 0.08)",
            paddingTop: "1.5rem",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <p
            style={{
              fontSize: "0.8rem",
              color: "rgba(255, 255, 255, 0.4)",
            }}
          >
            © {new Date().getFullYear()} Life Giving Foundation. All rights reserved.
          </p>
          <Link
            href="/credits"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "0.35rem",
              fontSize: "0.8rem",
              textDecoration: "none",
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              textAlign: "center",
            }}
          >
            <span style={{ color: "rgba(255, 255, 255, 0.45)" }}>Website Powered By</span>
            <span style={{ color: "var(--color-gold)", fontWeight: 700 }}>
              ARTGALZIM-OWA TECHNOLOGIES
            </span>
            <span style={{ color: "rgba(255, 255, 255, 0.45)" }}>By</span>
              <span style={{ color: "white", fontWeight: 600 }}>SAMUEL T SAMOYO</span>
          </Link>
          <p
            style={{
              fontSize: "0.8rem",
              color: "rgba(255, 255, 255, 0.4)",
              fontStyle: "italic",
            }}
          >
            Faith-Inspired Humanitarian Development
          </p>
        </div>
      </div>
    </footer>
  );
}
