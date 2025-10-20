import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		watch: {
			usePolling: true, // força detectar mudanças em sistemas de arquivo como Docker ou rede
		},
		hmr: {
			protocol: "ws",
			host: "localhost",
			port: 5173, // ou o que tu usa
		},
	},
});
