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
			width: auto;
			height: 30px;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			margin: 10px 0px;
			background-color: ${colors[variant.bgColor]};

			//ZdsTextButton
			transition: 240ms;
			cursor: pointer;

			padding: 0px 16px;
			border-radius: 8px;

			.Text {
				color: ${colors[variant.color]};
				display: flex;
				flex-direction: row;
				align-items: center;
			}

			&:hover {
				background-color: ${colors[variant.bgColorHover]};
			}

			/* padding: 10.5px;
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
