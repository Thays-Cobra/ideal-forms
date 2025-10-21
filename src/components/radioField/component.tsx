import { Radio } from "../radio";
import { Label } from "../label";
import { parseClassName } from "../../utils/parseClassName";

import type { IRadioFieldProps } from "./types";
import * as S from "./styles";

export function RadioField({
	label,
	onChange,
	value,
	options,
	error,
	className,
}: IRadioFieldProps) {
	return (
		<S.Wrapper
			data-testid="radioField"
			className={parseClassName("RadioField", className)}
		>
			<Label
				className={parseClassName("RadioFieldLabel", className)}
				error={error}
			>
				{label}
			</Label>
			<S.ListItems
				className={parseClassName("RadioFieldListItems", className)}
			>
				{options.map((option) => (
					<S.Item key={option.value}>
						<Radio
							className={parseClassName("RadioFieldRadio", className)}
							value={option.value}
							name="profile"
							onChange={onChange}
							checked={value === option.value}
							error={error}
						/>
						<Label
							className={parseClassName("RadioFieldLabel", className)}
							error={error}
						>
							{option.label}
						</Label>
					</S.Item>
				))}
			</S.ListItems>
		</S.Wrapper>
	);
}
