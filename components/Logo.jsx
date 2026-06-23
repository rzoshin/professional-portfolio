export default function Logo({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Raiyan Zannat logo"
    >
      <defs>
        <linearGradient id="logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6366F1" />
          <stop offset="100%" stopColor="#8B5CF6" />
        </linearGradient>
      </defs>
      <text
        x="0"
        y="28"
        fontFamily="var(--font-mono), monospace"
        fontSize="18"
        fontWeight="700"
        fill="url(#logo-grad)"
      >
        &lt;
      </text>
      <text
        x="16"
        y="30"
        fontFamily="var(--font-display), sans-serif"
        fontSize="26"
        fontWeight="800"
        fill="url(#logo-grad)"
      >
        RZ
      </text>
      <text
        x="58"
        y="28"
        fontFamily="var(--font-mono), monospace"
        fontSize="18"
        fontWeight="700"
        fill="url(#logo-grad)"
      >
        /&gt;
      </text>
    </svg>
  );
}
