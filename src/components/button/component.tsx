import type { IButtonProps } from "./types";

import * as S from "./styles";
import { Text } from "../text";

export function Button({
	type = "button",
	label,
	onClick,
	variant = "primary",
}: IButtonProps) {
	return (
		<S.Button $variant={variant} type={type} onClick={onClick} disabled>
			<Text variant="label200" as="label">
				{label}
			</Text>
		</S.Button>
	);
}
