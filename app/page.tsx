"use client"

import { DollarSign, Activity, Gift } from "lucide-react"
import { AnimatedSnake } from "@/components/animated-snake"
import { Button } from "@/components/ui/button"
import { RoadmapSection } from "@/components/roadmap-section"
import { FaqSection } from "@/components/faq-section"
import { CountdownTimer } from "@/components/countdown-timer"
import { TokenomicsSection } from "@/components/tokenomics-section"
import { SocialSection } from "@/components/social-section"
import { MainNavigation } from "@/components/main-navigation"
import { TeamSection } from "@/components/team-section"
import { AnimatedCoinSnake } from "@/components/animated-coin-snake"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#111827] text-white">
      {/* Main Navigation */}
      <MainNavigation />

      {/* Animated Coin Snake */}
      <AnimatedCoinSnake />

      {/* Hero Section */}
      <section id="home" className="container mx-auto px-4 pt-32 pb-16 flex flex-col items-center">
        <div className="max-w-3xl w-full rounded-lg overflow-hidden mb-8 bg-[#1a2235] p-8 relative">
          <div className="absolute top-4 right-4">
            <span className="text-yellow-400 text-2xl">$YAKU</span>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-40 h-40 relative">
              <AnimatedSnake />
            </div>

            <div className="text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">YACUMAMA</h2>
              <p className="text-xl text-green-400 font-semibold">THE MOTHER OF ALL MEME COINS</p>
            </div>
          </div>
        </div>

        <h1 className="text-5xl font-bold text-green-400 text-center mb-4">Yacumama Token</h1>
        <p className="text-xl text-gray-300 text-center mb-8">Meet Yacumama — The Mother of All Meme Coins.</p>

        {/* Countdown Timer */}
        <div className="w-full mb-8">
          <CountdownTimer />
        </div>

        <Button className="bg-green-500 hover:bg-green-600 text-white px-8 py-6 text-lg rounded-md">Get Ready</Button>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-green-400 text-center mb-12">Why Yacumama?</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Feature 1 */}
          <div className="bg-[#1a2235] p-8 rounded-lg flex flex-col items-center">
            <div className="w-16 h-16 bg-[#1a2235] border-2 border-green-500 rounded-full flex items-center justify-center mb-4">
              <DollarSign className="w-8 h-8 text-green-400" />
            </div>
            <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
              <span className="text-yellow-500">💰</span> No Presale
            </h3>
            <p className="text-gray-400 text-center">Fair launch for everyone. Jump in and ride the wave.</p>
          </div>

          {/* Feature 2 */}
          <div className="bg-[#1a2235] p-8 rounded-lg flex flex-col items-center">
            <div className="w-16 h-16 bg-[#1a2235] border-2 border-green-500 rounded-full flex items-center justify-center mb-4">
              <Activity className="w-8 h-8 text-green-400" />
            </div>
            <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
              <span>📈</span> Only Chaos
            </h3>
            <p className="text-gray-400 text-center">Embrace the thrill of the unpredictable meme market.</p>
          </div>

          {/* Feature 3 */}
          <div className="bg-[#1a2235] p-8 rounded-lg flex flex-col items-center">
            <div className="w-16 h-16 bg-[#1a2235] border-2 border-green-500 rounded-full flex items-center justify-center mb-4">
              <Gift className="w-8 h-8 text-green-400" />
            </div>
            <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
              <span>🚀</span> Pure Meme Energy
            </h3>
            <p className="text-gray-400 text-center">Powered by community, laughter, and legendary memes.</p>
          </div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section id="tokenomics">
        <TokenomicsSection />
      </section>

      {/* Roadmap Section */}
      <section id="roadmap">
        <RoadmapSection />
      </section>

      {/* Team Section */}
      <TeamSection />

      {/* Social Section */}
      <section id="community">
        <SocialSection />
      </section>

      {/* FAQ Section */}
      <section id="faq">
        <FaqSection />
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 mt-16 py-8">
        <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
          <p>© 2025 Yacumama Token. All Memes Reserved.</p>
          <p className="mt-1">This is a meme coin, not financial advice. YAKU for fun.</p>
        </div>
      </footer>
    </div>
  )
}
