import styled, { css } from "styled-components";

interface StyledInputProps {
	$error?: boolean;
	$checked?: boolean;
}

export const Wrapper = styled.div`
	display: flex;
	width: min-content;
	height: min-content;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const Input = styled.input`
	margin: 0px;
	outline: 0px;
	padding: 0px;
	border: 0px;
	position: absolute;
	pointer-events: none;
	opacity: 0;
	width: 0px;
	height: 0px;
`;

export const FakeUnselected = styled.div<StyledInputProps>`
	${({ theme: { colors }, $error, $checked }) => {
		const mainColor = $error ? "red" : $checked ? "blueZera" : "gray";

		return css`
			//estilização default
			margin: 0px;
			outline: 0px;
			padding: 0px;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;

			width: 20px;
			height: 20px;
			padding: 3px;

			border-radius: 50%;
			background-color: ${colors.white};
			border: 2px solid;
			border-color: ${colors[mainColor as keyof typeof colors]};
		`;
	}}
`;

export const FakeSelected = styled.div<StyledInputProps>`
	${({ theme: { colors }, $error, $checked }) => {
		const mainColor = $error ? "red" : $checked ? "blueZera" : "white";
		return css`
			//estilização default
			margin: 0px;
			outline: 0px;
			padding: 0px;
			display: block;

			width: 100%;
			height: 100%;

			border-radius: 50%;
			background-color: ${colors[mainColor as keyof typeof colors]};
		`;
	}}
`;
