import type { IRadioProps } from "./types";
import { parseClassName } from "../../utils/parseClassName";
import * as S from "./styles";
import { forwardRef } from "react";

export const Radio = forwardRef<HTMLInputElement, IRadioProps>(
	(
		{ value, name, onChange, checked, error = false, disabled, className },
		ref
	) => {
		function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
			if (onChange) onChange(event);
		}

		return (
			<S.Wrapper
				data-testid="radio"
				className={parseClassName("Radio", className)}
			>
				<S.Input
					ref={ref}
					className={parseClassName("Input", className)}
					name={name}
					value={value}
					checked={checked}
					autoComplete="off"
					disabled={disabled}
					onChange={handleChange}
				/>
				<S.FakeUnselected $error={error} $checked={checked}>
					{checked && <S.FakeSelected $error={error} $checked={checked} />}
				</S.FakeUnselected>
			</S.Wrapper>
		);
	}
);
