import type { ThemeColorsType } from "../../config/theme";
import type { TInputVariants } from "./types";

export const VariantsMap: Record<
	TInputVariants,
	{ color: ThemeColorsType; bgColor: ThemeColorsType }
> = {
	primary: {
		color: "black",
		bgColor: "white",
	},
	secondary: {
		color: "black",
		bgColor: "gray",
	},
	tertiary: {
		color: "white",
		bgColor: "lightBlue",
	},
};
