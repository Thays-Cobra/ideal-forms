import type { IRadioProps } from "./types";
import { parseClassName } from "../../utils/parseClassName";
import * as S from "./styles";

export function Radio({
	value,
	name,
	onChange,
	checked,
	error = false,
	disabled,
	className,
}: IRadioProps) {
	const handleClick = () => {
		onChange(name, value);
	};

	return (
		<S.Wrapper
			data-testid="radio"
			className={parseClassName("Radio", className)}
		>
			<S.Input
				className={parseClassName("Input", className)}
				name={name}
				value={value}
				checked={checked}
				autoComplete="off"
				disabled={disabled}
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
