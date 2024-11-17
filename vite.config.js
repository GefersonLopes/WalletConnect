import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { NodeGlobalsPolyfillPlugin } from "@esbuild-plugins/node-globals-polyfill";
import inject from "@rollup/plugin-inject";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "./src/main.jsx", // Arquivo principal do React
      name: "WalletConnectPlugin", // Nome do objeto global
      fileName: "wallet-connect-plugin",
      formats: ["umd"], // Formato do bundle
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
      plugins: [
        inject({
          process: "process", // Adiciona o polyfill de process
        }),
      ],
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: "globalThis", // Define `global` como `globalThis` para o navegador
      },
      plugins: [
        NodeGlobalsPolyfillPlugin({
          buffer: true,
          process: true,
        }),
      ],
    },
  },
});
