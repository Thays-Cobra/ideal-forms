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
			row-gap: 20px;

			.LoginTitleText {
				color: ${colors.darkBlue};
				padding: 0px;
				text-align: center;
				letter-spacing: 1px;
			}

			hr {
				border-color: ${colors.darkBlue};
			}
		`;
	}}
`;
