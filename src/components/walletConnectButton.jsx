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
        analytics: true,
      },
    });
  }, []);

  return <appkit-button />;
}

export default WalletConnectButton;
