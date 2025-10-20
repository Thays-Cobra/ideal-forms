import { Input } from "../input";
import { Text } from "../text";
import type { IRadioFieldProps } from "./types";

export function RadioField({
	label,
	onChange,
	value,
	options,
}: IRadioFieldProps) {
	return (
		<div>
			<Text as="p">{label}</Text>
			{options.map((option) => (
				<div key={option.value}>
					<Input
						type="radio"
						value={option.value}
						name="profile"
						onChange={onChange}
						checked={value === option.value}
					/>
					<Text as="label">{option.label}</Text>
				</div>
			))}
		</div>
	);
}
