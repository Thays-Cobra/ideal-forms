import styled, { css } from "styled-components";

export const Wrapper = styled.div`
	${({ theme: { colors } }) => {
		return css`
			background-color: ${colors.white};
			border-radius: 12px;
			box-shadow: 0 6px 20px ${colors.gray};
			width: 380px;
			padding: 36px 40px;
			text-align: justify;
			display: flex;
			flex-direction: column;
			gap: 10px;

			h1 {
				color: ${colors.darkBlue};
				padding: 20px 0px;
				text-align: center;
				letter-spacing: 1px;
			}

			hr {
				border-color: ${colors.darkBlue};
				margin: 10px 0px;
			}
		`;
	}}
`;
