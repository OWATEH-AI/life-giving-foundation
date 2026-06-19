"use client";

import { useState } from "react";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { MapPin, Phone, Mail, Clock, Send, ArrowLeft } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneNumber = "263715861986";
    const text = `*New Contact Form Submission*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Subject:* ${formData.subject}%0A*Message:* ${formData.message}`;
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, "_blank");
  };

  return (
    <div style={{ paddingTop: "100px", minHeight: "100vh", background: "var(--color-light)" }}>
      <section style={{ padding: "4rem 0 6rem" }}>
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 clamp(1rem, 4vw, 2rem)",
          }}
        >
          <ScrollReveal>
            <div style={{ textAlign: "left", marginBottom: "1.5rem" }}>
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
            <SectionHeader
              label="Get in Touch"
              title="We'd Love to Hear From You"
              subtitle="Whether you have a question about our programs, want to volunteer, or are interested in partnering with us, our team is ready to answer all your questions."
            />
          </ScrollReveal>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "4rem",
              marginTop: "4rem",
            }}
          >
            {/* Contact Info */}
            <ScrollReveal direction="left">
              <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
                <div>
                  <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.5rem", marginBottom: "1.5rem", color: "var(--color-text)" }}>
                    Contact Information
                  </h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                    {[
              { icon: MapPin, title: "Our Office", desc: "Mungate Business Center, Domboshava, Zimbabwe" },
              { icon: Phone, title: "Phone Number", desc: "+263 71 586 1986" },
              { icon: Mail, title: "Email Address", desc: "info@sophiasakupwanya.org" },
              { icon: Clock, title: "Working Hours", desc: "Mon - Fri: 9:00 AM - 5:00 PM" },
            ].map((item, i) => {
                      const Icon = item.icon;
                      return (
                        <div key={i} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                          <div
                            style={{
                              width: "48px",
                              height: "48px",
                              borderRadius: "50%",
                              background: "var(--color-purple)",
                              color: "white",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              flexShrink: 0,
                            }}
                          >
                            <Icon size={20} />
                          </div>
                          <div>
                            <div style={{ fontWeight: 600, color: "var(--color-text)", marginBottom: "0.25rem" }}>{item.title}</div>
                            <div style={{ color: "var(--color-text-muted)", fontSize: "0.95rem" }}>{item.desc}</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Map Placeholder */}
                <div style={{ height: "250px", background: "var(--color-light-warm)", borderRadius: "var(--radius-lg)", border: "1px solid rgba(0,0,0,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-text-muted)" }}>
                  [Interactive Map Integration]
                </div>
              </div>
            </ScrollReveal>

            {/* Contact Form */}
            <ScrollReveal direction="right">
              <div
                style={{
                  background: "var(--color-card-bg, white)",
                  padding: "3rem",
                  borderRadius: "var(--radius-xl)",
                  boxShadow: "var(--shadow-lg)",
                  border: "1px solid rgba(0,0,0,0.05)",
                }}
              >
                <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.8rem", marginBottom: "2rem", color: "var(--color-text)" }}>
                  Send us a Message
                </h3>
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                      <label htmlFor="name" style={{ fontSize: "0.9rem", fontWeight: 500, color: "var(--color-text)" }}>Your Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        style={{ padding: "0.8rem 1rem", borderRadius: "var(--radius-md)", border: "1px solid var(--color-input-border)", background: "var(--color-input-bg)", color: "var(--color-input-text)", outline: "none", fontFamily: "var(--font-body)" }}
                        placeholder="John Doe"
                      />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                      <label htmlFor="email" style={{ fontSize: "0.9rem", fontWeight: 500, color: "var(--color-text)" }}>Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        style={{ padding: "0.8rem 1rem", borderRadius: "var(--radius-md)", border: "1px solid var(--color-input-border)", background: "var(--color-input-bg)", color: "var(--color-input-text)", outline: "none", fontFamily: "var(--font-body)" }}
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    <label htmlFor="subject" style={{ fontSize: "0.9rem", fontWeight: 500, color: "var(--color-text)" }}>Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      style={{ padding: "0.8rem 1rem", borderRadius: "var(--radius-md)", border: "1px solid var(--color-input-border)", background: "var(--color-input-bg)", color: "var(--color-input-text)", outline: "none", fontFamily: "var(--font-body)" }}
                      placeholder="How can we help you?"
                    />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    <label htmlFor="message" style={{ fontSize: "0.9rem", fontWeight: 500, color: "var(--color-text)" }}>Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      style={{ padding: "0.8rem 1rem", borderRadius: "var(--radius-md)", border: "1px solid var(--color-input-border)", background: "var(--color-input-bg)", color: "var(--color-input-text)", outline: "none", fontFamily: "var(--font-body)", resize: "vertical" }}
                      placeholder="Write your message here..."
                    />
                  </div>
                  <button type="submit" className="btn-purple" style={{ justifyContent: "center", marginTop: "1rem", padding: "1rem" }}>
                    Send Message via WhatsApp <Send size={18} />
                  </button>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
