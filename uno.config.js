import { defineConfig, presetIcons, presetUno, presetWebFonts, transformerVariantGroup } from "unocss";
import extractorSvelte from "@unocss/extractor-svelte";
import { presetForms } from "@julr/unocss-preset-forms";

export default defineConfig({
	extractors: [extractorSvelte()],
	transformers: [transformerVariantGroup()],
	presets: [
		presetIcons(),
		presetUno(),
		presetForms({ strategy: "base" }),
		presetWebFonts({
			provider: "google",
			fonts: {
				opensans: [
					{
						name: "Open Sans",
						weights: ["300", "400", "500"],
					},
				],
				roboto: [
					{
						name: "Roboto",
						weights: ["300", "400", "500"],
					},
				],
			},
		}),
	],
});
