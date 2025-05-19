"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { AnimatedSnake } from "./animated-snake"
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
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <AnimatedSnake />
          </div>
          <span className="text-xl font-bold text-green-400">Yacumama</span>
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
