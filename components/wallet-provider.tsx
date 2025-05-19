"use client"

import { createContext, useContext, useState, type ReactNode } from "react"
import { createConfig, configureChains, WagmiConfig } from "wagmi"
import { mainnet, arbitrum, optimism, polygon, base } from "wagmi/chains"
import { MetaMaskConnector } from "wagmi/connectors/metaMask"
import { WalletConnectConnector } from "wagmi/connectors/walletConnect"
import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet"
import { InjectedConnector } from "wagmi/connectors/injected"
import { publicProvider } from "wagmi/providers/public"

type WalletContextType = {
  isWalletModalOpen: boolean
  openWalletModal: () => void
  closeWalletModal: () => void
}

const WalletContext = createContext<WalletContextType>({
  isWalletModalOpen: false,
  openWalletModal: () => {},
  closeWalletModal: () => {},
})

export const useWallet = () => useContext(WalletContext)

// Configure chains & providers
const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet, arbitrum, optimism, polygon, base],
  [publicProvider()],
)

// Set up wagmi config
const config = createConfig({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains }),
    new WalletConnectConnector({
      chains,
      options: {
        projectId: "yacumama-project", // Replace with actual project ID if available
      },
    }),
    new CoinbaseWalletConnector({
      chains,
      options: {
        appName: "Yacumama",
      },
    }),
    new InjectedConnector({
      chains,
      options: {
        name: "Injected",
        shimDisconnect: true,
      },
    }),
  ],
  publicClient,
  webSocketPublicClient,
})

export function WalletProvider({ children }: { children: ReactNode }) {
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false)

  const openWalletModal = () => setIsWalletModalOpen(true)
  const closeWalletModal = () => setIsWalletModalOpen(false)

  return (
    <WagmiConfig config={config}>
      <WalletContext.Provider
        value={{
          isWalletModalOpen,
          openWalletModal,
          closeWalletModal,
        }}
      >
        {children}
      </WalletContext.Provider>
    </WagmiConfig>
  )
}
