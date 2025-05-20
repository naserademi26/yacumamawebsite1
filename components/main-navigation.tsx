"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { MobileMenu } from "./mobile-menu"

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Tokenomics", href: "#tokenomics" },
  { name: "Roadmap", href: "#roadmap" },
  { name: "Team", href: "#team" },
  { name: "Community", href: "#community" },
  { name: "FAQ", href: "#faq" },
]

export function MainNavigation() {
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll event to change header style
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scrolled])

  // Smooth scroll to section
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-30 transition-all duration-300",
        scrolled ? "bg-[#111827]/90 backdrop-blur-sm shadow-md py-3" : "bg-transparent py-6",
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 relative">
          <div className="relative">
            {/* Logo text */}
            <div className="logo-container relative">
              <span className="text-xl font-bold text-green-400 tracking-wider relative z-10">YACUMAMA</span>

              {/* Cobra walking on top of the logo */}
              <div className="absolute top-0 left-0 w-full h-full overflow-visible pointer-events-none">
                <div className="cobra-walker absolute top-0 left-0">
                  <svg width="60" height="30" viewBox="0 0 60 30" className="cobra-svg">
                    {/* Shadow under cobra to enhance "on top" effect */}
                    <ellipse
                      cx="30"
                      cy="25"
                      rx="25"
                      ry="3"
                      fill="rgba(0,0,0,0.3)"
                      filter="blur(2px)"
                      className="cobra-shadow"
                    />

                    {/* Cobra body */}
                    <path
                      d="M45,15 C40,10 35,13 30,15 S25,17 20,15 S15,13 10,15"
                      stroke="#10b981"
                      strokeWidth="4"
                      fill="none"
                      strokeLinecap="round"
                      className="cobra-body"
                    />

                    {/* Cobra head */}
                    <circle cx="45" cy="15" r="4" fill="#10b981" className="cobra-head" />

                    {/* Cobra eyes */}
                    <circle cx="46" cy="14" r="1" fill="black" />
                    <circle cx="46" cy="16" r="1" fill="black" />

                    {/* Cobra tongue */}
                    <path
                      d="M49,15 L51,14 M49,15 L51,16"
                      stroke="#ef4444"
                      strokeWidth="1"
                      strokeLinecap="round"
                      className="cobra-tongue"
                    />

                    {/* Crown on cobra */}
                    <path
                      d="M45,11 L43,9 L45,8 L47,9 L45,11"
                      fill="gold"
                      filter="drop-shadow(0 0 2px rgba(255,215,0,0.5))"
                      className="cobra-crown"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Navigation - hidden on mobile */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className="px-4 py-2 text-gray-300 hover:text-green-400 transition-colors"
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* Mobile Menu */}
        <MobileMenu />
      </div>
    </header>
  )
}
