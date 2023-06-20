import "@rainbow-me/rainbowkit/styles.css";
import {
  RainbowKitProvider,
  lightTheme,
  darkTheme,
  connectorsForWallets,
} from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { mainnet, polygon, optimism, arbitrum } from "wagmi/chains";
import { infuraProvider } from "wagmi/providers/infura";
import { publicProvider } from "wagmi/providers/public";
import {
  coinbaseWallet,
  injectedWallet,
  rainbowWallet,
  walletConnectWallet,
  metaMaskWallet,
  trustWallet,
} from "@rainbow-me/rainbowkit/wallets";

const INFURA_ID = process.env.NEXT_PUBLIC_INFURA_ID as string;
const WALLET_CONNECT_PROJECT_ID = process.env
  .NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID as string;

const { chains, provider } = configureChains(
  [mainnet, polygon, optimism, arbitrum],
  [infuraProvider({ apiKey: INFURA_ID }), publicProvider()]
);

const connectors = connectorsForWallets([
  {
    groupName: "Recommended",
    wallets: [
      injectedWallet({ chains }),
      rainbowWallet({ projectId: WALLET_CONNECT_PROJECT_ID, chains }),
      walletConnectWallet({ projectId: WALLET_CONNECT_PROJECT_ID, chains }),
      metaMaskWallet({ projectId: WALLET_CONNECT_PROJECT_ID, chains }),
      coinbaseWallet({ appName: "Template App", chains }),
      trustWallet({ projectId: WALLET_CONNECT_PROJECT_ID, chains }),
    ],
  },
]);

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

export const WalletConnectionProvider = (props: {
  children: React.ReactNode;
}) => {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider
        chains={chains}
        theme={{
          lightMode: lightTheme({
            accentColor: "#661AE6",
          }),
          darkMode: darkTheme({
            accentColor: "#661AE6",
          }),
        }}
      >
        {props.children}
      </RainbowKitProvider>
    </WagmiConfig>
  );
};
