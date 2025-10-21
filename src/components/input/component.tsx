import type { IInputProps } from "./types";

import * as S from "./styles";

export function Input({
	type = "text",
	value,
	name,
	onChange,
	variant = "primary",
	error = false,
}: IInputProps) {
	function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
		const { name, value } = event.target;
		//o onChange vai receber as props name e value
		onChange(name, value);
	}

	return (
		<S.Input
			type={type}
			name={name}
			value={value}
			onChange={handleChange}
			$variant={variant}
			$error={error}
			autoComplete="off"
			//disabled = fazer depois que implementar a condicional de erro
		/>
	);
}

//prop especial do styled-component, se passar o $, elas não são passadas para o DOM, somente css
//error={error} = ts
