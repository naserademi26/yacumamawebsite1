import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { SnakeCursor } from "@/components/snake-cursor"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Yacumama - The Mother of All Meme Coins",
  description: "Join the Yacumama community and embrace the meme coin revolution",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <style
          dangerouslySetInnerHTML={{
            __html: `
          /* Force dark mode for Twitter embeds */
          iframe.twitter-timeline {
            background-color: #1a2235 !important;
          }
          
          /* Cobra cursor animations */
          @keyframes cobra-hood {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
          }
          
          @keyframes cobra-hood-left {
            0%, 100% { transform: translateX(0); }
            50% { transform: translateX(-1px); }
          }
          
          @keyframes cobra-hood-right {
            0%, 100% { transform: translateX(0); }
            50% { transform: translateX(1px); }
          }
          
          @keyframes cobra-neck {
            0%, 100% { transform: scaleY(1); }
            50% { transform: scaleY(1.1); }
          }
          
          @keyframes cobra-tongue {
            0%, 40%, 60%, 100% { transform: scaleX(1); }
            50% { transform: scaleX(1.3); }
          }
          
          .animate-cobra-hood {
            animation: cobra-hood 2s infinite ease-in-out;
            transform-origin: center;
          }
          
          .animate-cobra-hood-left {
            animation: cobra-hood-left 2s infinite ease-in-out;
          }
          
          .animate-cobra-hood-right {
            animation: cobra-hood-right 2s infinite ease-in-out;
          }
          
          .animate-cobra-neck {
            animation: cobra-neck 2s infinite ease-in-out;
            transform-origin: center top;
          }
          
          .animate-cobra-tongue {
            animation: cobra-tongue 1s infinite;
            transform-origin: 20px 28px;
          }

          /* Vertical Snake cursor animations */
          @keyframes snake-body-vertical {
            0%, 100% { d: path("M16,6 Q12,10 16,14 T16,22"); }
            50% { d: path("M16,6 Q20,10 16,14 T16,22"); }
          }

          @keyframes snake-head-vertical {
            0%, 100% { transform: translateX(0); }
            50% { transform: translateX(1px); }
          }

          @keyframes snake-tongue-vertical {
            0%, 40%, 60%, 100% { transform: scaleY(1); }
            50% { transform: scaleY(1.3); }
          }

          .animate-snake-body-vertical {
            animation: snake-body-vertical 3s infinite ease-in-out;
          }

          .animate-snake-head-vertical {
            animation: snake-head-vertical 3s infinite ease-in-out;
          }

          .animate-snake-tongue-vertical {
            animation: snake-tongue-vertical 1.5s infinite;
            transform-origin: 16px 3px;
          }

          /* Snake eating animation */
          @keyframes snake-eat {
            0% { transform: translate(-50%, -50%) scale(1); }
            50% { transform: translate(-50%, -50%) scale(1.3); }
            100% { transform: translate(-50%, -50%) scale(1); }
          }

          .snake-head.eating {
            animation: snake-eat 0.3s ease-in-out;
          }

          /* Coin disappearing animation */
          @keyframes coin-eaten {
            0% { transform: translate(-50%, -50%) scale(1) rotate(0deg); }
            100% { transform: translate(-50%, -50%) scale(0) rotate(180deg); }
          }

          .coin-eaten {
            animation: coin-eaten 0.5s ease-in-out forwards;
          }
        `,
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
          <SnakeCursor />
        </ThemeProvider>
      </body>
    </html>
  )
}
