import { Input } from "../input";
import { Text } from "../text/component";
import type { ITextFieldProps } from "./types";

export function TextField({
	value,
	name,
	onChange,
	label,
	errors,
}: ITextFieldProps) {
	return (
		<div>
			<Text as="label">{label}</Text>
			<Input value={value} name={name} onChange={onChange} />
			<Text as="p" color="red">
				{errors}
			</Text>
		</div>
	);
}
