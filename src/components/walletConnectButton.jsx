import { useEffect } from "react";
import { createAppKit } from "@reown/appkit/react";
import { Ethers5Adapter } from "@reown/appkit-adapter-ethers5";
import { mainnet, arbitrum } from "@reown/appkit/networks";

function WalletConnectButton() {
  useEffect(() => {
    const projectId = "31311badff05f0661d793986d1cdc1a1";

    const metadata = {
      name: "My Website",
      description: "My Website description",
      url: "https://mywebsite.com",
      icons: ["https://avatars.mywebsite.com/"],
    };

    createAppKit({
      adapters: [new Ethers5Adapter()],
      metadata: metadata,
      networks: [mainnet, arbitrum],
      projectId,
      features: {
        email: false,
        socials: false,
        emailShowWallets: false,
      },
      themeMode: "dark",
      themeVariables: {
        "--w3m-accent": "#0E131D",
      },
      featuredWalletIds: [
        "c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96", // Colocando MetaMask
      ],
      enableWalletConnect: false,
      enableCoinbase: false,
      allWallets: "HIDE",
      excludeWalletIds: [
        "b59c98909bda10180d680f600d49556ff3fc69ba21f56c1480dc50b0aa19b819", // Removendo Trust Wallet
        "e254b137adab566709826dc799fa296e37e4b8a6e51127382d17b39168353b1b", // Removendo Coinbase
        "20c15bd9ea127d47f5f3ae317df35e6a0f63af9c2607f897285f15b63b7b8a25", // Removendo WalletConnect
      ],
      
    });
  }, []);

  return <appkit-button />;
}

export default WalletConnectButton;
