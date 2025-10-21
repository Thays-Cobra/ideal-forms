import type { IRadioProps } from "./types";

import * as S from "./styles";

export function Radio({
	value,
	name,
	onChange,
	checked,
	error = false,
	disabled,
}: IRadioProps) {
	const handleClick = () => {
		onChange(name, value);
	};

	return (
		<S.Wrapper>
			<S.Input
				type="radio"
				name={name}
				value={value}
				checked={checked}
				autoComplete="off"
				disabled={disabled}
				//disabled = fazer depois que implementar a condicional de erro
			/>
			<S.FakeUnselected
				$error={error}
				$checked={checked}
				onClick={handleClick}
			>
				{checked && <S.FakeSelected $error={error} $checked={checked} />}
			</S.FakeUnselected>
		</S.Wrapper>
	);
}

//prop especial do styled-component, se passar o $, elas não são passadas para o DOM, somente css
//error={error} = ts
