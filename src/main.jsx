import ReactDOM from "react-dom/client";
import App from "./App";
import { AppKitProvider } from "./components/provide";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(
  <AppKitProvider>
    <App />
  </AppKitProvider>
);
