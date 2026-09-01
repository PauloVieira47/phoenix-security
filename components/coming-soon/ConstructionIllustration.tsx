export function ConstructionIllustration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 320 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <line
        x1="20"
        y1="210"
        x2="300"
        y2="210"
        stroke="rgba(255,255,255,0.12)"
        strokeWidth="1"
      />

      <rect
        x="130"
        y="90"
        width="90"
        height="120"
        stroke="rgba(255,255,255,0.15)"
        strokeWidth="1.5"
        fill="rgba(255,255,255,0.02)"
      />
      <line x1="130" y1="120" x2="220" y2="120" stroke="rgba(255,255,255,0.08)" />
      <line x1="130" y1="150" x2="220" y2="150" stroke="rgba(255,255,255,0.08)" />
      <line x1="130" y1="180" x2="220" y2="180" stroke="rgba(255,255,255,0.08)" />
      <line x1="160" y1="90" x2="160" y2="210" stroke="rgba(255,255,255,0.08)" />
      <line x1="190" y1="90" x2="190" y2="210" stroke="rgba(255,255,255,0.08)" />

      <g className="construction-scaffold">
        <line x1="110" y1="210" x2="110" y2="130" stroke="rgba(240,90,36,0.4)" strokeWidth="1.5" />
        <line x1="125" y1="210" x2="125" y2="140" stroke="rgba(240,90,36,0.4)" strokeWidth="1.5" />
        <line x1="110" y1="160" x2="125" y2="160" stroke="rgba(240,90,36,0.3)" />
        <line x1="110" y1="190" x2="125" y2="190" stroke="rgba(240,90,36,0.3)" />
      </g>

      <g className="construction-crane">
        <line x1="50" y1="210" x2="50" y2="60" stroke="rgba(240,90,36,0.6)" strokeWidth="2" />
        <line x1="50" y1="60" x2="160" y2="60" stroke="rgba(240,90,36,0.6)" strokeWidth="2" />
        <line x1="50" y1="80" x2="140" y2="60" stroke="rgba(240,90,36,0.3)" strokeWidth="1" />
        <g className="construction-hook">
          <line x1="155" y1="60" x2="155" y2="100" stroke="rgba(240,90,36,0.5)" strokeWidth="1.5" />
          <rect
            x="148"
            y="100"
            width="14"
            height="10"
            fill="rgba(240,90,36,0.25)"
            stroke="rgba(240,90,36,0.5)"
            strokeWidth="1"
          />
        </g>
      </g>

      <g className="construction-cone">
        <path
          d="M240 210 L248 190 L256 210 Z"
          fill="rgba(240,90,36,0.3)"
          stroke="rgba(240,90,36,0.6)"
          strokeWidth="1"
        />
        <rect x="244" y="186" width="8" height="4" fill="rgba(240,90,36,0.5)" rx="0.5" />
      </g>

      <path
        d="M270 210 L276 194 L282 210 Z"
        fill="rgba(240,90,36,0.2)"
        stroke="rgba(240,90,36,0.4)"
        strokeWidth="1"
      />

      <rect x="230" y="198" width="50" height="12" fill="rgba(240,90,36,0.1)" stroke="rgba(240,90,36,0.3)" strokeWidth="1" rx="1" />
      <line x1="240" y1="198" x2="240" y2="210" stroke="rgba(240,90,36,0.4)" />
      <line x1="255" y1="198" x2="255" y2="210" stroke="rgba(240,90,36,0.4)" />
      <line x1="270" y1="198" x2="270" y2="210" stroke="rgba(240,90,36,0.4)" />

      <g className="construction-gear" style={{ transformOrigin: "80px 175px" }}>
        <circle cx="80" cy="175" r="14" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" fill="rgba(255,255,255,0.03)" />
        <circle cx="80" cy="175" r="5" fill="rgba(240,90,36,0.3)" />
        <line x1="80" y1="161" x2="80" y2="189" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
        <line x1="66" y1="175" x2="94" y2="175" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
        <line x1="70" y1="165" x2="90" y2="185" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
        <line x1="90" y1="165" x2="70" y2="185" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
      </g>

      <rect x="135" y="95" width="40" height="4" fill="rgba(240,90,36,0.15)" rx="2" />
      <g className="construction-progress-wrap" style={{ transformOrigin: "135px 97px" }}>
        <rect
          x="135"
          y="95"
          width="36"
          height="4"
          fill="rgba(240,90,36,0.55)"
          rx="2"
        />
      </g>

      <g className="construction-phoenix-float">
        <path
          d="M175 75 C175 75 170 80 170 85 C170 90 172 93 175 95 C178 93 180 90 180 85 C180 80 175 75 175 75Z"
          fill="url(#construction-phoenix)"
          opacity="0.9"
        />
      </g>

      <defs>
        <linearGradient id="construction-phoenix" x1="170" y1="75" x2="180" y2="95">
          <stop stopColor="#F05A24" />
          <stop offset="1" stopColor="#FF7A29" />
        </linearGradient>
      </defs>
    </svg>
  );
}
