import { PieChart, Layers, Users, Code } from "lucide-react"

export function TokenomicsSection() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="flex flex-col items-center mb-12">
        <div className="w-16 h-16 bg-[#1a2235] border-2 border-green-500 rounded-full flex items-center justify-center mb-4">
          <PieChart className="w-8 h-8 text-green-400" />
        </div>
        <h2 className="text-4xl font-bold text-green-400 text-center mb-4">Tokenomics</h2>
        <p className="text-xl text-gray-300 text-center max-w-2xl">
          $YAKU has a fair and transparent token distribution designed for long-term sustainability.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Tokenomics Chart */}
        <div className="bg-[#1a2235] rounded-xl p-6 flex items-center justify-center">
          <div className="relative w-64 h-64">
            {/* Pie Chart */}
            <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
              {/* 90% Liquidity Pools - 324 degrees */}
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="transparent"
                stroke="#10b981"
                strokeWidth="20"
                strokeDasharray="282.6 314"
                strokeDashoffset="0"
                className="drop-shadow-md"
              />

              {/* 5% Community & Marketing - 18 degrees */}
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="transparent"
                stroke="#fbbf24"
                strokeWidth="20"
                strokeDasharray="15.7 314"
                strokeDashoffset="-282.6"
                className="drop-shadow-md"
              />

              {/* 5% Development - 18 degrees */}
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="transparent"
                stroke="#3b82f6"
                strokeWidth="20"
                strokeDasharray="15.7 314"
                strokeDashoffset="-298.3"
                className="drop-shadow-md"
              />

              {/* Center Circle */}
              <circle cx="50" cy="50" r="30" fill="#1a2235" />

              {/* Yacumama Logo in Center */}
              <g transform="translate(50, 50) scale(0.4)">
                <circle cx="0" cy="0" r="20" fill="#10b981" />
                <path d="M 0,-15 L -10,-5 L 0,-10 L 10,-5 Z" fill="#fbbf24" />
                <circle cx="5" cy="-5" r="2" fill="black" />
                <circle cx="-5" cy="-5" r="2" fill="black" />
              </g>
            </svg>

            {/* Percentage Labels */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-bold text-white">
              100%
            </div>
          </div>
        </div>

        {/* Tokenomics Details */}
        <div className="flex flex-col justify-center">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-green-500 flex-shrink-0 flex items-center justify-center">
                <Layers className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <span className="inline-block w-3 h-3 bg-green-500 rounded-full"></span>
                  Liquidity Pools <span className="text-green-400">90%</span>
                </h3>
                <p className="text-gray-400 mt-1">
                  90% of tokens are allocated to liquidity pools to ensure exceptional trading stability and minimize
                  price impact for traders.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-yellow-500 flex-shrink-0 flex items-center justify-center">
                <Users className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <span className="inline-block w-3 h-3 bg-yellow-500 rounded-full"></span>
                  Community & Marketing <span className="text-yellow-400">5%</span>
                </h3>
                <p className="text-gray-400 mt-1">
                  5% is dedicated to community rewards, airdrops, and marketing initiatives to grow the Yacumama
                  ecosystem.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-500 flex-shrink-0 flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <span className="inline-block w-3 h-3 bg-blue-500 rounded-full"></span>
                  Development <span className="text-blue-400">5%</span>
                </h3>
                <p className="text-gray-400 mt-1">
                  5% is allocated for ongoing development, security audits, and future improvements to the protocol.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
            <p className="text-gray-300 text-sm">
              <span className="text-yellow-400 font-bold">Note:</span> No team tokens, no presale, and no hidden
              allocations. With 90% in liquidity, Yacumama offers one of the most fair and stable meme coin
              distributions in the market.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
