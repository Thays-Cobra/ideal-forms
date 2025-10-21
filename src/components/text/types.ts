import type { ThemeColorsType, ThemeFontsType } from "../../config/theme";

//add propriedades ao componente de texto, precisa exportar!
export interface ITextProps {
	//React.ReactNode = string, um elemento, variável etc (generico)
	children: string | React.ReactNode;
	as?: "span" | "p" | "div" | "label" | "legend" | "h1";
	variant?: ThemeFontsType;
	color?: ThemeColorsType;
	className: string;
}
