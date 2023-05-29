import {
	defineConfig,
	presetIcons,
	presetUno,
	presetWebFonts,
	transformerVariantGroup,
} from "unocss";
import extractorSvelte from "@unocss/extractor-svelte";

export default defineConfig({
	extractors: [extractorSvelte()],
	transformers: [transformerVariantGroup()],
	presets: [
		presetIcons(),
		presetUno(),
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
