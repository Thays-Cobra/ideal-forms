import styled, { css } from "styled-components";
import type { ThemeColorsType, ThemeFontsType } from "../../config/theme";

interface StyledTextProps {
	//$ = duplica e segue a vida na render
	$variant: ThemeFontsType;
	$color: ThemeColorsType;
}

//automaticamente ele troca tag pelo "as"
export const Text = styled.p<StyledTextProps>`
	${({ theme: { colors, fonts }, $variant, $color }) => {
		const font = fonts[$variant] || fonts.label100;

		return css`
			color: ${colors[$color]};
			font-size: ${font.fontSize};
			font-weight: ${font.fontWeight};
			height: 100%;
		`;
	}}
`;
