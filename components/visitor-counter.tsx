"use client"

import { useState, useEffect } from "react"
import { TrendingUp } from "lucide-react"

export function VisitorCounter() {
  const [totalVisitors, setTotalVisitors] = useState(0)

  // Simulate visitor count
  useEffect(() => {
    // Generate a base number of visitors that's consistent across page refreshes
    // Using the current date to make it seem like it's growing day by day
    const today = new Date()
    const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000)

    // Base total visitors (growing by ~1000 per day)
    const baseTotalVisitors = 25000 + dayOfYear * 1000

    // Set initial value
    setTotalVisitors(baseTotalVisitors)

    // Simulate increasing total visitors
    const totalInterval = setInterval(() => {
      setTotalVisitors((prev) => prev + Math.floor(Math.random() * 3) + 1)
    }, 10000) // Update every 10 seconds

    return () => {
      clearInterval(totalInterval)
    }
  }, [])

  // Format numbers with commas
  const formatNumber = (num: number) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }

  return (
    <div className="fixed top-4 right-4 z-40 bg-[#1a2235]/90 backdrop-blur-sm rounded-lg border border-green-500/30 shadow-lg px-3 py-2">
      <div className="flex items-center gap-2">
        <TrendingUp className="w-4 h-4 text-green-400" />
        <span className="text-white font-medium">Visitors: {formatNumber(totalVisitors)}</span>
      </div>
    </div>
  )
}
