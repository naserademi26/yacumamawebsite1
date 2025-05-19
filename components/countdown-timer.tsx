"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

// Set launch date to 30 days from now for demo purposes
const LAUNCH_DATE = new Date()
LAUNCH_DATE.setDate(LAUNCH_DATE.getDate() + 30)

type TimeLeft = {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [sandLevel, setSandLevel] = useState(100) // 100% full at start
  const [snakeMood, setSnakeMood] = useState<"excited" | "nervous" | "panicked">("excited")
  const [showThought, setShowThought] = useState(false)
  const [thoughtIndex, setThoughtIndex] = useState(0)

  // Snake thoughts based on time remaining
  const snakeThoughts = [
    "Can't wait to launch! 🚀",
    "Almost time to slither to the moon! 🌙",
    "Tick tock... getting excited! ⏰",
    "So many wallets to visit soon! 👛",
    "Time is running out... just like this sand! ⌛",
    "Launch day is going to be HISSS-terical! 🐍",
    "I'm going to be the biggest snake in crypto! 💰",
    "Solana, here I come! ⚡",
  ]

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +LAUNCH_DATE - +new Date()

      // Calculate total seconds until launch
      const totalSeconds = Math.floor(difference / 1000)

      // Calculate total seconds in 30 days
      const totalSecondsIn30Days = 30 * 24 * 60 * 60

      // Calculate sand level percentage (100% at start, decreasing to 0%)
      const newSandLevel = Math.max(0, Math.min(100, (totalSeconds / totalSecondsIn30Days) * 100))
      setSandLevel(newSandLevel)

      // Set snake mood based on time remaining
      if (newSandLevel > 70) {
        setSnakeMood("excited")
      } else if (newSandLevel > 30) {
        setSnakeMood("nervous")
      } else {
        setSnakeMood("panicked")
      }

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    // Show random thoughts periodically
    const thoughtTimer = setInterval(() => {
      setShowThought(true)
      setThoughtIndex(Math.floor(Math.random() * snakeThoughts.length))

      // Hide thought bubble after 4 seconds
      setTimeout(() => {
        setShowThought(false)
      }, 4000)
    }, 10000)

    return () => {
      clearInterval(timer)
      clearInterval(thoughtTimer)
    }
  }, [])

  return (
    <div className="bg-[#1a2235] rounded-xl border border-gray-700 p-6 md:p-8 max-w-3xl mx-auto">
      <h3 className="text-2xl md:text-3xl font-bold text-green-400 text-center mb-6">$YAKU Token Launch Countdown</h3>

      {/* Countdown Display */}
      <div className="grid grid-cols-4 gap-2 md:gap-4 mb-8">
        {[
          { label: "Days", value: timeLeft.days },
          { label: "Hours", value: timeLeft.hours },
          { label: "Minutes", value: timeLeft.minutes },
          { label: "Seconds", value: timeLeft.seconds },
        ].map((item) => (
          <div key={item.label} className="flex flex-col items-center">
            <div className="bg-gray-800 rounded-lg w-full py-3 md:py-6 flex items-center justify-center mb-2">
              <span className="text-2xl md:text-4xl font-bold text-yellow-400">
                {item.value.toString().padStart(2, "0")}
              </span>
            </div>
            <span className="text-xs md:text-sm text-gray-400">{item.label}</span>
          </div>
        ))}
      </div>

      {/* Hourglass with Snake */}
      <div className="relative w-64 h-80 mx-auto mb-8">
        {/* Hourglass Container */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-full h-full">
            {/* Hourglass Frame */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-full relative">
                {/* Top wooden/golden cap */}
                <div className="absolute top-0 left-0 right-0 h-6 bg-amber-700 rounded-t-full"></div>

                {/* Bottom wooden/golden cap */}
                <div className="absolute bottom-0 left-0 right-0 h-6 bg-amber-700 rounded-b-full"></div>

                {/* Left wooden/golden frame */}
                <div className="absolute top-6 bottom-6 left-0 w-3 bg-amber-700"></div>

                {/* Right wooden/golden frame */}
                <div className="absolute top-6 bottom-6 right-0 w-3 bg-amber-700"></div>

                {/* Glass container */}
                <div className="absolute top-6 bottom-6 left-3 right-3 bg-blue-100/10 backdrop-blur-sm"></div>

                {/* Middle narrow part */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-4 bg-amber-700 z-10"></div>
              </div>
            </div>

            {/* Top Sand */}
            <div className="absolute top-6 left-3 right-3 overflow-hidden" style={{ height: `calc(50% - 8px)` }}>
              <div
                className="absolute bottom-0 left-0 right-0 bg-amber-200 transition-all duration-1000"
                style={{ height: `${sandLevel}%` }}
              >
                {/* Sand texture */}
                <div className="absolute inset-0 opacity-30 bg-gradient-to-b from-amber-100 to-amber-300"></div>
              </div>
            </div>

            {/* Bottom Sand */}
            <div className="absolute bottom-6 left-3 right-3 overflow-hidden" style={{ height: `calc(50% - 8px)` }}>
              <div
                className="absolute top-0 left-0 right-0 bg-amber-200 transition-all duration-1000"
                style={{ height: `${100 - sandLevel}%` }}
              >
                {/* Sand texture */}
                <div className="absolute inset-0 opacity-30 bg-gradient-to-b from-amber-100 to-amber-300"></div>
              </div>
            </div>

            {/* Falling sand particles */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-10 overflow-hidden">
              <div className="w-full h-full flex flex-col gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div
                    key={i}
                    className="w-1 h-1 bg-amber-200 rounded-full animate-fall"
                    style={{
                      animationDelay: `${i * 0.2}s`,
                      opacity: sandLevel > 0 ? 1 : 0,
                    }}
                  ></div>
                ))}
              </div>
            </div>

            {/* Snake Character */}
            <div
              className={cn(
                "absolute z-30 w-32 h-32 transition-all duration-500",
                snakeMood === "excited"
                  ? "animate-snake-excited"
                  : snakeMood === "nervous"
                    ? "animate-snake-nervous"
                    : "animate-snake-panicked",
              )}
              style={{
                bottom: `${Math.max(10, 100 - sandLevel)}%`,
                right: "-20px",
              }}
            >
              {/* Snake Body */}
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <defs>
                  <linearGradient id="snakeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#10b981" />
                    <stop offset="100%" stopColor="#059669" />
                  </linearGradient>
                </defs>

                {/* Snake Body */}
                <path
                  d="M 20,50 Q 35,35 50,50 T 80,50"
                  fill="none"
                  stroke="url(#snakeGradient)"
                  strokeWidth="12"
                  strokeLinecap="round"
                  className={cn("transition-all duration-300", snakeMood === "panicked" ? "animate-snake-wiggle" : "")}
                />

                {/* Snake Head */}
                <circle cx="80" cy="50" r="10" fill="#10b981" />

                {/* Snake Eyes - change based on mood */}
                {snakeMood === "excited" && (
                  <>
                    <circle cx="83" cy="47" r="2" fill="black" />
                    <circle cx="83" cy="53" r="2" fill="black" />
                  </>
                )}

                {snakeMood === "nervous" && (
                  <>
                    <ellipse cx="83" cy="47" rx="2" ry="1.5" fill="black" />
                    <ellipse cx="83" cy="53" rx="2" ry="1.5" fill="black" />
                  </>
                )}

                {snakeMood === "panicked" && (
                  <>
                    <path d="M 81,45 L 85,49" stroke="black" strokeWidth="1.5" />
                    <path d="M 85,45 L 81,49" stroke="black" strokeWidth="1.5" />
                    <path d="M 81,51 L 85,55" stroke="black" strokeWidth="1.5" />
                    <path d="M 85,51 L 81,55" stroke="black" strokeWidth="1.5" />
                  </>
                )}

                {/* Snake Mouth - changes based on mood */}
                {snakeMood === "excited" && (
                  <path d="M 90,50 C 88,53 86,53 84,50" fill="none" stroke="black" strokeWidth="1" />
                )}

                {snakeMood === "nervous" && <path d="M 90,50 L 84,50" fill="none" stroke="black" strokeWidth="1" />}

                {snakeMood === "panicked" && (
                  <path d="M 84,50 C 86,47 88,47 90,50" fill="none" stroke="black" strokeWidth="1" />
                )}

                {/* Snake Tongue */}
                <path
                  d="M 90,50 L 95,48 M 90,50 L 95,52"
                  stroke="#ef4444"
                  strokeWidth="1"
                  strokeLinecap="round"
                  className={cn(snakeMood === "panicked" ? "animate-tongue-rapid" : "animate-tongue")}
                />

                {/* Crown */}
                <path
                  d="M 80,40 L 75,36 L 80,32 L 85,36 Z"
                  fill="#fbbf24"
                  stroke="#fbbf24"
                  strokeWidth="0.5"
                  className={cn(snakeMood === "panicked" ? "animate-crown-shake" : "animate-crown")}
                />

                {/* Sweat drops for nervous/panicked states */}
                {snakeMood === "nervous" && (
                  <path d="M 70,45 L 68,40" stroke="#60a5fa" strokeWidth="1" strokeLinecap="round" />
                )}

                {snakeMood === "panicked" && (
                  <>
                    <path d="M 70,45 L 68,38" stroke="#60a5fa" strokeWidth="1" strokeLinecap="round" />
                    <circle cx="68" cy="38" r="1" fill="#60a5fa" className="animate-bounce" />
                    <path d="M 65,47 L 63,42" stroke="#60a5fa" strokeWidth="1" strokeLinecap="round" />
                    <circle
                      cx="63"
                      cy="42"
                      r="1"
                      fill="#60a5fa"
                      className="animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    />
                  </>
                )}
              </svg>

              {/* Thought Bubble */}
              {showThought && (
                <div className="absolute -top-16 -right-4 bg-white text-black p-2 rounded-lg text-xs w-32 transform origin-bottom-right animate-pop-in">
                  <div className="relative">
                    {snakeThoughts[thoughtIndex]}
                    <div className="absolute -bottom-4 right-2 w-4 h-4 bg-white transform rotate-45"></div>
                  </div>
                </div>
              )}
            </div>

            {/* Time is Coming Text */}
            <div
              className={cn(
                "absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center transition-opacity duration-500",
                sandLevel < 30 ? "opacity-100" : "opacity-0",
              )}
            >
              <div className="text-yellow-400 font-bold text-lg animate-pulse">TIME IS COMING!</div>
            </div>
          </div>
        </div>
      </div>

      <p className="text-center text-gray-300 mb-6">
        Yacumama is preparing to slither onto the Solana blockchain. Get your Solana wallet ready for the launch!
      </p>

      <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-sm text-gray-400">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <span>Contract Audit</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <span>Team KYC</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <span>Liquidity Lock</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-gray-600"></div>
          <span>Exchange Listings</span>
        </div>
      </div>
    </div>
  )
}
