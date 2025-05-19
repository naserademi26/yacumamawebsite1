"use client"

import { useEffect, useRef } from "react"
import { Crown } from "lucide-react"

export function AnimatedSnake() {
  const snakeRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    // This ensures the animation restarts when the component mounts
    const snake = snakeRef.current
    if (snake) {
      snake.querySelectorAll("path").forEach((path) => {
        path.style.animation = "none"
        // Trigger reflow
        void path.offsetWidth
        path.style.animation = ""
      })
    }
  }, [])

  return (
    <div className="relative w-full h-full">
      <svg ref={snakeRef} viewBox="0 0 200 100" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        {/* Snake Body */}
        <path
          d="M 10,50 Q 30,30 50,50 T 90,50 T 130,50 T 170,50"
          fill="none"
          stroke="#10b981"
          strokeWidth="12"
          strokeLinecap="round"
          className="animate-slither"
        />

        {/* Snake Tongue */}
        <path
          d="M 170,50 L 185,45 M 170,50 L 185,55"
          fill="none"
          stroke="#ef4444"
          strokeWidth="2"
          strokeLinecap="round"
          className="animate-tongue"
        />

        {/* Snake Head */}
        <circle cx="170" cy="50" r="10" fill="#10b981" className="animate-head" />

        {/* Snake Eyes */}
        <circle cx="173" cy="47" r="2" fill="black" />
        <circle cx="173" cy="53" r="2" fill="black" />

        {/* Crown on Snake */}
        <g className="animate-crown" transform="translate(165, 35) scale(0.15)">
          <path d="M 50,50 L 20,100 L 80,100 Z" fill="#fbbf24" stroke="#fbbf24" strokeWidth="5" />
          <path d="M 80,100 L 110,50 L 140,100 Z" fill="#fbbf24" stroke="#fbbf24" strokeWidth="5" />
          <path d="M 20,100 L 140,100 L 130,120 L 30,120 Z" fill="#fbbf24" stroke="#fbbf24" strokeWidth="5" />
          <circle cx="50" cy="60" r="5" fill="#f59e0b" />
          <circle cx="110" cy="60" r="5" fill="#f59e0b" />
          <circle cx="80" cy="60" r="5" fill="#f59e0b" />
        </g>
      </svg>

      {/* Small crown icon in the corner */}
      <div className="absolute top-0 right-0 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
        <Crown className="w-4 h-4 text-green-800" />
      </div>
    </div>
  )
}
