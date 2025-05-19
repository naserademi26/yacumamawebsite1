"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { HelpCircle } from "lucide-react"

// FAQ data
const faqData = [
  {
    question: "What is Yacumama?",
    answer:
      "Yacumama is a community-driven meme coin inspired by the legendary South American water serpent. It's more than just a token; it's a movement that celebrates the fun, chaotic nature of the crypto space while building a strong, engaged community.",
  },
  {
    question: "How do I buy $YAKU tokens?",
    answer:
      "Yacumama ($YAKU) will launch on the Solana network. To purchase tokens when they go live, you'll need a Solana-compatible wallet like Phantom, Solflare, or Slope. Once launched, you can buy $YAKU on Solana DEXs like Raydium, Orca, or Jupiter. Make sure to verify the official contract address from our website or social media channels before purchasing to avoid scams.",
  },
  {
    question: "When will Yacumama launch?",
    answer:
      "Yacumama is scheduled to launch soon! Check our countdown timer on the website for the exact launch date and time. We're in the final stages of preparation and security audits to ensure a smooth and fair launch for everyone.",
  },
  {
    question: "Is there a presale for Yacumama?",
    answer:
      "No, Yacumama will launch with a fair distribution model without any presale. This approach ensures that everyone has an equal opportunity to participate in the project from the beginning, creating a more decentralized and community-focused token.",
  },
  {
    question: "What makes Yacumama different from other meme coins?",
    answer:
      "Yacumama stands out with its unique South American mythology theme, strong community focus, and long-term vision. Unlike many meme coins that rely solely on hype, Yacumama is building a sustainable ecosystem with real utility, community governance, and continuous development on the Solana blockchain.",
  },
  {
    question: "Is Yacumama safe to invest in?",
    answer:
      "While Yacumama is undergoing security audits and implements best practices for smart contract security, all cryptocurrency investments carry risk. The team is committed to transparency and security, but you should always do your own research (DYOR) and only invest what you can afford to lose.",
  },
  {
    question: "What are the tokenomics of $YAKU?",
    answer:
      "Yacumama has a total supply of 1 billion $YAKU tokens. The distribution includes: 80% for liquidity pools, 10% for community and marketing, and 10% for development. There is no mint function, and the contract will be renounced after launch to ensure the token supply remains fixed.",
  },
  {
    question: "How can I get involved in the Yacumama community?",
    answer:
      "Join our vibrant community on Telegram, Discord, and Twitter. Participate in community events, contribute to discussions, create memes, and help spread the word about Yacumama. Active community members may be eligible for special rewards and governance rights in the future DAO.",
  },
]

export function FaqSection() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="flex flex-col items-center mb-12">
        <div className="w-16 h-16 bg-[#1a2235] border-2 border-green-500 rounded-full flex items-center justify-center mb-4">
          <HelpCircle className="w-8 h-8 text-green-400" />
        </div>
        <h2 className="text-4xl font-bold text-green-400 text-center mb-4">Frequently Asked Questions</h2>
        <p className="text-xl text-gray-300 text-center max-w-2xl">
          Everything you need to know about Yacumama and the $YAKU token.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqData.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-700">
              <AccordionTrigger className="text-white hover:text-green-400 text-lg font-medium py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 pb-5">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
