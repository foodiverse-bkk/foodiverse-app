import { ReactNode } from "react";
import { DynamicContextProvider } from "@dynamic-labs/sdk-react-core";
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";
import { DynamicWagmiConnector } from "@dynamic-labs/wagmi-connector";
import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { wagmiConfig } from "@/config";
import { Web3ProvidersWagmi } from "./Web3ProvidersWagmi";

const queryClient = new QueryClient();

const dynamicEnvironmentId =
  process.env.NEXT_PUBLIC_DYNAMIC_ENVIRONMENT_ID || "";

if (!dynamicEnvironmentId) {
  throw new Error("NEXT_PUBLIC_DYNAMIC_ENVIRONMENT_ID is not set");
}

export function Web3ProvidersDynamic({ children }: { children: ReactNode }) {
  return (
    <DynamicContextProvider
      settings={{
        environmentId: dynamicEnvironmentId,
        walletConnectors: [EthereumWalletConnectors],
      }}
    >
      <Web3ProvidersWagmi>
        <DynamicWagmiConnector>{children}</DynamicWagmiConnector>
      </Web3ProvidersWagmi>
    </DynamicContextProvider>
  );
}
