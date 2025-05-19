"use client"

import { useState } from "react"
import { Users, Twitter, Globe, Github } from "lucide-react"
import { cn } from "@/lib/utils"
import { TeamSnakeAvatar } from "./team-snake-avatar"

// Team data
const teamMembers = [
  {
    name: "Crypto King",
    role: "Founder & Visionary",
    avatarRole: "founder" as const,
    color: "#10b981", // green
    bio: "Blockchain enthusiast since 2013. Previously led development at several DeFi projects and has a passion for disruptive financial technologies and memes.",
    twitter: "https://twitter.com",
    website: "https://example.com",
    github: "https://github.com",
  },
  {
    name: "Meme Lord",
    role: "Marketing & Community",
    avatarRole: "marketing" as const,
    color: "#fbbf24", // yellow
    bio: "Social media expert with a background in viral marketing campaigns. Believes in the power of community-driven projects and has a talent for creating unforgettable memes.",
    twitter: "https://twitter.com",
    website: "https://example.com",
    github: "https://github.com",
  },
  {
    name: "Solana Sage",
    role: "Lead Developer",
    avatarRole: "developer" as const,
    color: "#3b82f6", // blue
    bio: "Solana ecosystem developer with experience building high-performance dApps. Passionate about creating secure, scalable blockchain solutions with a focus on user experience.",
    twitter: "https://twitter.com",
    website: "https://example.com",
    github: "https://github.com",
  },
  {
    name: "Tokenomics Wizard",
    role: "Financial Strategist",
    avatarRole: "financial" as const,
    color: "#ec4899", // pink
    bio: "Economics background with expertise in token design and incentive structures. Ensures Yacumama's tokenomics are sustainable and beneficial for the entire ecosystem.",
    twitter: "https://twitter.com",
    website: "https://example.com",
    github: "https://github.com",
  },
]

export function TeamSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  return (
    <section id="team" className="container mx-auto px-4 py-16">
      <div className="flex flex-col items-center mb-12">
        <div className="w-16 h-16 bg-[#1a2235] border-2 border-green-500 rounded-full flex items-center justify-center mb-4">
          <Users className="w-8 h-8 text-green-400" />
        </div>
        <h2 className="text-4xl font-bold text-green-400 text-center mb-4">Meet the Team</h2>
        <p className="text-xl text-gray-300 text-center max-w-2xl">
          The visionaries and builders behind Yacumama, working to create the mother of all meme coins.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={member.name}
            className="group relative"
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            <div className="bg-[#1a2235] rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20 border border-gray-700 hover:border-green-500/50">
              {/* Member Image - Custom Snake Avatar */}
              <div className="relative h-64 overflow-hidden bg-[#1a2235]">
                <div
                  className={cn(
                    "absolute inset-0 opacity-10 transition-opacity duration-300",
                    activeIndex === index ? "opacity-20" : "opacity-10",
                  )}
                  style={{ backgroundColor: member.color }}
                ></div>

                {/* Custom Snake Avatar */}
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <TeamSnakeAvatar role={member.avatarRole} color={member.color} />
                </div>

                {/* Member Name Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1a2235] to-transparent p-4">
                  <h3 className="text-xl font-bold text-white">{member.name}</h3>
                  <p className="text-green-400">{member.role}</p>
                </div>
              </div>

              {/* Member Bio */}
              <div className="p-4">
                <p className="text-gray-300 text-sm">{member.bio}</p>

                {/* Social Links */}
                <div className="mt-4 flex items-center gap-3">
                  <a
                    href={member.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-[#1DA1F2] hover:bg-gray-700 transition-colors"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a
                    href={member.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-colors"
                  >
                    <Globe className="w-4 h-4" />
                  </a>
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-purple-400 hover:bg-gray-700 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Fun Hover Element - Snake Crown */}
            <div
              className={cn(
                "absolute top-4 right-4 transition-all duration-300 transform",
                activeIndex === index ? "opacity-100 scale-100" : "opacity-0 scale-0",
              )}
            >
              <div className="bg-yellow-400 text-[#1a2235] rounded-full w-10 h-10 flex items-center justify-center shadow-lg">
                <span className="text-lg">👑</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Team Values */}
      <div className="mt-16 bg-[#1a2235] rounded-xl p-8 border border-gray-700">
        <h3 className="text-2xl font-bold text-green-400 mb-6 text-center">Our Values</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-800/50 p-6 rounded-lg">
            <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
              <span className="text-2xl">🌐</span>
            </div>
            <h4 className="text-xl font-bold text-white mb-2">Community First</h4>
            <p className="text-gray-300">
              We believe in building a strong, engaged community that drives the project forward together.
            </p>
          </div>

          <div className="bg-gray-800/50 p-6 rounded-lg">
            <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
              <span className="text-2xl">🔒</span>
            </div>
            <h4 className="text-xl font-bold text-white mb-2">Transparency</h4>
            <p className="text-gray-300">
              Open communication and honest operations are at the core of everything we do.
            </p>
          </div>

          <div className="bg-gray-800/50 p-6 rounded-lg">
            <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
              <span className="text-2xl">🚀</span>
            </div>
            <h4 className="text-xl font-bold text-white mb-2">Innovation</h4>
            <p className="text-gray-300">
              We're constantly exploring new ideas and pushing the boundaries of what's possible in the meme coin space.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
