import styled from "styled-components";
import type { ThemeColorsType } from "../../config/theme";

export const Radio = styled.input`
	//${{ theme: { colors } }}

	input:checked {
		border: none;
		outline: 2px solid #ffc0cb;
	}
`;
