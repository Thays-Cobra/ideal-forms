import type { IInputProps } from "./types";
import { parseClassName } from "../../utils/parseClassName";
import * as S from "./styles";

export function Input({
	type,
	value,
	name,
	onChange,
	variant = "primary",
	error = false,
	className,
}: IInputProps) {
	function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
		const { name, value } = event.target;
		//o onChange vai receber as props name e value
		onChange(name, value);
	}

	return (
		<div data-testid="input">
			<S.Input
				className={parseClassName("Input", className)}
				type={type}
				name={name}
				value={value}
				onChange={handleChange}
				$variant={variant}
				$error={error}
				autoComplete="off"
			/>
		</div>
	);
}

//$error={error} = rop especial do styled-component, se passar o $, elas não são passadas para o DOM, somente css
//error={error} = ts
