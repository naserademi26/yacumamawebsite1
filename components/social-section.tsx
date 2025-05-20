import { Twitter, Send, Globe, MessageSquare, Zap } from "lucide-react"

export function SocialSection() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="flex flex-col items-center mb-12">
        <div className="w-16 h-16 bg-[#1a2235] border-2 border-green-500 rounded-full flex items-center justify-center mb-4">
          <Globe className="w-8 h-8 text-green-400" />
        </div>
        <h2 className="text-4xl font-bold text-green-400 text-center mb-4">Join Our Community</h2>
        <p className="text-xl text-gray-300 text-center max-w-2xl">
          Stay updated with the latest news, announcements, and memes from the Yacumama community.
        </p>
      </div>

      {/* Cool Social Media Showcase - Full Width */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Telegram Showcase - Simplified */}
        <div className="bg-gradient-to-br from-[#0088cc]/20 to-[#1a2235] rounded-xl border border-[#0088cc]/30 p-6 flex flex-col h-full transform transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_15px_rgba(0,136,204,0.3)]">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-[#0088cc]/20 flex items-center justify-center">
              <Send className="w-6 h-6 text-[#0088cc]" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Telegram</h3>
              <p className="text-sm text-gray-400">@yacumamameme</p>
            </div>
          </div>

          <div className="flex-grow flex items-center justify-center">
            <a
              href="https://t.me/Yacumamameme"
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-6 bg-[#0088cc] text-white font-medium rounded-lg hover:bg-[#0088cc]/90 transition-colors flex items-center gap-2"
            >
              <Send className="w-5 h-5" />
              Join Our Telegram
            </a>
          </div>
        </div>

        {/* Discord Showcase - Simplified */}
        <div className="bg-gradient-to-br from-[#5865F2]/20 to-[#1a2235] rounded-xl border border-[#5865F2]/30 p-6 flex flex-col h-full transform transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_15px_rgba(88,101,242,0.3)]">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-[#5865F2]/20 flex items-center justify-center">
              <MessageSquare className="w-6 h-6 text-[#5865F2]" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Discord</h3>
              <p className="text-sm text-gray-400">Yacumama Community</p>
            </div>
          </div>

          <div className="flex-grow flex items-center justify-center">
            <a
              href="https://discord.gg/Buw6bjgxxx"
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-6 bg-[#5865F2] text-white font-medium rounded-lg hover:bg-[#5865F2]/90 transition-colors flex items-center gap-2"
            >
              <MessageSquare className="w-5 h-5" />
              Join Our Discord
            </a>
          </div>
        </div>

        {/* Twitter/X Showcase - Simplified */}
        <div className="bg-gradient-to-br from-gray-800/50 to-[#1a2235] rounded-xl border border-gray-700 p-6 flex flex-col h-full transform transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_15px_rgba(29,161,242,0.2)]">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-[#1DA1F2]/10 flex items-center justify-center">
              <Twitter className="w-6 h-6 text-[#1DA1F2]" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Twitter/X</h3>
              <p className="text-sm text-gray-400">@yacumamameme</p>
            </div>
          </div>

          <div className="flex-grow flex items-center justify-center">
            <a
              href="https://x.com/yacumamameme"
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-6 bg-[#1DA1F2] text-white font-medium rounded-lg hover:bg-[#1DA1F2]/90 transition-colors flex items-center gap-2"
            >
              <Twitter className="w-5 h-5" />
              Follow Us
            </a>
          </div>
        </div>

        {/* Community Highlights */}
        <div className="bg-gradient-to-br from-green-500/20 to-[#1a2235] rounded-xl border border-green-500/30 p-6 flex flex-col h-full transform transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_15px_rgba(34,197,94,0.3)]">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
              <Zap className="w-6 h-6 text-green-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Community Highlights</h3>
            </div>
          </div>

          <div className="flex-grow">
            <div className="bg-[#1a2235]/80 rounded-lg p-4 border border-green-500/20 mb-4">
              <h4 className="text-lg font-bold text-green-400 mb-2">Weekly AMAs</h4>
              <p className="text-gray-300">Join our weekly Ask Me Anything sessions with the team</p>
            </div>

            <div className="bg-[#1a2235]/80 rounded-lg p-4 border border-green-500/20">
              <h4 className="text-lg font-bold text-green-400 mb-2">Exclusive Giveaways</h4>
              <p className="text-gray-300">Active community members get access to regular token giveaways</p>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Social Media Section */}
      <div className="mt-12 bg-[#1a2235] rounded-xl p-8 border border-gray-700">
        <h3 className="text-2xl font-bold text-green-400 mb-6 text-center">Why Join Our Community?</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-800/50 p-6 rounded-lg">
            <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
              <span className="text-2xl">🔥</span>
            </div>
            <h4 className="text-xl font-bold text-white mb-2">Early Access</h4>
            <p className="text-gray-300">
              Be the first to know about launches, updates, and special events before they're announced publicly.
            </p>
          </div>

          <div className="bg-gray-800/50 p-6 rounded-lg">
            <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
              <span className="text-2xl">🎁</span>
            </div>
            <h4 className="text-xl font-bold text-white mb-2">Exclusive Rewards</h4>
            <p className="text-gray-300">
              Active community members get access to giveaways, airdrops, and special community-only perks.
            </p>
          </div>

          <div className="bg-gray-800/50 p-6 rounded-lg">
            <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
              <span className="text-2xl">🌐</span>
            </div>
            <h4 className="text-xl font-bold text-white mb-2">Global Network</h4>
            <p className="text-gray-300">
              Connect with like-minded crypto enthusiasts from around the world and share your Yacumama journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
