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
			console.log("aaaa");
			if (onChange) onChange(event);
		}

		const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
			if (typeof onChange === "function") {
				onChange({
					...event,
					target: {
						...event.target,
						name,
						value,
					},
				} as any);
			}
		};

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
);
