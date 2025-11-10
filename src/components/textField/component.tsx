import { Input } from "../input";
import { Text } from "../text";
import { Label } from "../label";
import type { ITextFieldProps } from "./types";
import { parseClassName } from "../../utils/parseClassName";
import * as S from "./styles";
import { forwardRef } from "react";

export const TextField = forwardRef<HTMLInputElement, ITextFieldProps>(
	(
		{
			value,
			name,
			onChange,
			label,
			error,
			className,
			type,
			placeholder,
			onBlur,
		},
		ref
	) => {
		return (
			<S.Wrapper
				data-testid="textField"
				className={parseClassName("TextField", className)}
			>
				<Label
					className={parseClassName("TextFieldLabel", className)}
					error={Boolean(error)}
				>
					{label}
				</Label>
				<Input
					ref={ref}
					type={type}
					className={parseClassName("TextFieldInput", className)}
					value={value}
					name={name}
					onChange={onChange}
					onBlur={onBlur}
					error={Boolean(error)}
					placeholder={placeholder}
				/>
				{error ? (
					<Text
						className={parseClassName("TextFieldLabel", className)}
						as="p"
						color="red"
					>
						{error}
					</Text>
				) : null}
			</S.Wrapper>
		);
	}
);
