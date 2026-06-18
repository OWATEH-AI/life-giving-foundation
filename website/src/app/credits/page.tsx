import Link from "next/link";
import { ArrowLeft, Code2, Globe, Sparkles } from "lucide-react";

export default function CreditsPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        paddingTop: "100px",
        background:
          "linear-gradient(180deg, var(--color-dark) 0%, var(--color-primary-dark) 100%)",
      }}
    >
      <section style={{ padding: "3rem 0 5rem" }}>
        <div
          style={{
            maxWidth: "980px",
            margin: "0 auto",
            padding: "0 clamp(1rem, 4vw, 2rem)",
          }}
        >
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
              padding: "0.7rem 1rem",
              marginBottom: "1.5rem",
              fontSize: "0.9rem",
            }}
          >
            <ArrowLeft size={16} />
            Back to Website
          </Link>

          <div
            style={{
              background: "rgba(8, 16, 40, 0.78)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              borderRadius: "var(--radius-xl)",
              boxShadow: "var(--shadow-xl)",
              padding: "clamp(1.5rem, 4vw, 3rem)",
            }}
          >
            <div
              style={{
                textAlign: "center",
                marginBottom: "2rem",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-accent)",
                  fontSize: "0.78rem",
                  fontWeight: 600,
                  color: "var(--color-gold)",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  display: "block",
                  marginBottom: "0.9rem",
                }}
              >
                Website Credits
              </span>
              <h1
                style={{
                  fontFamily: "var(--font-accent)",
                  fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
                  color: "white",
                  marginBottom: "0.9rem",
                }}
              >
                Website Powered By{" "}
                <span style={{ color: "var(--color-gold)" }}>
                  ARTGALZIM-OWA TECHNOLOGIES
                </span>
              </h1>
              <p
                style={{
                  maxWidth: "680px",
                  margin: "0 auto",
                  color: "rgba(255, 255, 255, 0.72)",
                  lineHeight: 1.7,
                  fontSize: "1rem",
                }}
              >
                This website for SophiaSakupwanya.org was created to present the
                foundation&apos;s vision, programmes, contact channels, and giving
                opportunities with clarity, dignity, and strong visual identity.
              </p>
            </div>

            <div
              style={{
                height: "1px",
                background: "rgba(255, 255, 255, 0.1)",
                marginBottom: "1.5rem",
              }}
            />

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: "1.25rem",
              }}
            >
              <div
                style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  borderRadius: "var(--radius-lg)",
                  padding: "1.5rem",
                  borderLeft: "3px solid var(--color-gold)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.65rem",
                    marginBottom: "0.85rem",
                    color: "var(--color-gold)",
                  }}
                >
                  <Code2 size={18} />
                  <span
                    style={{
                      fontFamily: "var(--font-accent)",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                    }}
                  >
                    Developer / Maker
                  </span>
                </div>
                <h2
                  style={{
                    color: "white",
                    fontSize: "1.35rem",
                    marginBottom: "0.6rem",
                  }}
                >
                  Samuel T Samoyo
                </h2>
                <p
                  style={{
                    color: "rgba(255, 255, 255, 0.72)",
                    lineHeight: 1.7,
                    fontSize: "0.95rem",
                  }}
                >
                  Creative developer and maker behind the design and development of
                  this website experience.
                </p>
              </div>

              <div
                style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  borderRadius: "var(--radius-lg)",
                  padding: "1.5rem",
                  borderLeft: "3px solid var(--color-gold)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.65rem",
                    marginBottom: "0.85rem",
                    color: "var(--color-gold)",
                  }}
                >
                  <Globe size={18} />
                  <span
                    style={{
                      fontFamily: "var(--font-accent)",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                    }}
                  >
                    Technology Brand
                  </span>
                </div>
                <h2
                  style={{
                    color: "white",
                    fontSize: "1.35rem",
                    marginBottom: "0.6rem",
                  }}
                >
                  ARTGALZIM-OWA Technologies
                </h2>
                <p
                  style={{
                    color: "rgba(255, 255, 255, 0.72)",
                    lineHeight: 1.7,
                    fontSize: "0.95rem",
                  }}
                >
                  Website power, digital presentation, and technical execution
                  supporting the public presence of the foundation.
                </p>
              </div>

              <div
                style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  borderRadius: "var(--radius-lg)",
                  padding: "1.5rem",
                  borderLeft: "3px solid var(--color-gold)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.65rem",
                    marginBottom: "0.85rem",
                    color: "var(--color-gold)",
                  }}
                >
                  <Sparkles size={18} />
                  <span
                    style={{
                      fontFamily: "var(--font-accent)",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                    }}
                  >
                    Website Identity
                  </span>
                </div>
                <h2
                  style={{
                    color: "white",
                    fontSize: "1.35rem",
                    marginBottom: "0.6rem",
                  }}
                >
                  SophiaSakupwanya.org
                </h2>
                <p
                  style={{
                    color: "rgba(255, 255, 255, 0.72)",
                    lineHeight: 1.7,
                    fontSize: "0.95rem",
                  }}
                >
                  Built to communicate the foundation&apos;s mission, inspire support,
                  and create a trustworthy home for its vision in Zimbabwe and beyond.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
