"use client"

import { useState } from "react"
import { Phone, CheckCircle, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function MobileAppSection() {
  const [activeScreen, setActiveScreen] = useState(0)

  const appScreens = ["Dashboard", "Portfolio", "Trading", "Staking"]

  const appFeatures = [
    {
      title: "Real-time Trading",
      description: "Trade Yacumama tokens directly from your mobile device with real-time price updates and charts.",
      icon: <Phone className="h-5 w-5 text-green-400" />,
    },
    {
      title: "Secure Wallet",
      description:
        "Store your Yacumama tokens securely with our state-of-the-art encryption and biometric authentication.",
      icon: <CheckCircle className="h-5 w-5 text-green-400" />,
    },
    {
      title: "Staking Rewards",
      description: "Stake your tokens directly from the app and earn rewards automatically.",
      icon: <Star className="h-5 w-5 text-green-400" />,
    },
  ]

  return (
    <section id="mobile-app" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Yacumama Mobile App</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Take the power of Yacumama with you wherever you go. Our mobile app gives you complete control over your
            tokens.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Mobile App Mockup */}
          <div className="relative mx-auto">
            <div className="relative w-64 h-[500px] mx-auto">
              {/* Phone frame */}
              <div className="absolute inset-0 rounded-[40px] border-8 border-gray-800 bg-black shadow-lg z-10"></div>

              {/* Screen */}
              <div className="absolute inset-0 m-1 rounded-[32px] overflow-hidden z-0 bg-gray-800">
                {/* App content */}
                <div className="h-full w-full flex flex-col">
                  {/* Status bar */}
                  <div className="h-6 bg-black flex justify-between items-center px-4">
                    <div className="text-white text-xs">9:41</div>
                    <div className="flex space-x-1">
                      <div className="w-4 h-2 bg-white rounded-sm"></div>
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>

                  {/* App header */}
                  <div className="bg-gray-900 p-4 border-b border-gray-700">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 rounded-full bg-green-500"></div>
                        <span className="text-green-400 font-bold">YACUMAMA</span>
                      </div>
                      <div className="w-6 h-6 rounded-full bg-gray-700"></div>
                    </div>
                  </div>

                  {/* App content */}
                  <div className="flex-1 bg-gray-900 p-4">
                    <h3 className="text-white font-bold mb-4">{appScreens[activeScreen]}</h3>

                    {/* Dashboard content */}
                    {activeScreen === 0 && (
                      <div className="space-y-4">
                        <div className="bg-gray-800 rounded-lg p-4">
                          <div className="text-xs text-gray-400">Total Balance</div>
                          <div className="text-xl text-white font-bold">1,245.32 YCM</div>
                          <div className="text-green-400 text-sm">+12.5% (24h)</div>
                        </div>

                        <div className="bg-gray-800 rounded-lg p-4 h-32">
                          <div className="text-xs text-gray-400 mb-2">Price Chart</div>
                          <div className="h-20 flex items-end space-x-1">
                            {[40, 35, 60, 45, 70, 55, 80, 65, 90, 75].map((height, i) => (
                              <div
                                key={i}
                                className="flex-1 bg-green-500 rounded-t"
                                style={{ height: `${height}%` }}
                              ></div>
                            ))}
                          </div>
                        </div>

                        <div className="bg-gray-800 rounded-lg p-4">
                          <div className="text-xs text-gray-400 mb-2">Recent Activity</div>
                          <div className="space-y-2">
                            <div className="flex justify-between text-xs">
                              <span className="text-white">Staking Reward</span>
                              <span className="text-green-400">+5.2 YCM</span>
                            </div>
                            <div className="flex justify-between text-xs">
                              <span className="text-white">Purchase</span>
                              <span className="text-green-400">+100 YCM</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Portfolio content */}
                    {activeScreen === 1 && (
                      <div className="space-y-4">
                        <div className="bg-gray-800 rounded-lg p-4">
                          <div className="flex justify-between">
                            <div>
                              <div className="text-xs text-gray-400">Yacumama</div>
                              <div className="text-white">1,245.32 YCM</div>
                            </div>
                            <div className="text-right">
                              <div className="text-xs text-gray-400">Value</div>
                              <div className="text-white">$12,453.20</div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-gray-800 rounded-lg p-4">
                          <div className="flex justify-between">
                            <div>
                              <div className="text-xs text-gray-400">Ethereum</div>
                              <div className="text-white">2.5 ETH</div>
                            </div>
                            <div className="text-right">
                              <div className="text-xs text-gray-400">Value</div>
                              <div className="text-white">$5,000.00</div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-gray-800 rounded-lg p-4">
                          <div className="flex justify-between">
                            <div>
                              <div className="text-xs text-gray-400">Bitcoin</div>
                              <div className="text-white">0.15 BTC</div>
                            </div>
                            <div className="text-right">
                              <div className="text-xs text-gray-400">Value</div>
                              <div className="text-white">$4,500.00</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Trading content */}
                    {activeScreen === 2 && (
                      <div className="space-y-4">
                        <div className="bg-gray-800 rounded-lg p-4 h-32">
                          <div className="text-xs text-gray-400 mb-2">YCM/USD</div>
                          <div className="h-20 flex items-end space-x-1">
                            {[40, 45, 42, 50, 48, 55, 52, 60, 58, 65].map((height, i) => (
                              <div
                                key={i}
                                className="flex-1 bg-green-500 rounded-t"
                                style={{ height: `${height}%` }}
                              ></div>
                            ))}
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                          <div className="bg-green-600 rounded-lg p-3 text-center">
                            <span className="text-white font-bold">BUY</span>
                          </div>
                          <div className="bg-red-600 rounded-lg p-3 text-center">
                            <span className="text-white font-bold">SELL</span>
                          </div>
                        </div>

                        <div className="bg-gray-800 rounded-lg p-4">
                          <div className="text-xs text-gray-400 mb-2">Order Book</div>
                          <div className="space-y-2">
                            <div className="flex justify-between text-xs">
                              <span className="text-white">10.05</span>
                              <span className="text-green-400">1,245 YCM</span>
                            </div>
                            <div className="flex justify-between text-xs">
                              <span className="text-white">10.00</span>
                              <span className="text-green-400">2,500 YCM</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Staking content */}
                    {activeScreen === 3 && (
                      <div className="space-y-4">
                        <div className="bg-gray-800 rounded-lg p-4">
                          <div className="text-xs text-gray-400">Staked Amount</div>
                          <div className="text-xl text-white font-bold">500.00 YCM</div>
                          <div className="text-green-400 text-sm">APY: 12.5%</div>
                        </div>

                        <div className="bg-gray-800 rounded-lg p-4">
                          <div className="text-xs text-gray-400 mb-2">Rewards</div>
                          <div className="text-white">5.2 YCM</div>
                          <div className="mt-2">
                            <div className="bg-gray-700 h-2 rounded-full">
                              <div className="bg-green-500 h-2 rounded-full w-1/4"></div>
                            </div>
                            <div className="text-xs text-gray-400 mt-1">Next reward in 18 hours</div>
                          </div>
                        </div>

                        <div className="bg-green-600 rounded-lg p-3 text-center">
                          <span className="text-white font-bold">STAKE MORE</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Navigation bar */}
                  <div className="h-16 bg-gray-900 border-t border-gray-700 flex justify-around items-center">
                    {appScreens.map((screen, index) => (
                      <button
                        key={index}
                        className={`w-10 h-10 rounded-full flex items-center justify-center ${activeScreen === index ? "bg-green-500/20" : "bg-transparent"}`}
                        onClick={() => setActiveScreen(index)}
                      >
                        <div
                          className={`w-2 h-2 rounded-full ${activeScreen === index ? "bg-green-500" : "bg-gray-600"}`}
                        ></div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Notch */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-xl z-20"></div>
            </div>
          </div>

          {/* App Features */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white">Download Our App</h3>
            <p className="text-gray-400">
              Experience the full power of Yacumama in your pocket. Our mobile app provides all the features you need to
              manage your tokens on the go.
            </p>

            <div className="space-y-4">
              {appFeatures.map((feature, index) => (
                <Card key={index} className="bg-gray-800 border-gray-700">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-4">
                      <div className="mt-1">{feature.icon}</div>
                      <div>
                        <h4 className="text-white font-medium">{feature.title}</h4>
                        <p className="text-gray-400 text-sm mt-1">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <Button className="bg-black hover:bg-gray-800 text-white border border-gray-700 flex items-center space-x-2 px-6">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.5,2H8.5C8.2,2,8,2.2,8,2.5v19C8,21.8,8.2,22,8.5,22h9c0.3,0,0.5-0.2,0.5-0.5v-19C18,2.2,17.8,2,17.5,2z M13,21h-2v-1h2V21z M16.5,18h-9V4h9V18z" />
                </svg>
                <div className="flex flex-col items-start">
                  <span className="text-xs">Download on</span>
                  <span className="text-sm font-medium">App Store</span>
                </div>
              </Button>

              <Button className="bg-black hover:bg-gray-800 text-white border border-gray-700 flex items-center space-x-2 px-6">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.9,24l4.1-7l-4.1-7h0.2c0.6,1,4.7,7.6,4.7,7.6l-4.7,7.6L3.9,24z M5.6,8.5l4.6,7.7l4.6-7.7H5.6z M10.2,16.2L6.7,24h10.8l-3.5-7.8H10.2z M14.9,8.5L12,3.4L9.1,8.5H14.9z M15.4,16.2l4.6-7.7h-4.6L15.4,16.2z M16.3,0H7.7v0.1L12,8.5L16.3,0.1V0z" />
                </svg>
                <div className="flex flex-col items-start">
                  <span className="text-xs">Download on</span>
                  <span className="text-sm font-medium">Google Play</span>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
