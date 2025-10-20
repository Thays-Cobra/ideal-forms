import styled, { css } from "styled-components";

import type { TButtonVariants } from "./types";
import { VariantsMap } from "./variants";

interface StyledButtonProps {
	$variant: TButtonVariants;
}
export const Button = styled.button<StyledButtonProps>`
	${({ theme: { colors }, $variant }) => {
		const variant = VariantsMap[$variant] || VariantsMap.primary;

		return css`
			background-color: ${colors[variant.bgColor]};

			//ZdsTextButton
			display: flex;
			align-items: center;
			flex-direction: column;
			transition: 240ms;
			cursor: pointer;
			justify-content: center;
			width: initial;
			height: 40px;
			padding-right: 16px;
			padding-left: 16px;
			margin: 7px;
			border-radius: 8px;

			&:hover {
				background-color: ${colors[variant.bgColorHover]};
			}

			.Text {
				color: ${colors[variant.color]};
			}
			/* padding: 10.5px;
			margin: 15px 5px;
			border: none;
			border-radius: 4px;

			width: 75px;
			font-weight: 600;
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 10px;
			*/

			/* p {
				color: cyan;
			}

			div p {
				color: green;
			}

			p:hover {
				background: orange;
			}

			&:disabled {
				background: grey;
			}

			&:disabled:hover {
				background: brown;
			} */
		`;
	}}
`;
