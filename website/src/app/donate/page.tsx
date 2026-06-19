"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Heart, Landmark, Send, ArrowLeft } from "lucide-react";

export default function DonatePage() {
  const [donorName, setDonorName] = useState("");
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [donationAmount, setDonationAmount] = useState("");
  const [donationMessage, setDonationMessage] = useState("");
  
  const formRef = useRef<HTMLDivElement>(null);

  const handleSelectTier = (amount: string) => {
    setDonationAmount(amount.replace("$", ""));
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneNumber = "263715861986";
    const nameToSubmit = isAnonymous ? "Anonymous Donor" : (donorName.trim() || "Anonymous Donor");
    const amountVal = donationAmount.trim();
    const amountStr = amountVal ? `$${amountVal}` : "Custom pledge / non-monetary / to be arranged";
    
    const text = `*New Donation Pledge*%0A%0A*Donor:* ${nameToSubmit}%0A*Amount:* ${amountStr}%0A*Donation Details / Custom Message:* ${donationMessage.trim() || "General support donation"}`;
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, "_blank");
  };

  return (
    <div style={{ paddingTop: "80px", minHeight: "100vh", background: "var(--color-light-warm)" }}>
      {/* Hero */}
      <section
        style={{
          position: "relative",
          padding: "5rem 0",
          background: "var(--color-dark)",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", inset: 0, opacity: 0.4 }}>
          <Image
            src="/images/gallery/happy-children.jpg"
            alt="Donate to Life Giving Foundation"
            fill
            style={{ objectFit: "cover", objectPosition: "center 20%" }}
            priority
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, var(--color-dark) 0%, transparent 50%, var(--color-dark) 100%)" }} />
        </div>

        <div style={{ position: "relative", zIndex: 1, maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(1rem, 4vw, 2rem)", textAlign: "center" }}>
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
            <Heart size={48} style={{ color: "var(--color-gold)", margin: "0 auto 1.5rem" }} />
            <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 800, color: "white", marginBottom: "1rem" }}>
              Give the Gift of <span style={{ color: "var(--color-gold)" }}>Hope</span>
            </h1>
            <p style={{ fontSize: "1.1rem", color: "rgba(255, 255, 255, 0.8)", maxWidth: "700px", margin: "0 auto", lineHeight: 1.6 }}>
              Your generosity translates directly into meals, education, healthcare, and sustainable development for communities in urgent need.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Donation Tiers */}
      <section style={{ padding: "var(--section-padding) 0 2rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(1rem, 4vw, 2rem)" }}>
          <ScrollReveal>
            <SectionHeader label="Make an Impact" title="How Your Donation Helps" />
          </ScrollReveal>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "2rem", marginTop: "3rem" }}>
            {[
              { amount: "$50", title: "Feed a Family", desc: "Provides a monthly nutritional package for a family of four.", color: "var(--color-teal)" },
              { amount: "$150", title: "Educate a Child", desc: "Covers school fees, uniform, and supplies for one full year.", color: "var(--color-purple)", featured: true },
              { amount: "$500", title: "Medical Outreach", desc: "Funds a medical camp serving up to 50 individuals in a rural area.", color: "var(--color-primary)" },
              { amount: "$1000", title: "Community Well", desc: "Contributes to building sustainable clean water infrastructure.", color: "var(--color-gold-dark)" },
            ].map((tier, i) => (
              <ScrollReveal key={tier.title} delay={i * 0.1}>
                <div
                  onClick={() => handleSelectTier(tier.amount)}
                  style={{
                    background: "var(--color-card-bg, white)",
                    padding: "2.5rem 2rem",
                    borderRadius: "var(--radius-xl)",
                    border: tier.featured ? `2px solid ${tier.color}` : "1px solid rgba(0,0,0,0.08)",
                    boxShadow: tier.featured ? "var(--shadow-lg)" : "var(--shadow-sm)",
                    textAlign: "center",
                    position: "relative",
                    transform: tier.featured ? "scale(1.05)" : "scale(1)",
                    zIndex: tier.featured ? 2 : 1,
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                  className="tier-card"
                >
                  {tier.featured && (
                    <div style={{ position: "absolute", top: "-14px", left: "50%", transform: "translateX(-50%)", background: tier.color, color: "white", padding: "0.25rem 1rem", borderRadius: "var(--radius-full)", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase" }}>
                      Most Needed
                    </div>
                  )}
                  <div style={{ fontFamily: "var(--font-heading)", fontSize: "3rem", fontWeight: 800, color: tier.color, marginBottom: "0.5rem" }}>
                    {tier.amount}
                  </div>
                  <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.3rem", fontWeight: 700, color: "var(--color-text)", marginBottom: "1rem" }}>
                    {tier.title}
                  </h3>
                  <p style={{ color: "var(--color-text-muted)", fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "1.5rem" }}>
                    {tier.desc}
                  </p>
                  <span style={{ color: tier.color, fontWeight: 600, fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    Select This Tier &rarr;
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Main Donation Form & Alternative Section */}
      <section ref={formRef} style={{ padding: "4rem 0 6rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(1rem, 4vw, 2rem)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "4rem", alignItems: "start" }}>
            
            {/* Column 1: Donation Form */}
            <ScrollReveal direction="left">
              <div
                style={{
                  background: "var(--color-card-bg, white)",
                  padding: "3rem clamp(1.5rem, 5vw, 3rem)",
                  borderRadius: "var(--radius-xl)",
                  boxShadow: "var(--shadow-lg)",
                  border: "1px solid rgba(0,0,0,0.05)",
                }}
              >
                <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.8rem", marginBottom: "0.5rem", color: "var(--color-text)" }}>
                  Make a Donation
                </h3>
                <p style={{ color: "var(--color-text-muted)", fontSize: "0.95rem", marginBottom: "2rem" }}>
                  Fill out your details to pledge or customize what you'd like to contribute.
                </p>

                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                  
                  {/* Name field */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <label htmlFor="name" style={{ fontSize: "0.9rem", fontWeight: 500, color: "var(--color-text)" }}>
                        Your Name
                      </label>
                      <label style={{ fontSize: "0.85rem", display: "flex", alignItems: "center", gap: "0.35rem", cursor: "pointer", color: "var(--color-text-muted)" }}>
                        <input
                          type="checkbox"
                          checked={isAnonymous}
                          onChange={(e) => setIsAnonymous(e.target.checked)}
                          style={{ accentColor: "var(--color-purple)" }}
                        />
                        Donate as Anonymous
                      </label>
                    </div>
                    <input
                      type="text"
                      id="name"
                      value={isAnonymous ? "Anonymous Donor" : donorName}
                      onChange={(e) => setDonorName(e.target.value)}
                      disabled={isAnonymous}
                      style={{
                        padding: "0.8rem 1rem",
                        borderRadius: "var(--radius-md)",
                        border: "1px solid var(--color-input-border)",
                        background: isAnonymous ? "var(--color-light-muted)" : "var(--color-input-bg)",
                        color: isAnonymous ? "var(--color-text-muted)" : "var(--color-input-text)",
                        outline: "none",
                        fontFamily: "var(--font-body)",
                        transition: "all 0.3s ease",
                      }}
                      placeholder="e.g. John Doe"
                      required={!isAnonymous}
                    />
                  </div>

                  {/* Amount / Price Field */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    <label htmlFor="amount" style={{ fontSize: "0.9rem", fontWeight: 500, color: "var(--color-text)" }}>
                      Donation Amount ($) <span style={{ color: "var(--color-text-muted)", fontWeight: 400 }}>(Optional)</span>
                    </label>
                    <div style={{ position: "relative" }}>
                      <span style={{ position: "absolute", left: "1rem", top: "50%", transform: "translateY(-50%)", color: "var(--color-text-muted)", fontWeight: 500 }}>$</span>
                      <input
                        type="number"
                        id="amount"
                        value={donationAmount}
                        onChange={(e) => setDonationAmount(e.target.value)}
                        min="1"
                        style={{
                          padding: "0.8rem 1rem 0.8rem 2rem",
                          width: "100%",
                          borderRadius: "var(--radius-md)",
                          border: "1px solid var(--color-input-border)",
                          background: "var(--color-input-bg)",
                          color: "var(--color-input-text)",
                          outline: "none",
                          fontFamily: "var(--font-body)",
                        }}
                        placeholder="e.g. 150 (Or leave empty for custom items)"
                      />
                    </div>
                  </div>

                  {/* What they want to donate / Custom message */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    <label htmlFor="message" style={{ fontSize: "0.9rem", fontWeight: 500, color: "var(--color-text)" }}>
                      What you would like to donate / Custom Message
                    </label>
                    <textarea
                      id="message"
                      value={donationMessage}
                      onChange={(e) => setDonationMessage(e.target.value)}
                      rows={4}
                      style={{
                        padding: "0.8rem 1rem",
                        borderRadius: "var(--radius-md)",
                        border: "1px solid var(--color-input-border)",
                        background: "var(--color-input-bg)",
                        color: "var(--color-input-text)",
                        outline: "none",
                        fontFamily: "var(--font-body)",
                        resize: "vertical",
                      }}
                      placeholder="e.g., I would like to donate funding / school textbooks / clothes, or write a message of support..."
                      required
                    />
                  </div>

                  <button type="submit" className="btn-purple" style={{ justifyContent: "center", marginTop: "1rem", padding: "1rem" }}>
                    Send Donation Pledge <Send size={18} />
                  </button>
                </form>
              </div>
            </ScrollReveal>

            {/* Column 2: Alternative details */}
            <ScrollReveal direction="right">
              <div
                style={{
                  background: "var(--color-card-bg, white)",
                  padding: "3rem clamp(1.5rem, 5vw, 3rem)",
                  borderRadius: "var(--radius-xl)",
                  boxShadow: "var(--shadow-md)",
                  border: "1px solid rgba(0,0,0,0.05)",
                }}
              >
                <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.6rem", marginBottom: "1.5rem", color: "var(--color-text)" }}>
                  Other Ways to Support
                </h3>

                <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                  <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                    <div
                      style={{
                        width: "48px",
                        height: "48px",
                        borderRadius: "50%",
                        background: "var(--color-light-warm)",
                        color: "var(--color-gold-dark)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <Landmark size={24} />
                    </div>
                    <div>
                      <div style={{ fontWeight: 600, color: "var(--color-text)", marginBottom: "0.25rem" }}>
                        Direct Bank Transfer (EFT)
                      </div>
                      <div style={{ color: "var(--color-text-muted)", fontSize: "0.9rem", lineHeight: 1.6 }}>
                        <strong>Bank:</strong> Standard Bank<br />
                        <strong>Account Name:</strong> Life Giving Foundation<br />
                        <strong>Account Number:</strong> 123456789<br />
                        <strong>Branch Code:</strong> 012345
                      </div>
                    </div>
                  </div>

                  <div style={{ borderTop: "1px solid rgba(0,0,0,0.05)", paddingTop: "1.5rem" }}>
                    <h4 style={{ fontFamily: "var(--font-heading)", fontSize: "1.1rem", fontWeight: 700, color: "var(--color-text)", marginBottom: "0.75rem" }}>
                      Receipts and Accountability
                    </h4>
                    <p style={{ color: "var(--color-text-muted)", fontSize: "0.9rem", lineHeight: 1.6 }}>
                      For every pledge made through our form, our finance team will reach out directly to arrange convenient transfer options and issue an official tax-exempt donation receipt.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      <style jsx global>{`
        .tier-card:hover {
          transform: translateY(-5px) !important;
          box-shadow: var(--shadow-lg) !important;
        }
      `}</style>
    </div>
  );
}
