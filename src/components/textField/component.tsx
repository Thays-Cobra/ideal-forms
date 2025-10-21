import { Input } from "../input";
import { Text } from "../text";
import { Label } from "../label";
import type { ITextFieldProps } from "./types";

export function TextField({
	value,
	name,
	onChange,
	label,
	error,
}: ITextFieldProps) {
	return (
		<div>
			<Label error={Boolean(error)}>{label}</Label>
			<Input
				value={value}
				name={name}
				onChange={onChange}
				error={Boolean(error)}
			/>
			<Text as="p" color="red">
				{error}
			</Text>
		</div>
	);
}
