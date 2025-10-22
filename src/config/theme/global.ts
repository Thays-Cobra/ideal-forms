import { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    ${({ theme: { colors } }) => {
			return css`
				* {
					//reset
					margin: 0;
					padding: 0;
					box-sizing: border-box;
					font-family: "Bricolage Grotesque", sans-serif;
					//contorno fora da borda
					outline: none;
				}

				body {
					font-weight: 400;
					font-style: normal;
					display: flex;
					flex-direction: column;
					justify-content: center; /* Centraliza horizontalmente */
					align-items: center; /* Centraliza verticalmente */
					height: 100vh; /* Define a altura para a centralização vertical */
					background-color: ${colors.ghostWhite};
				}
			`;
		}}
`;
