import type { IInputProps } from "./types";
import { parseClassName } from "../../utils/parseClassName";
import * as S from "./styles";
import { forwardRef } from "react";

export const Input = forwardRef<HTMLInputElement, IInputProps>(
	(
		{
			type,
			value,
			name,
			onChange,
			onBlur,
			variant = "primary",
			error = false,
			className,
			placeholder,
		},
		ref
	) => {
		function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
			if (typeof onChange === "function") onChange(event);
		}

		function handleBlur(event: React.ChangeEvent<HTMLInputElement>) {
			if (typeof onBlur === "function") onBlur(event);
		}

		return (
			<div data-testid="input">
				<S.Input
					ref={ref}
					className={parseClassName("Input", className)}
					type={type}
					name={name}
					value={value}
					onChange={handleChange}
					onBlur={handleBlur}
					$variant={variant}
					$error={error}
					autoComplete="off"
					placeholder={placeholder}
				/>
			</div>
		);
	}
);

//$error={error} = wrop especial do styled-component, se passar o $, elas não são passadas para o DOM, somente css
//error={error} = ts
