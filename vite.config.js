import { sveltekit } from "@sveltejs/kit/vite";
import unocss from "unocss/vite";
import { searchForWorkspaceRoot } from "vite";
import { defineConfig } from "vitest/config";

export default defineConfig({
	plugins: [sveltekit(), unocss()],
	server: { fs: { allow:[searchForWorkspaceRoot(process.cwd()), "/uploads"] }},
	test: {include: ["src/**/*.{test,spec}.{js,ts}"]}
});
