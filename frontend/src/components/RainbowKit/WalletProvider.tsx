import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactNode } from "react";
import { eduChain } from "./eduChain";

const config = getDefaultConfig({
  appName: "My RainbowKit App",
  projectId: import.meta.env.VITE_APP_WALLETCONNECT_API_KEY,
  chains: [eduChain],
});

const queryClient = new QueryClient();

export const WalletProvider = ({ children }: { children: ReactNode }) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider coolMode>{children}</RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};
