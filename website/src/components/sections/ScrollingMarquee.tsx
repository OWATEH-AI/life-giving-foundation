"use client";

export function ScrollingMarquee() {
  const items = [
    "Empowering Communities",
    "Transforming Lives",
    "Let There Be Light",
    "Faith-Inspired Humanitarian Development",
    "Education & Scholarships",
    "Healthcare Outreach",
    "Founded by Sophia Sakupwanya",
    "Bring Hope & Support Today",
  ];

  // Repeat items to ensure continuous scrolling
  const duplicatedItems = [...items, ...items, ...items];

  return (
    <div
      style={{
        background: "var(--color-dark)",
        borderTop: "1px solid rgba(201, 168, 76, 0.25)",
        borderBottom: "1px solid rgba(201, 168, 76, 0.25)",
        padding: "0.9rem 0",
        overflow: "hidden",
        position: "relative",
        display: "flex",
        alignItems: "center",
        width: "100%",
      }}
    >
      <div className="marquee-content">
        {duplicatedItems.map((item, index) => (
          <span key={index} className="marquee-item">
            {item}
            <span style={{ color: "var(--color-gold)", margin: "0 1.75rem", flexShrink: 0, fontSize: "0.6rem" }}>●</span>
          </span>
        ))}
      </div>

      <style jsx>{`
        .marquee-content {
          display: flex;
          white-space: nowrap;
          animation: marquee 30s linear infinite;
        }
        
        .marquee-item {
          display: inline-flex;
          align-items: center;
          font-family: var(--font-accent);
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: white;
          flex-shrink: 0;
        }

        @keyframes marquee {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-33.333%, 0, 0);
          }
        }

        .marquee-content:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
