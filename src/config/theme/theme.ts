const colors = {
	blue: "#0000FF",
	blueZera: "rgb(28, 124, 249)",
	darkBlue: "rgb(7, 63, 147)",
	lightBlue: "#a8cbe3ff",
	black: "#000000",
	yellow: "#FFFF00",
	pink: "#FF0080",
	red: "#F00",
	opaqueRed: "#FF000033",
	lightRed: "#FFEAEA",
	white: "#FFF",
	purple: "#70F",
	green: "#108d7d",
	waterGreen: "#108d7d",
	gray: "#d7d8db",
	almostBlack: "#333",
};

const fonts = {
	label100: {
		fontSize: "12px",
		fontWeight: "400",
	},
	label200: {
		fontSize: "12px",
		fontWeight: "600",
	},
	title100: {
		fontSize: "20px",
		fontWeight: "400",
	},
	display100: {
		fontSize: "88px",
		fontWeight: "400",
	},
};

//recebe const colors
export const theme = {
	colors,
	fonts,
};

//converte de value (js) para type (ts)
export type ThemeType = typeof theme;

//para conseguir o nome das props do colors, usar keyof
//resultado ThemeColorsType = "blue" | "black"| "yelllow"...
export type ThemeColorsType = keyof typeof colors;
export type ThemeFontsType = keyof typeof fonts;

// Observação:
// 	variaveis, objetos, funcoes, classes, etc = value

// 	types e interfaces = type
