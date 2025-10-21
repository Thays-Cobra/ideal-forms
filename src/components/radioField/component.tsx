import { Radio } from "../radio";
import { Label } from "../label";

import type { IRadioFieldProps } from "./types";
import * as S from "./styles";

export function RadioField({
	label,
	onChange,
	value,
	options,
	error,
}: IRadioFieldProps) {
	return (
		<S.Wrapper>
			<Label error={error}>{label}</Label>
			<S.ListItems>
				{options.map((option) => (
					<S.Item key={option.value}>
						<Radio
							value={option.value}
							name="profile"
							onChange={onChange}
							checked={value === option.value}
							error={error}
						/>
						<Label error={error}>{option.label}</Label>
					</S.Item>
				))}
			</S.ListItems>
		</S.Wrapper>
	);
}
