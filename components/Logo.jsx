export default function Logo({ className = "" }) {
  return (
    <svg
      className={`site-logo ${className}`.trim()}
      viewBox="0 0 120 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Raiyan Zannat logo"
    >
      <text
        className="logo-bracket"
        x="0"
        y="28"
        fontFamily="var(--font-mono), monospace"
        fontSize="18"
        fontWeight="700"
      >
        &lt;
      </text>
      <text
        className="logo-letters"
        x="16"
        y="30"
        fontFamily="var(--font-display), sans-serif"
        fontSize="26"
        fontWeight="800"
      >
        RZ
      </text>
      <text
        className="logo-bracket"
        x="58"
        y="28"
        fontFamily="var(--font-mono), monospace"
        fontSize="18"
        fontWeight="700"
      >
        /&gt;
      </text>
    </svg>
  );
}
