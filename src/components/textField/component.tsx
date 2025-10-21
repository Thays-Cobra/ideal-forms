import { Input } from "../input";
import { Text } from "../text";
import { Label } from "../label";
import type { ITextFieldProps } from "./types";
import { parseClassName } from "../../utils/parseClassName";

export function TextField({
	value,
	name,
	onChange,
	label,
	error,
	className,
}: ITextFieldProps) {
	return (
		<div data-testid="textField">
			<Label
				className={parseClassName("TextFieldLabel", className)}
				error={Boolean(error)}
			>
				{label}
			</Label>
			<Input
				className={parseClassName("TextFieldInput", className)}
				value={value}
				name={name}
				onChange={onChange}
				error={Boolean(error)}
			/>
			<Text
				className={parseClassName("TextFieldLabel", className)}
				as="p"
				color="red"
			>
				{error}
			</Text>
		</div>
	);
}
