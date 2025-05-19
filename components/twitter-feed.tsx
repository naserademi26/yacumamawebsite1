"use client"

import { useEffect, useState } from "react"
import { Twitter, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface TwitterFeedProps {
  username: string
  maxTweets?: number
}

export function TwitterFeed({ username, maxTweets = 5 }: TwitterFeedProps) {
  const [isLoading, setIsLoading] = useState(true)

  // Clean username (remove @ and any URL parts)
  const cleanUsername = username.replace("@", "").replace("https://x.com/", "").replace("https://twitter.com/", "")

  // Mock tweets for display
  const tweets = [
    {
      id: 1,
      text: "What vibe are you feeling today?\n\nJungle takeover 🌴\nBear market blues 😢\nMeme coin madness 💥\nJust here for vibes 😎",
      date: "1h ago",
      likes: 7,
      comments: 8,
      poll: true,
    },
    {
      id: 2,
      text: "Elon took the bird.\n\nSo Yacumama slithered in 🐍👑\n\nTweets? Nah. Hisses.",
      date: "5h ago",
      likes: 15,
      comments: 3,
      poll: false,
    },
    {
      id: 3,
      text: "Exciting news! $YAKU is preparing for launch. Get your wallets ready for the mother of all meme coins! 🐍💚 #Yacumama #Crypto #Memecoin",
      date: "1d ago",
      likes: 42,
      comments: 12,
      poll: false,
    },
    {
      id: 4,
      text: "The community is growing fast! Thanks to all our early supporters. Together we'll make Yacumama the biggest snake in the crypto jungle! 🌴🐍 #YacumamaArmy",
      date: "2d ago",
      likes: 38,
      comments: 7,
      poll: false,
    },
    {
      id: 5,
      text: "New tokenomics announcement: 90% liquidity, 5% marketing, 5% development. Maximum stability and transparency for our holders! 📊💰 #Yacumama #Tokenomics",
      date: "3d ago",
      likes: 56,
      comments: 14,
      poll: false,
    },
  ]

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="w-full h-full min-h-[400px] bg-[#111827] rounded-xl p-6 border border-gray-700">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Twitter className="w-6 h-6 text-[#1DA1F2]" />
          <h3 className="text-xl font-bold text-white">Latest Updates</h3>
        </div>
        <a
          href={`https://twitter.com/${cleanUsername}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#1DA1F2] hover:text-[#1DA1F2]/80 text-sm flex items-center gap-1"
        >
          @{cleanUsername}
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>

      {isLoading ? (
        <div className="animate-pulse flex flex-col items-center justify-center text-gray-400 h-[350px]">
          <Twitter className="w-8 h-8 mb-2" />
          <p>Loading tweets...</p>
        </div>
      ) : (
        <div className="space-y-4 max-h-[600px] overflow-y-auto pr-1 custom-scrollbar">
          {tweets.map((tweet) => (
            <div
              key={tweet.id}
              className="p-4 border border-gray-700 rounded-lg bg-[#1a2235] hover:bg-gray-800/50 transition-colors"
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 bg-green-500/20">
                  <div className="w-full h-full relative">
                    <Image src="/hero-image.png" alt="Yacumama" width={40} height={40} className="object-cover" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-1 mb-1">
                    <p className="font-medium text-white">Yacumama</p>
                    <p className="text-xs text-gray-400">@{cleanUsername}</p>
                    <span className="text-xs text-gray-500 ml-1">· {tweet.date}</span>
                  </div>
                  <p className="text-gray-300 mb-3 whitespace-pre-line">{tweet.text}</p>

                  {tweet.poll && (
                    <div className="mb-3 space-y-2">
                      <div className="relative w-full h-8 bg-gray-800 rounded-md overflow-hidden">
                        <div
                          className="absolute top-0 left-0 h-full bg-green-500/20 rounded-md"
                          style={{ width: "33.3%" }}
                        ></div>
                        <div className="absolute inset-0 flex items-center px-3 justify-between">
                          <span className="text-white text-sm">Jungle takeover 🌴</span>
                          <span className="text-white text-sm">33.3%</span>
                        </div>
                      </div>
                      <div className="relative w-full h-8 bg-gray-800 rounded-md overflow-hidden">
                        <div
                          className="absolute top-0 left-0 h-full bg-green-500/20 rounded-md"
                          style={{ width: "0%" }}
                        ></div>
                        <div className="absolute inset-0 flex items-center px-3 justify-between">
                          <span className="text-white text-sm">Bear market blues 😢</span>
                          <span className="text-white text-sm">0%</span>
                        </div>
                      </div>
                      <div className="relative w-full h-8 bg-gray-800 rounded-md overflow-hidden">
                        <div
                          className="absolute top-0 left-0 h-full bg-green-500/20 rounded-md"
                          style={{ width: "33.3%" }}
                        ></div>
                        <div className="absolute inset-0 flex items-center px-3 justify-between">
                          <span className="text-white text-sm">Meme coin madness 💥</span>
                          <span className="text-white text-sm">33.3%</span>
                        </div>
                      </div>
                      <div className="relative w-full h-8 bg-gray-800 rounded-md overflow-hidden">
                        <div
                          className="absolute top-0 left-0 h-full bg-green-500/20 rounded-md"
                          style={{ width: "33.3%" }}
                        ></div>
                        <div className="absolute inset-0 flex items-center px-3 justify-between">
                          <span className="text-white text-sm">Just here for vibes 😎</span>
                          <span className="text-white text-sm">33.3%</span>
                        </div>
                      </div>
                      <p className="text-xs text-gray-500">3 votes · 22 hours left</p>
                    </div>
                  )}

                  <div className="flex items-center gap-6 text-gray-400">
                    <div className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-message-circle"
                      >
                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                      </svg>
                      <span className="text-xs">{tweet.comments}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-heart"
                      >
                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                      </svg>
                      <span className="text-xs">{tweet.likes}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="flex justify-center mt-6">
            <Button
              variant="outline"
              size="sm"
              className="border-[#1DA1F2] text-[#1DA1F2] hover:bg-[#1DA1F2]/10"
              onClick={() => window.open(`https://twitter.com/${cleanUsername}`, "_blank")}
            >
              <Twitter className="w-4 h-4 mr-2" />
              View More on X
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
