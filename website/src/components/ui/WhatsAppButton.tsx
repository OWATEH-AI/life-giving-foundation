"use client";

import { motion } from "framer-motion";

// Proper WhatsApp SVG icon
const WhatsAppIcon = ({ size = 28 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17.472 14.382C17.181 14.242 15.712 13.5 15.321 13.362C14.931 13.222 14.641 13.152 14.35 13.582C14.06 14.012 13.188 14.982 12.918 15.282C12.648 15.582 12.378 15.622 11.938 15.392C11.497 15.162 10.437 14.812 9.356 13.822C8.495 13.052 7.915 12.022 7.665 11.522C7.415 11.022 7.585 10.762 7.785 10.482C8.015 10.172 8.255 9.782 8.375 9.432C8.495 9.082 8.455 8.792 8.375 8.502C8.295 8.212 7.665 6.622 7.455 6.092C7.244 5.561 7.044 5.701 6.834 5.561C6.624 5.421 6.334 5.351 6.044 5.351C5.753 5.351 5.403 5.461 5.093 5.681C4.783 5.901 3.932 6.662 3.932 8.012C3.932 9.362 4.863 10.612 4.993 10.802C5.123 10.992 6.344 12.752 8.225 14.142C9.975 15.422 11.466 16.022 12.367 16.382C12.837 16.572 13.237 16.682 13.597 16.652C14.077 16.612 15.058 16.152 15.558 15.412C16.058 14.672 16.008 14.062 15.928 13.852C15.848 13.642 17.762 14.522 17.472 14.382Z"
    />
    <path
      d="M12.042 2.001C6.581 2.001 2.163 6.42 2.163 11.882C2.163 13.662 2.623 15.352 3.463 16.812L2 22L7.223 20.572C8.653 21.352 10.313 21.782 12.042 21.782C17.503 21.782 21.922 17.363 21.922 11.902C21.922 9.252 20.873 6.801 19.012 4.941C17.152 3.081 14.702 2.031 12.042 2.001V2.001ZM12.042 20.002C10.482 20.002 8.991 19.592 7.681 18.872L7.371 18.692L3.993 19.632L4.943 16.322L4.743 15.992C3.963 14.692 3.533 13.202 3.533 11.652C3.533 6.982 7.361 3.151 12.032 3.151C14.332 3.151 16.442 4.061 18.022 5.641C19.603 7.221 20.513 9.332 20.513 11.632C20.533 16.302 16.704 20.002 12.042 20.002Z"
    />
  </svg>
);

export function WhatsAppButton() {
  const phoneNumber = "263715861986";
  const message = encodeURIComponent(
    "Hello Life Giving Foundation. I would like to learn more about your programmes and how I can support."
  );
  const chatUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div
      style={{
        position: "fixed",
        bottom: "max(1rem, env(safe-area-inset-bottom))",
        right: "max(1rem, env(safe-area-inset-right))",
        zIndex: 900,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        gap: "0.5rem",
      }}
    >
      <div
        style={{
          background: "white",
          color: "var(--color-text)",
          borderRadius: "var(--radius-full)",
          padding: "0.55rem 0.85rem",
          boxShadow: "var(--shadow-md)",
          fontSize: "0.8rem",
          fontFamily: "var(--font-accent)",
          fontWeight: 600,
          maxWidth: "220px",
        }}
        className="whatsapp-helper"
      >
        Chat with us on WhatsApp
      </div>

      <motion.a
        href={chatUrl}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        style={{
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          background: "#25D366",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          boxShadow: "0 4px 20px rgba(37, 211, 102, 0.4)",
          animation: "pulse-glow 2s ease-in-out infinite",
          textDecoration: "none",
        }}
        aria-label="Chat on WhatsApp"
      >
        <WhatsAppIcon />
      </motion.a>

      <style jsx>{`
        @media (max-width: 768px) {
          .whatsapp-helper {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
