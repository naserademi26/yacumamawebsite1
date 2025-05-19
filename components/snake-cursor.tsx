"use client"

import { useEffect, useState } from "react"

export function SnakeCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [visible, setVisible] = useState(false)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    // Only show cursor after mouse moves
    const handleMouseEnter = () => setVisible(true)
    const handleMouseLeave = () => setVisible(false)

    // Update cursor position
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    // Check if hovering over clickable element
    const checkHovering = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const isClickable =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.getAttribute("role") === "button" ||
        target.tagName === "INPUT" ||
        target.tagName === "SELECT" ||
        target.hasAttribute("onclick")

      setIsHovering(isClickable)
    }

    document.addEventListener("mousemove", updatePosition)
    document.addEventListener("mousemove", checkHovering)
    document.addEventListener("mouseenter", handleMouseEnter)
    document.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      document.removeEventListener("mousemove", updatePosition)
      document.removeEventListener("mousemove", checkHovering)
      document.removeEventListener("mouseenter", handleMouseEnter)
      document.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  // Don't render on server
  if (typeof window === "undefined") return null

  return (
    <div
      className="fixed pointer-events-none z-50 transition-opacity duration-300"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        opacity: visible ? 1 : 0,
        transform: "translate(-50%, -50%)",
      }}
    >
      <div className="relative">
        <svg width="32" height="32" viewBox="0 0 32 32">
          {/* Vertical Snake Body */}
          <path
            d="M16,6 Q12,10 16,14 T16,22"
            stroke={isHovering ? "#fbbf24" : "#10b981"}
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
            className="animate-snake-body-vertical"
          />

          {/* Snake Head */}
          <circle
            cx="16"
            cy="6"
            r="3"
            fill={isHovering ? "#fbbf24" : "#10b981"}
            className="animate-snake-head-vertical"
          />

          {/* Snake Eye */}
          <circle cx="15" cy="5" r="1" fill="black" />

          {/* Snake Tongue */}
          <path
            d="M16,3 L15,1 M16,3 L17,1"
            stroke="#ef4444"
            strokeWidth="1"
            strokeLinecap="round"
            className="animate-snake-tongue-vertical"
          />
        </svg>
      </div>
    </div>
  )
}
