"use client";

import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Heart, CreditCard, Landmark, Phone } from "lucide-react";

export default function DonatePage() {
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
      <section style={{ padding: "var(--section-padding) 0" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(1rem, 4vw, 2rem)" }}>
          <ScrollReveal>
            <SectionHeader label="Make an Impact" title="How Your Donation Helps" />
          </ScrollReveal>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem", marginTop: "3rem" }}>
            {[
              { amount: "$50", title: "Feed a Family", desc: "Provides a monthly nutritional package for a family of four.", color: "var(--color-teal)" },
              { amount: "$150", title: "Educate a Child", desc: "Covers school fees, uniform, and supplies for one full year.", color: "var(--color-purple)", featured: true },
              { amount: "$500", title: "Medical Outreach", desc: "Funds a medical camp serving up to 50 individuals in a rural area.", color: "var(--color-primary)" },
              { amount: "$1000", title: "Community Well", desc: "Contributes to building sustainable clean water infrastructure.", color: "var(--color-gold-dark)" },
            ].map((tier, i) => (
              <ScrollReveal key={tier.title} delay={i * 0.1}>
                <div
                  style={{
                    background: "white",
                    padding: "2.5rem",
                    borderRadius: "var(--radius-xl)",
                    border: tier.featured ? `2px solid ${tier.color}` : "1px solid rgba(0,0,0,0.08)",
                    boxShadow: tier.featured ? "var(--shadow-lg)" : "var(--shadow-sm)",
                    textAlign: "center",
                    position: "relative",
                    transform: tier.featured ? "scale(1.05)" : "scale(1)",
                    zIndex: tier.featured ? 2 : 1,
                  }}
                >
                  {tier.featured && (
                    <div style={{ position: "absolute", top: "-14px", left: "50%", transform: "translateX(-50%)", background: tier.color, color: "white", padding: "0.25rem 1rem", borderRadius: "var(--radius-full)", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase" }}>
                      Most Needed
                    </div>
                  )}
                  <div style={{ fontFamily: "var(--font-heading)", fontSize: "3rem", fontWeight: 800, color: tier.color, marginBottom: "0.5rem" }}>
                    {tier.amount}
                  </div>
                  <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.4rem", fontWeight: 700, color: "var(--color-text)", marginBottom: "1rem" }}>
                    {tier.title}
                  </h3>
                  <p style={{ color: "var(--color-text-muted)", fontSize: "0.95rem", lineHeight: 1.6 }}>
                    {tier.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section style={{ padding: "0 0 6rem" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 clamp(1rem, 4vw, 2rem)" }}>
          <ScrollReveal>
            <div style={{ background: "white", padding: "3rem", borderRadius: "var(--radius-xl)", boxShadow: "var(--shadow-md)", border: "1px solid rgba(0,0,0,0.05)" }}>
              <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.8rem", textAlign: "center", marginBottom: "2.5rem", color: "var(--color-text)" }}>Ways to Give</h3>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <a href="#" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1.25rem", borderRadius: "var(--radius-md)", border: "1px solid rgba(0,0,0,0.1)", textDecoration: "none", color: "var(--color-text)", transition: "all 0.3s ease" }} className="payment-method">
                  <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                    <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "var(--color-light-warm)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-primary)" }}><CreditCard size={20} /></div>
                    <div>
                      <div style={{ fontWeight: 600 }}>Credit / Debit Card</div>
                      <div style={{ fontSize: "0.85rem", color: "var(--color-text-muted)" }}>Secure online payment via Stripe/PayPal</div>
                    </div>
                  </div>
                  <span style={{ color: "var(--color-primary)", fontWeight: 600, fontSize: "0.9rem" }}>Donate Online -&gt;</span>
                </a>

                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1.25rem", borderRadius: "var(--radius-md)", border: "1px solid rgba(0,0,0,0.1)", background: "var(--color-light)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                    <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "var(--color-light-warm)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-gold-dark)" }}><Landmark size={20} /></div>
                    <div>
                      <div style={{ fontWeight: 600, color: "var(--color-text)" }}>Bank Transfer (EFT)</div>
                      <div style={{ fontSize: "0.85rem", color: "var(--color-text-muted)" }}>
                        Bank: Standard Bank<br />
                        Acc Name: Life Giving Foundation<br />
                        Acc No: 123456789 (Branch: 012345)
                      </div>
                    </div>
                  </div>
                </div>

                <a href="https://wa.me/263715861986?text=I%20would%20like%20to%20make%20a%20donation%20to%20the%20foundation." target="_blank" rel="noreferrer" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1.25rem", borderRadius: "var(--radius-md)", border: "1px solid rgba(0,0,0,0.1)", textDecoration: "none", color: "var(--color-text)", transition: "all 0.3s ease" }} className="payment-method">
                  <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                    <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "#25D36622", display: "flex", alignItems: "center", justifyContent: "center", color: "#25D366" }}><Phone size={20} /></div>
                    <div>
                      <div style={{ fontWeight: 600 }}>WhatsApp Pledge</div>
                      <div style={{ fontSize: "0.85rem", color: "var(--color-text-muted)" }}>Chat with our team to arrange a donation</div>
                    </div>
                  </div>
                  <span style={{ color: "#25D366", fontWeight: 600, fontSize: "0.9rem" }}>Message Us -&gt;</span>
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <style jsx>{`
        .payment-method:hover {
          border-color: var(--color-gold) !important;
          background: rgba(201, 168, 76, 0.02) !important;
          transform: translateY(-2px);
          box-shadow: var(--shadow-sm);
        }
      `}</style>
    </div>
  );
}
