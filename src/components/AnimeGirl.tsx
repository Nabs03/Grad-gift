export default function AnimeGirl({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 300 530"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Anime girl in graduation cap and gown holding a decorated cake"
    >
      {/* GOWN */}
      <path d="M90 240 Q56 335 50 474 L250 474 Q244 335 210 240 Q180 226 150 226 Q120 226 90 240Z" fill="#1e0f3c"/>
      <path d="M89 240 Q76 315 71 415" fill="none" stroke="#5b3a9e" strokeWidth="3" opacity="0.35"/>
      <path d="M211 240 Q224 315 229 415" fill="none" stroke="#5b3a9e" strokeWidth="3" opacity="0.35"/>
      <path d="M130 230 L114 474" stroke="#ffd700" strokeWidth="2.5" opacity="0.65" strokeLinecap="round"/>
      <path d="M170 230 L186 474" stroke="#ffd700" strokeWidth="2.5" opacity="0.65" strokeLinecap="round"/>
      <path d="M127 232 Q150 254 173 232 L163 216 Q150 228 137 216Z" fill="white"/>
      {/* ARMS */}
      <path d="M92 262 Q55 298 40 378 Q47 392 64 384 Q78 320 106 280" fill="#1e0f3c"/>
      <ellipse cx="48" cy="384" rx="17" ry="12" fill="#fde8d8"/>
      <path d="M208 262 Q245 298 260 378 Q253 392 236 384 Q222 320 194 280" fill="#1e0f3c"/>
      <ellipse cx="252" cy="384" rx="17" ry="12" fill="#fde8d8"/>
      {/* CAKE */}
      <ellipse cx="150" cy="420" rx="72" ry="15" fill="#ede9f8" stroke="#c8b8e8" strokeWidth="1.5"/>
      <rect x="84" y="372" width="132" height="49" rx="10" fill="#ff8fc8"/>
      <path d="M84 372 Q94 358 104 372 Q114 358 124 372 Q134 358 144 372 Q154 358 164 372 Q174 358 184 372 Q194 358 204 372" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round"/>
      <circle cx="104" cy="390" r="5.5" fill="#e8005a"/>
      <circle cx="126" cy="396" r="4.5" fill="#ffd700"/>
      <circle cx="150" cy="387" r="5.5" fill="#c89ff5"/>
      <circle cx="174" cy="395" r="4.5" fill="#e8005a"/>
      <circle cx="196" cy="388" r="5.5" fill="#ffd700"/>
      <rect x="99" y="331" width="102" height="44" rx="10" fill="#c89ff5"/>
      <path d="M99 331 Q108 320 117 331 Q126 320 135 331 Q144 320 153 331 Q162 320 171 331 Q180 320 189 331" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
      <circle cx="115" cy="347" r="4.5" fill="#ff6b9d"/>
      <circle cx="136" cy="354" r="4" fill="#ffd700"/>
      <circle cx="157" cy="347" r="4.5" fill="#ff6b9d"/>
      <circle cx="178" cy="354" r="4" fill="#7ed6df"/>
      <rect x="115" y="294" width="70" height="40" rx="10" fill="#ffd700"/>
      <path d="M115 294 Q124 283 133 294 Q142 283 150 294 Q158 283 167 294 Q176 283 185 294" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
      <circle cx="131" cy="310" r="4" fill="#ff6b9d"/>
      <circle cx="150" cy="316" r="4" fill="#c89ff5"/>
      <circle cx="169" cy="310" r="4" fill="#ff6b9d"/>
      {/* CANDLES */}
      <rect x="132" y="273" width="7.5" height="23" rx="3.75" fill="#ff6b9d"/>
      <rect x="146" y="264" width="7.5" height="32" rx="3.75" fill="#c89ff5"/>
      <rect x="160" y="273" width="7.5" height="23" rx="3.75" fill="#54a0ff"/>
      <rect x="132" y="279" width="7.5" height="4" rx="2" fill="white" opacity="0.45"/>
      <rect x="146" y="272" width="7.5" height="4" rx="2" fill="white" opacity="0.45"/>
      <rect x="160" y="280" width="7.5" height="4" rx="2" fill="white" opacity="0.45"/>
      {/* FLAMES */}
      <ellipse cx="135.5" cy="270" rx="4.5" ry="6.5" fill="#ff9900" style={{animation:"flame 0.6s ease-in-out infinite"}}/>
      <ellipse cx="149.5" cy="260" rx="5" ry="7.5" fill="#ffcc00" style={{animation:"flame 0.6s 0.12s ease-in-out infinite"}}/>
      <ellipse cx="163.5" cy="270" rx="4.5" ry="6.5" fill="#ff9900" style={{animation:"flame 0.6s 0.24s ease-in-out infinite"}}/>
      <ellipse cx="135.5" cy="272" rx="2.5" ry="4" fill="#fff9c4"/>
      <ellipse cx="149.5" cy="263" rx="3" ry="4.5" fill="#fff9c4"/>
      <ellipse cx="163.5" cy="272" rx="2.5" ry="4" fill="#fff9c4"/>
      {/* HAIR */}
      <ellipse cx="150" cy="142" rx="72" ry="83" fill="#2a1545"/>
      <path d="M80 150 Q58 212 62 308 Q68 319 80 314 Q86 248 94 182" fill="#2a1545"/>
      <path d="M220 150 Q242 212 238 308 Q232 319 220 314 Q214 248 206 182" fill="#2a1545"/>
      {/* FACE */}
      <circle cx="150" cy="143" r="64" fill="#fde8d8"/>
      <path d="M118 116 Q130 110 143 114" stroke="#5a3020" strokeWidth="3.5" fill="none" strokeLinecap="round"/>
      <path d="M157 114 Q170 110 182 116" stroke="#5a3020" strokeWidth="3.5" fill="none" strokeLinecap="round"/>
      <ellipse cx="131" cy="139" rx="16" ry="17.5" fill="white"/>
      <ellipse cx="169" cy="139" rx="16" ry="17.5" fill="white"/>
      <ellipse cx="131" cy="140" rx="12" ry="13.5" fill="#5048b8"/>
      <ellipse cx="169" cy="140" rx="12" ry="13.5" fill="#5048b8"/>
      <ellipse cx="131" cy="142" rx="7.5" ry="9" fill="#1a0a3e"/>
      <ellipse cx="169" cy="142" rx="7.5" ry="9" fill="#1a0a3e"/>
      <circle cx="137" cy="133" r="5.5" fill="white"/>
      <circle cx="175" cy="133" r="5.5" fill="white"/>
      <circle cx="125" cy="146" r="3" fill="white" opacity="0.6"/>
      <circle cx="163" cy="146" r="3" fill="white" opacity="0.6"/>
      <path d="M115 130 Q120 123 128 128" stroke="#1a0a3e" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <path d="M153 127 Q160 121 166 126" stroke="#1a0a3e" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <path d="M139 125 Q144 118 149 122" stroke="#1a0a3e" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <ellipse cx="150" cy="160" rx="4" ry="3" fill="#e8a090" opacity="0.55"/>
      <ellipse cx="108" cy="163" rx="16" ry="9" fill="#ffb3cc" opacity="0.5"/>
      <ellipse cx="192" cy="163" rx="16" ry="9" fill="#ffb3cc" opacity="0.5"/>
      <path d="M129 176 Q150 197 171 176" stroke="#c47a5a" strokeWidth="3" fill="none" strokeLinecap="round"/>
      <path d="M135 178 Q150 191 165 178" fill="#ffb3aa" opacity="0.28"/>
      {/* CAP */}
      <rect x="88" y="79" width="124" height="18" rx="5" fill="#1e0f3c"/>
      <ellipse cx="150" cy="88" rx="62" ry="9" fill="#2a1545"/>
      <polygon points="88,79 150,50 212,79" fill="#1e0f3c"/>
      <circle cx="150" cy="53" r="8" fill="#ffd700"/>
      <path d="M198 75 Q214 98 220 132" stroke="#ffd700" strokeWidth="4" fill="none" strokeLinecap="round"/>
      <ellipse cx="220" cy="136" rx="7" ry="10" fill="#ffd700"/>
      <line x1="215" y1="146" x2="211" y2="164" stroke="#ffd700" strokeWidth="2.5"/>
      <line x1="220" y1="146" x2="220" y2="166" stroke="#ffd700" strokeWidth="2.5"/>
      <line x1="225" y1="146" x2="228" y2="164" stroke="#ffd700" strokeWidth="2.5"/>
      <path d="M112 82 Q126 65 140 78 Q150 62 160 76 Q174 63 188 80" fill="#2a1545"/>
      {/* LEGS */}
      <path d="M108 474 Q106 500 114 525 L186 525 Q194 500 192 474Z" fill="#1e0f3c"/>
      {/* SPARKLES */}
      <circle cx="36" cy="195" r="3" fill="#ffd700" opacity="0.8"/>
      <path d="M33 195 L39 195 M36 192 L36 198" stroke="#ffd700" strokeWidth="1.5"/>
      <circle cx="265" cy="162" r="2.5" fill="#c89ff5" opacity="0.75"/>
      <path d="M262 162 L268 162 M265 159 L265 165" stroke="#c89ff5" strokeWidth="1.5"/>
      <style>{`
        @keyframes flame {
          0%,100%{transform:scaleY(1) scaleX(1)}
          35%{transform:scaleY(1.2) scaleX(.85)}
          70%{transform:scaleY(.88) scaleX(1.15)}
        }
      `}</style>
    </svg>
  );
}
