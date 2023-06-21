import UnoCSS from "unocss/vite";
import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig, searchForWorkspaceRoot } from "vite";

export default defineConfig({
	plugins: [sveltekit(), UnoCSS()],
	server: {
		fs: {
			allow: [searchForWorkspaceRoot(process.cwd()), "/uploads"],
		},
	},
});
