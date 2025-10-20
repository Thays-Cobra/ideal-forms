import type { ThemeColorsType } from "../../config/theme";
import type { TButtonVariants } from "./types";

export const VariantsMap: Record<
	TButtonVariants,
	{
		color: ThemeColorsType;
		bgColor: ThemeColorsType;
		bgColorHover: ThemeColorsType;
	}
> = {
	primary: {
		color: "white",
		bgColor: "green",
		bgColorHover: "lightBlue",
	},
	secondary: {
		color: "black",
		bgColor: "white",
		bgColorHover: "purple",
	},
	tertiary: {
		color: "white",
		bgColor: "blueZera",
		bgColorHover: "darkBlue",
	},
};
