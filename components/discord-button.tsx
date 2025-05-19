"use client"

import { MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface DiscordButtonProps {
  className?: string
  size?: "default" | "sm" | "lg"
  variant?: "default" | "outline" | "ghost"
}

export function DiscordButton({ className, size = "default", variant = "outline" }: DiscordButtonProps) {
  return (
    <a
      href="https://discord.gg/Buw6bjgxxx"
      target="_blank"
      rel="noopener noreferrer"
      className={cn("inline-flex", className)}
    >
      <Button
        variant={variant}
        size={size}
        className={cn(
          "border-[#5865F2] text-[#5865F2] hover:bg-[#5865F2]/10",
          variant === "default" && "bg-[#5865F2] hover:bg-[#5865F2]/90 text-white",
        )}
      >
        <MessageSquare className="mr-2 h-4 w-4" />
        Join Discord
      </Button>
    </a>
  )
}
