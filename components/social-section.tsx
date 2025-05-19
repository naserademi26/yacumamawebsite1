import { Twitter, Send, Globe, MessageSquare } from "lucide-react"
import { TwitterFeed } from "./twitter-feed"
import { TelegramButton } from "./telegram-button"
import { DiscordButton } from "./discord-button"

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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Twitter Feed */}
        <div className="lg:col-span-2">
          <TwitterFeed username="yacumamameme" maxTweets={5} />
        </div>

        {/* Social Links */}
        <div className="bg-[#1a2235] rounded-xl p-6 border border-gray-700 flex flex-col">
          <h3 className="text-xl font-bold text-white mb-6">Connect With Us</h3>

          <div className="space-y-4 flex-grow">
            {/* Telegram */}
            <a
              href="https://t.me/Yacumamameme"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-[#0088cc]/10 rounded-lg hover:bg-[#0088cc]/20 transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-[#0088cc]/20 flex items-center justify-center">
                <Send className="w-5 h-5 text-[#0088cc]" />
              </div>
              <div>
                <p className="font-medium text-white">Telegram</p>
                <p className="text-sm text-gray-400">Join our community</p>
              </div>
            </a>

            {/* Discord */}
            <a
              href="https://discord.gg/Buw6bjgxxx"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-[#5865F2]/10 rounded-lg hover:bg-[#5865F2]/20 transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-[#5865F2]/20 flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-[#5865F2]" />
              </div>
              <div>
                <p className="font-medium text-white">Discord</p>
                <p className="text-sm text-gray-400">Chat with the community</p>
              </div>
            </a>

            {/* Twitter/X */}
            <a
              href="https://x.com/yacumamameme"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-[#1DA1F2]/20 flex items-center justify-center">
                <Twitter className="w-5 h-5 text-[#1DA1F2]" />
              </div>
              <div>
                <p className="font-medium text-white">Twitter/X</p>
                <p className="text-sm text-gray-400">@yacumamameme</p>
              </div>
            </a>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <TelegramButton variant="default" className="w-full" />
            <DiscordButton variant="default" className="w-full" />
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
