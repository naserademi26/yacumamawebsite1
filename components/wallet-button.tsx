"use client"

import { Button } from "@/components/ui/button"
import { useWallet } from "./wallet-context"
import { Loader2 } from "lucide-react"

export function WalletButton() {
  const { openWalletModal, walletState, disconnectWallet } = useWallet()
  const { address, isConnecting, isConnected } = walletState

  // Format address for display
  const formatAddress = (addr: string) => {
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`
  }

  if (isConnecting) {
    return (
      <Button variant="outline" className="border-green-500 text-green-500 hover:bg-green-500/10" disabled>
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        Connecting...
      </Button>
    )
  }

  if (isConnected && address) {
    return (
      <div className="flex items-center gap-2">
        <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse" />
        <Button
          variant="outline"
          className="border-green-500 text-green-500 hover:bg-green-500/10"
          onClick={() => disconnectWallet()}
        >
          {formatAddress(address)}
        </Button>
      </div>
    )
  }

  return (
    <Button
      data-wallet-connect
      variant="outline"
      className="border-green-500 text-green-500 hover:bg-green-500/10"
      onClick={openWalletModal}
    >
      Connect Wallet
    </Button>
  )
}
