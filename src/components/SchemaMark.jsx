export default function SchemaMark() {
  return (
    <svg
      viewBox="0 0 320 260"
      fill="none"
      className="w-full max-w-[320px] text-line"
      aria-hidden="true"
    >
      <g stroke="currentColor" strokeWidth="1">
        <path d="M96 60 L96 110" />
        <path d="M96 150 L96 190" strokeDasharray="3 4" />
        <path d="M96 110 L210 150" />
      </g>

      <g transform="translate(20,16)">
        <rect width="150" height="60" rx="2" fill="#12181F" stroke="#22303C" />
        <rect width="150" height="20" rx="2" fill="#1A222B" />
        <text x="10" y="14" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="#5FB3A3">
          users
        </text>
        <text x="10" y="36" fontFamily="JetBrains Mono, monospace" fontSize="8" fill="#8B98A5">
          id · uuid (pk)
        </text>
        <text x="10" y="50" fontFamily="JetBrains Mono, monospace" fontSize="8" fill="#8B98A5">
          role · enum
        </text>
      </g>

      <g transform="translate(20,150)">
        <rect width="150" height="60" rx="2" fill="#12181F" stroke="#22303C" />
        <rect width="150" height="20" rx="2" fill="#1A222B" />
        <text x="10" y="14" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="#5FB3A3">
          dealers
        </text>
        <text x="10" y="36" fontFamily="JetBrains Mono, monospace" fontSize="8" fill="#8B98A5">
          id · uuid (pk)
        </text>
        <text x="10" y="50" fontFamily="JetBrains Mono, monospace" fontSize="8" fill="#8B98A5">
          region · text
        </text>
      </g>

      <g transform="translate(150,110)">
        <rect width="150" height="60" rx="2" fill="#12181F" stroke="#22303C" />
        <rect width="150" height="20" rx="2" fill="#1A222B" />
        <text x="10" y="14" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="#E8A33D">
          orders
        </text>
        <text x="10" y="36" fontFamily="JetBrains Mono, monospace" fontSize="8" fill="#8B98A5">
          user_id · fk
        </text>
        <text x="10" y="50" fontFamily="JetBrains Mono, monospace" fontSize="8" fill="#8B98A5">
          dealer_id · fk
        </text>
      </g>
    </svg>
  );
}
