"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type WalletState = {
  isConnected: boolean
  isConnecting: boolean
  address: string | null
  error: string | null
  walletType: string | null
}

type WalletContextType = {
  walletState: WalletState
  isWalletModalOpen: boolean
  openWalletModal: () => void
  closeWalletModal: () => void
  connectWallet: (walletType: string) => Promise<void>
  disconnectWallet: () => void
}

const initialState: WalletState = {
  isConnected: false,
  isConnecting: false,
  address: null,
  error: null,
  walletType: null,
}

const WalletContext = createContext<WalletContextType>({
  walletState: initialState,
  isWalletModalOpen: false,
  openWalletModal: () => {},
  closeWalletModal: () => {},
  connectWallet: async () => {},
  disconnectWallet: () => {},
})

export const useWallet = () => useContext(WalletContext)

// Mock wallet types
export const WALLET_TYPES = {
  PHANTOM: "phantom",
  SOLFLARE: "solflare",
  SLOPE: "slope",
  BACKPACK: "backpack",
}

export function WalletProvider({ children }: { children: ReactNode }) {
  const [walletState, setWalletState] = useState<WalletState>(initialState)
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Check for saved connection on mount
  useEffect(() => {
    setMounted(true)
    const savedAddress = localStorage.getItem("yacumama_wallet_address")
    const savedWallet = localStorage.getItem("yacumama_wallet_type")

    if (savedAddress && savedWallet) {
      setWalletState({
        isConnected: true,
        isConnecting: false,
        address: savedAddress,
        error: null,
        walletType: savedWallet,
      })
    }
  }, [])

  const openWalletModal = () => setIsWalletModalOpen(true)
  const closeWalletModal = () => setIsWalletModalOpen(false)

  // Mock wallet connection
  const connectWallet = async (walletType: string) => {
    setWalletState({
      ...walletState,
      isConnecting: true,
      error: null,
    })

    try {
      // Simulate connection delay
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Generate a random Solana address
      const randomAddress =
        walletType === WALLET_TYPES.PHANTOM
          ? "Phan" + Array.from({ length: 40 }, () => Math.floor(Math.random() * 16).toString(16)).join("")
          : walletType === WALLET_TYPES.SOLFLARE
            ? "Solf" + Array.from({ length: 40 }, () => Math.floor(Math.random() * 16).toString(16)).join("")
            : walletType === WALLET_TYPES.SLOPE
              ? "Slop" + Array.from({ length: 40 }, () => Math.floor(Math.random() * 16).toString(16)).join("")
              : "Back" + Array.from({ length: 40 }, () => Math.floor(Math.random() * 16).toString(16)).join("")

      // Save to localStorage for persistence
      localStorage.setItem("yacumama_wallet_address", randomAddress)
      localStorage.setItem("yacumama_wallet_type", walletType)

      setWalletState({
        isConnected: true,
        isConnecting: false,
        address: randomAddress,
        error: null,
        walletType: walletType,
      })

      // Close modal after successful connection
      setTimeout(() => closeWalletModal(), 1000)
    } catch (error) {
      setWalletState({
        ...walletState,
        isConnecting: false,
        error: "Failed to connect wallet",
      })
    }
  }

  const disconnectWallet = () => {
    localStorage.removeItem("yacumama_wallet_address")
    localStorage.removeItem("yacumama_wallet_type")

    setWalletState({
      isConnected: false,
      isConnecting: false,
      address: null,
      error: null,
      walletType: null,
    })
  }

  // Only render children after hydration to avoid mismatch
  if (!mounted) {
    return null
  }

  return (
    <WalletContext.Provider
      value={{
        walletState,
        isWalletModalOpen,
        openWalletModal,
        closeWalletModal,
        connectWallet,
        disconnectWallet,
      }}
    >
      {children}
    </WalletContext.Provider>
  )
}
