"use client"

import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

interface TeamSnakeAvatarProps {
  role: "founder" | "marketing" | "developer" | "financial"
  color: string
  className?: string
}

export function TeamSnakeAvatar({ role, color, className }: TeamSnakeAvatarProps) {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    // Reset animations when component mounts
    const svg = svgRef.current
    if (svg) {
      svg.querySelectorAll("path, circle").forEach((element) => {
        element.style.animation = "none"
        // Trigger reflow
        void element.offsetWidth
        element.style.animation = ""
      })
    }
  }, [])

  return (
    <div className={cn("w-full h-full", className)}>
      <svg
        ref={svgRef}
        viewBox="0 0 200 200"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        style={{ backgroundColor: "#1a2235" }}
      >
        {/* Background Circle */}
        <circle cx="100" cy="100" r="90" fill="#1a2235" />

        {/* Different snake designs based on role */}
        {role === "founder" && (
          <>
            {/* Founder Snake - Regal with crown */}
            <defs>
              <linearGradient id="founderGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor={color} />
                <stop offset="100%" stopColor={`${color}99`} />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Snake Body */}
            <path
              d="M 30,120 Q 50,80 80,100 T 130,90 T 170,110"
              fill="none"
              stroke="url(#founderGradient)"
              strokeWidth="18"
              strokeLinecap="round"
              className="animate-founder-snake"
              filter="url(#glow)"
            />

            {/* Snake Head */}
            <circle cx="170" cy="110" r="15" fill={color} />

            {/* Snake Eyes */}
            <circle cx="175" cy="105" r="3" fill="white" />
            <circle cx="175" cy="115" r="3" fill="white" />
            <circle cx="176" cy="105" r="1.5" fill="black" />
            <circle cx="176" cy="115" r="1.5" fill="black" />

            {/* Snake Tongue */}
            <path
              d="M 185,110 L 195,105 M 185,110 L 195,115"
              fill="none"
              stroke="#ef4444"
              strokeWidth="2"
              strokeLinecap="round"
              className="animate-tongue"
            />

            {/* Crown */}
            <path
              d="M 170,95 L 160,85 L 170,75 L 180,85 Z"
              fill="#fbbf24"
              stroke="#fbbf24"
              strokeWidth="1"
              className="animate-crown"
              filter="url(#glow)"
            />

            {/* Small gems on crown */}
            <circle cx="170" cy="80" r="2" fill="#f43f5e" className="animate-gem" />
            <circle cx="165" cy="85" r="1.5" fill="#3b82f6" className="animate-gem" />
            <circle cx="175" cy="85" r="1.5" fill="#3b82f6" className="animate-gem" />

            {/* Subtle pattern on snake body */}
            <path
              d="M 50,100 L 55,95 M 70,95 L 75,90 M 90,95 L 95,90 M 110,90 L 115,85 M 130,95 L 135,90 M 150,105 L 155,100"
              stroke={`${color}66`}
              strokeWidth="2"
              strokeLinecap="round"
            />
          </>
        )}

        {role === "marketing" && (
          <>
            {/* Marketing Snake - Dynamic with megaphone */}
            <defs>
              <linearGradient id="marketingGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor={color} />
                <stop offset="100%" stopColor={`${color}99`} />
              </linearGradient>
            </defs>

            {/* Snake Body - more wavy for dynamic feel */}
            <path
              d="M 30,100 Q 50,70 70,100 T 110,80 T 150,110"
              fill="none"
              stroke="url(#marketingGradient)"
              strokeWidth="16"
              strokeLinecap="round"
              className="animate-marketing-snake"
            />

            {/* Snake Head */}
            <circle cx="150" cy="110" r="14" fill={color} />

            {/* Snake Eyes - excited looking */}
            <circle cx="155" cy="105" r="3" fill="white" />
            <circle cx="155" cy="115" r="3" fill="white" />
            <circle cx="156" cy="104" r="1.5" fill="black" />
            <circle cx="156" cy="114" r="1.5" fill="black" />

            {/* Snake Tongue */}
            <path
              d="M 164,110 L 172,105 M 164,110 L 172,115"
              fill="none"
              stroke="#ef4444"
              strokeWidth="2"
              strokeLinecap="round"
              className="animate-tongue-rapid"
            />

            {/* Megaphone */}
            <path d="M 170,110 L 190,100 L 190,120 Z" fill="#f59e0b" stroke="#f59e0b" strokeWidth="1" />
            <path d="M 170,110 L 175,110" stroke="#f59e0b" strokeWidth="8" strokeLinecap="round" />

            {/* Sound waves */}
            <path
              d="M 195,110 Q 200,105 195,100 M 195,110 Q 200,115 195,120 M 200,110 Q 205,100 200,90 M 200,110 Q 205,120 200,130"
              stroke="#f59e0b"
              strokeWidth="2"
              strokeLinecap="round"
              className="animate-sound-waves"
              strokeDasharray="3,3"
            />

            {/* Social media icons around */}
            <circle cx="50" cy="70" r="5" fill="#1DA1F2" className="animate-float" />
            <text x="50" y="73" fontSize="8" fill="white" textAnchor="middle">
              X
            </text>

            <circle cx="90" cy="60" r="5" fill="#FF0000" className="animate-float-delay" />
            <text x="90" y="63" fontSize="6" fill="white" textAnchor="middle">
              YT
            </text>

            <circle cx="130" cy="70" r="5" fill="#0088cc" className="animate-float-more-delay" />
            <text x="130" y="73" fontSize="6" fill="white" textAnchor="middle">
              TG
            </text>
          </>
        )}

        {role === "developer" && (
          <>
            {/* Developer Snake - Technical with code symbols */}
            <defs>
              <linearGradient id="devGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor={color} />
                <stop offset="100%" stopColor={`${color}99`} />
              </linearGradient>
            </defs>

            {/* Snake Body - more angular for tech feel */}
            <path
              d="M 30,110 L 50,90 L 70,110 L 90,90 L 110,110 L 130,90 L 150,110"
              fill="none"
              stroke="url(#devGradient)"
              strokeWidth="14"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="animate-dev-snake"
            />

            {/* Snake Head */}
            <circle cx="150" cy="110" r="14" fill={color} />

            {/* Snake Eyes - focused looking with glasses */}
            <circle cx="155" cy="105" r="3" fill="white" />
            <circle cx="155" cy="115" r="3" fill="white" />
            <circle cx="156" cy="105" r="1.5" fill="black" />
            <circle cx="156" cy="115" r="1.5" fill="black" />

            {/* Developer Glasses */}
            <path
              d="M 145,105 L 165,105 M 145,105 Q 140,105 140,110 Q 140,115 145,115 M 165,105 Q 170,105 170,110 Q 170,115 165,115"
              fill="none"
              stroke="#94a3b8"
              strokeWidth="1.5"
              strokeLinecap="round"
            />

            {/* Snake Tongue */}
            <path
              d="M 164,110 L 172,108 M 164,110 L 172,112"
              fill="none"
              stroke="#ef4444"
              strokeWidth="2"
              strokeLinecap="round"
              className="animate-tongue-slow"
            />

            {/* Code Symbols */}
            <text x="50" y="80" fontSize="12" fill="#a3e635" className="animate-code">
              {"<>"}
            </text>
            <text x="90" y="80" fontSize="12" fill="#38bdf8" className="animate-code-delay">
              {"{}"}
            </text>
            <text x="130" y="80" fontSize="12" fill="#fb923c" className="animate-code-more-delay">
              {"()"}
            </text>

            {/* Binary in background */}
            <text x="40" y="130" fontSize="8" fill="#64748b" opacity="0.5">
              10110
            </text>
            <text x="80" y="140" fontSize="8" fill="#64748b" opacity="0.5">
              01001
            </text>
            <text x="120" y="130" fontSize="8" fill="#64748b" opacity="0.5">
              11010
            </text>
          </>
        )}

        {role === "financial" && (
          <>
            {/* Financial Snake - With charts and money symbols */}
            <defs>
              <linearGradient id="financeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor={color} />
                <stop offset="100%" stopColor={`${color}99`} />
              </linearGradient>
            </defs>

            {/* Snake Body - shaped like a chart line */}
            <path
              d="M 30,120 L 50,100 L 70,110 L 90,80 L 110,90 L 130,70 L 150,110"
              fill="none"
              stroke="url(#financeGradient)"
              strokeWidth="16"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="animate-finance-snake"
            />

            {/* Snake Head */}
            <circle cx="150" cy="110" r="14" fill={color} />

            {/* Snake Eyes - calculating look */}
            <circle cx="155" cy="105" r="3" fill="white" />
            <circle cx="155" cy="115" r="3" fill="white" />
            <circle cx="156" cy="105" r="1.5" fill="black" />
            <circle cx="156" cy="115" r="1.5" fill="black" />

            {/* Snake Tongue */}
            <path
              d="M 164,110 L 172,108 M 164,110 L 172,112"
              fill="none"
              stroke="#ef4444"
              strokeWidth="2"
              strokeLinecap="round"
              className="animate-tongue"
            />

            {/* Financial Glasses/Monocle */}
            <circle cx="155" cy="105" r="6" fill="none" stroke="#94a3b8" strokeWidth="1" />
            <path d="M 155,111 L 155,115" stroke="#94a3b8" strokeWidth="1" />

            {/* Money Symbols */}
            <text x="50" y="90" fontSize="14" fill="#22c55e" className="animate-money">
              $
            </text>
            <text x="90" y="70" fontSize="14" fill="#eab308" className="animate-money-delay">
              ₿
            </text>
            <text x="130" y="60" fontSize="14" fill="#22c55e" className="animate-money-more-delay">
              $
            </text>

            {/* Chart Lines */}
            <path d="M 40,140 L 160,140 M 40,140 L 40,60" stroke="#64748b" strokeWidth="1" strokeDasharray="2,2" />
            <path
              d="M 40,120 L 60,110 L 80,125 L 100,95 L 120,105 L 140,85"
              stroke="#f43f5e"
              strokeWidth="1.5"
              fill="none"
              strokeDasharray="0"
              className="animate-chart"
            />
          </>
        )}
      </svg>
    </div>
  )
}
