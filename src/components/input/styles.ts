import styled, { css } from "styled-components";
import type { TInputVariants } from "./types";
import { VariantsMap } from "./variants";

interface StyledInputProps {
	//controla estilos (ex: primary, secondary)
	$variant: TInputVariants;
	//indica se há erro
	$error?: boolean;
}

export const Input = styled.input<StyledInputProps>`
	${({ theme: { colors }, $variant, $error }) => {
		const variant = VariantsMap[$variant] || VariantsMap.primary;

		return css`
			//estilização default
			color: ${colors[variant.color]};
			background-color: ${colors[variant.bgColor]};
			border: 1px solid ${colors.black};
			padding: 6px;
			border-radius: 4px;
			//color: green; //css
			//color: ${"green"}; // css com ts, caractere de escape

			${$error &&
			css`
				border-color: ${colors.red};
			`}

			&:focus {
				border-color: ${colors[$error ? "red" : "green"]};
			}

			&::placeholder {
				color: ${colors.semiTransparentBlack};
			}

			&:disabled {
				background-color: ${colors.gray};
			}

			&:checked {
				border-color: ${colors[$error ? "red" : "blue"]};
				accent-color: ${colors[$error ? "red" : "blue"]};
			}
		`;
	}}
`;

//estilização de erro nas bordas
/* ${$error &&
			//template literal
			css`
				box-shadow: 0 0 0 3px ${colors.opaqueRed};
				background-color: ${colors.lightRed};
			`} */

//foco quando estiver com o cursor no campo
/* &:focus {
				outline: none;
				border-color: ${$error ? colors.lightRed : "#0f7a6c"};
				box-shadow: 0 0 4px ${$error ? colors.red : "#108d7d"};
			} */
