"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { useWallet, WALLET_TYPES } from "./wallet-context"
import { Loader2, AlertCircle, CheckCircle2 } from "lucide-react"

// Wallet options with icons and names
const WALLETS = [
  {
    id: WALLET_TYPES.PHANTOM,
    name: "Phantom",
    icon: "👻",
    ready: true,
  },
  {
    id: WALLET_TYPES.SOLFLARE,
    name: "Solflare",
    icon: "🔆",
    ready: true,
  },
  {
    id: WALLET_TYPES.SLOPE,
    name: "Slope",
    icon: "🏂",
    ready: true,
  },
  {
    id: WALLET_TYPES.BACKPACK,
    name: "Backpack",
    icon: "🎒",
    ready: true,
  },
]

export function WalletModal() {
  const { isWalletModalOpen, closeWalletModal, walletState, connectWallet, disconnectWallet } = useWallet()

  const { isConnected, isConnecting, error } = walletState

  // Handle connection
  const handleConnect = async (walletId: string) => {
    await connectWallet(walletId)
  }

  return (
    <Dialog open={isWalletModalOpen} onOpenChange={(open) => !open && closeWalletModal()}>
      <DialogContent className="sm:max-w-md bg-[#1a2235] border-green-500/20">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-green-400">Connect Your Solana Wallet</DialogTitle>
        </DialogHeader>

        <div className="py-4">
          {isConnected ? (
            <div className="flex flex-col items-center gap-4">
              <CheckCircle2 className="h-12 w-12 text-green-500" />
              <p className="text-center text-white">Wallet connected successfully!</p>
              <Button
                variant="outline"
                className="border-red-500 text-red-500 hover:bg-red-500/10 w-full"
                onClick={() => {
                  disconnectWallet()
                  closeWalletModal()
                }}
              >
                Disconnect Wallet
              </Button>
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              {WALLETS.map((wallet) => (
                <Button
                  key={wallet.id}
                  variant="outline"
                  className="border-green-500 text-white hover:bg-green-500/10 justify-start h-14 text-lg"
                  disabled={!wallet.ready || isConnecting}
                  onClick={() => handleConnect(wallet.id)}
                >
                  {isConnecting ? (
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  ) : (
                    <span className="mr-2 text-xl">{wallet.icon}</span>
                  )}
                  {wallet.name}
                  {!wallet.ready && " (unsupported)"}
                </Button>
              ))}

              {error && (
                <div className="bg-red-500/10 p-3 rounded-md flex items-start gap-2 mt-2">
                  <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <p className="text-red-500 text-sm">{error}</p>
                </div>
              )}

              <div className="mt-4 text-sm text-gray-400">
                <p>By connecting your wallet, you agree to our Terms of Service and Privacy Policy.</p>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
