"use client";

interface SectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
}

export function SectionHeader({
  label,
  title,
  subtitle,
  align = "center",
  light = false,
}: SectionHeaderProps) {
  return (
    <div
      style={{
        textAlign: align,
        marginBottom: "3.5rem",
        maxWidth: align === "center" ? "700px" : "none",
        margin: align === "center" ? "0 auto 3.5rem" : "0 0 3.5rem",
      }}
    >
      {label && (
        <span
          style={{
            fontFamily: "var(--font-accent)",
            fontSize: "0.8rem",
            fontWeight: 600,
            color: light ? "var(--color-gold-light)" : "var(--color-purple)",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            display: "block",
            marginBottom: "0.75rem",
          }}
        >
          {label}
        </span>
      )}
      <div
        style={{
          width: "50px",
          height: "3px",
          background: "linear-gradient(90deg, var(--color-purple), var(--color-gold))",
          borderRadius: "9999px",
          marginBottom: "1.25rem",
          margin: align === "center" ? "0 auto 1.25rem" : "0 0 1.25rem",
        }}
      />
      <h2
        style={{
          fontFamily: "var(--font-heading)",
          fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
          fontWeight: 700,
          color: light ? "white" : "var(--color-text)",
          lineHeight: 1.2,
          marginBottom: subtitle ? "1rem" : "0",
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.7,
            color: light ? "rgba(255, 255, 255, 0.7)" : "var(--color-text-muted)",
            maxWidth: "600px",
            margin: align === "center" ? "0 auto" : "0",
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
