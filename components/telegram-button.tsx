"use client"

import { Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface TelegramButtonProps {
  className?: string
  size?: "default" | "sm" | "lg"
  variant?: "default" | "outline" | "ghost"
}

export function TelegramButton({ className, size = "default", variant = "outline" }: TelegramButtonProps) {
  return (
    <a
      href="https://t.me/Yacumamameme"
      target="_blank"
      rel="noopener noreferrer"
      className={cn("inline-flex", className)}
    >
      <Button
        variant={variant}
        size={size}
        className={cn(
          "border-[#0088cc] text-[#0088cc] hover:bg-[#0088cc]/10",
          variant === "default" && "bg-[#0088cc] hover:bg-[#0088cc]/90 text-white",
        )}
      >
        <Send className="mr-2 h-4 w-4" />
        Join Telegram
      </Button>
    </a>
  )
}
