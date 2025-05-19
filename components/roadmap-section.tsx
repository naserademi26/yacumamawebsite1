"use client"

import { useState } from "react"
import { CheckCircle2, Clock, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion } from "./framer-motion-mock"

// Roadmap data
const roadmapData = [
  {
    phase: "Phase 1",
    title: "Genesis",
    date: "Q2 2025",
    status: "completed",
    items: [
      "Token Launch on Major DEXs",
      "Community Building",
      "Website Launch",
      "Social Media Presence",
      "Initial Marketing Campaign",
    ],
  },
  {
    phase: "Phase 2",
    title: "Growth",
    date: "Q3 2025",
    status: "in-progress",
    items: [
      "CEX Listings",
      "Partnership Announcements",
      "Community Expansion",
      "Meme Contest Platform",
      "Merchandise Store",
    ],
  },
  {
    phase: "Phase 3",
    title: "Expansion",
    date: "Q4 2025",
    status: "upcoming",
    items: [
      "Yacumama DAO Launch",
      "Governance Token Integration",
      "Cross-Chain Deployment",
      "NFT Collection Release",
      "Charity Initiatives",
    ],
  },
  {
    phase: "Phase 4",
    title: "Evolution",
    date: "Q1 2026",
    status: "upcoming",
    items: [
      "Metaverse Integration",
      "Mobile App Development",
      "Gaming Partnerships",
      "Yacumama Ecosystem Expansion",
      "Global Marketing Campaign",
    ],
  },
]

export function RoadmapSection() {
  const [activePhase, setActivePhase] = useState(1) // 0-based index, so 1 is Phase 2

  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-green-400 text-center mb-4">Roadmap</h2>
      <p className="text-xl text-gray-300 text-center mb-12 max-w-2xl mx-auto">
        Our journey to revolutionize the meme coin space is just beginning. Here's what's ahead for Yacumama.
      </p>

      {/* Desktop Roadmap (Horizontal) */}
      <div className="hidden md:block mb-16">
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute top-16 left-0 w-full h-1 bg-gray-700"></div>

          {/* Timeline Nodes */}
          <div className="flex justify-between relative">
            {roadmapData.map((phase, index) => (
              <div
                key={phase.phase}
                className="flex flex-col items-center w-1/4 px-4"
                onMouseEnter={() => setActivePhase(index)}
              >
                {/* Status Circle */}
                <div
                  className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center z-10 mb-4",
                    phase.status === "completed"
                      ? "bg-green-500"
                      : phase.status === "in-progress"
                        ? "bg-yellow-500"
                        : "bg-gray-700",
                  )}
                >
                  {phase.status === "completed" ? (
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  ) : phase.status === "in-progress" ? (
                    <Clock className="w-5 h-5 text-white" />
                  ) : (
                    <ArrowRight className="w-5 h-5 text-white" />
                  )}
                </div>

                {/* Phase Title */}
                <h3 className="text-lg font-bold text-white mb-1">{phase.phase}</h3>
                <h4 className="text-md font-semibold text-green-400 mb-1">{phase.title}</h4>
                <p className="text-sm text-gray-400 mb-4">{phase.date}</p>

                {/* Phase Details Card */}
                <motion.div
                  className={cn(
                    "bg-[#1a2235] p-4 rounded-lg w-full transition-all duration-300",
                    activePhase === index
                      ? "border-2 border-green-500 shadow-lg shadow-green-500/20"
                      : "border border-gray-700",
                  )}
                >
                  <ul className="text-sm">
                    {phase.items.map((item, i) => (
                      <li key={i} className="mb-2 flex items-start">
                        <div
                          className={cn(
                            "w-2 h-2 rounded-full mt-1.5 mr-2 flex-shrink-0",
                            phase.status === "completed"
                              ? "bg-green-500"
                              : phase.status === "in-progress" && i < 3
                                ? "bg-yellow-500"
                                : "bg-gray-600",
                          )}
                        />
                        <span
                          className={cn(
                            phase.status === "completed"
                              ? "text-white"
                              : phase.status === "in-progress" && i < 3
                                ? "text-white"
                                : "text-gray-400",
                          )}
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Roadmap (Vertical) */}
      <div className="md:hidden">
        <div className="relative pl-8">
          {/* Vertical Timeline Line */}
          <div className="absolute top-0 left-4 w-1 h-full bg-gray-700"></div>

          {roadmapData.map((phase, index) => (
            <div key={phase.phase} className="mb-12 relative">
              {/* Status Circle */}
              <div
                className={cn(
                  "absolute left-0 top-0 w-8 h-8 rounded-full flex items-center justify-center z-10",
                  phase.status === "completed"
                    ? "bg-green-500"
                    : phase.status === "in-progress"
                      ? "bg-yellow-500"
                      : "bg-gray-700",
                )}
              >
                {phase.status === "completed" ? (
                  <CheckCircle2 className="w-5 h-5 text-white" />
                ) : phase.status === "in-progress" ? (
                  <Clock className="w-5 h-5 text-white" />
                ) : (
                  <ArrowRight className="w-5 h-5 text-white" />
                )}
              </div>

              {/* Phase Content */}
              <div className="pl-8">
                <h3 className="text-lg font-bold text-white">{phase.phase}</h3>
                <h4 className="text-md font-semibold text-green-400 mb-1">{phase.title}</h4>
                <p className="text-sm text-gray-400 mb-4">{phase.date}</p>

                {/* Phase Details Card */}
                <div
                  className={cn(
                    "bg-[#1a2235] p-4 rounded-lg border",
                    phase.status === "completed"
                      ? "border-green-500"
                      : phase.status === "in-progress"
                        ? "border-yellow-500"
                        : "border-gray-700",
                  )}
                >
                  <ul className="text-sm">
                    {phase.items.map((item, i) => (
                      <li key={i} className="mb-2 flex items-start">
                        <div
                          className={cn(
                            "w-2 h-2 rounded-full mt-1.5 mr-2 flex-shrink-0",
                            phase.status === "completed"
                              ? "bg-green-500"
                              : phase.status === "in-progress" && i < 3
                                ? "bg-yellow-500"
                                : "bg-gray-600",
                          )}
                        />
                        <span
                          className={cn(
                            phase.status === "completed"
                              ? "text-white"
                              : phase.status === "in-progress" && i < 3
                                ? "text-white"
                                : "text-gray-400",
                          )}
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
