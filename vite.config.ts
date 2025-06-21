import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    plugins: [
      tsconfigPaths(),
      react({
        babel: {
          plugins: [["babel-plugin-styled-components", { displayName: true }]]
        }
      }),
      svgr({ include: "**/*.svg" })
    ],
    server: {
      port: parseInt(process.env.VITE_FRONT_PORT_DEV) ?? 8080,
      strictPort: true
    },
    css: {
      modules: {
        scopeBehaviour: "local",
        localsConvention: "camelCase"
      }
    },
    build: {
      rollupOptions: {
        output: {
          minifyInternalExports: false,
          manualChunks: {
            react: ["react", "react-dom/client", "react-router-dom"],
            mobx: ["mobx", "mobx-react", "mobx-react-lite"],
            "styled-components": ["styled-components"]
          }
        }
      },
      chunkSizeWarningLimit: 300
    }
  });
};
