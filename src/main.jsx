import ReactDOM from "react-dom/client";
import WalletConnectButton from "./components/walletConnectButton";

// Função para renderizar o botão WalletConnect
function renderWalletConnectButton(elementId) {
  const rootElement = document.getElementById(elementId);
  if (!rootElement) {
    console.error(`Element with ID "${elementId}" not found.`);
    return;
  }

  // Renderiza o componente no elemento fornecido
  const root = ReactDOM.createRoot(rootElement);
  root.render(<WalletConnectButton />);
}

// Verifica se estamos em desenvolvimento para renderizar diretamente na página
if (import.meta.env.MODE === "development") {
  const rootElement = document.getElementById("root");
  if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(<WalletConnectButton />);
  }
}

// Expõe a função no escopo global para uso em projetos externos
if (typeof window !== "undefined") {
  window.WalletConnectPlugin = { renderWalletConnectButton };
}
