import type { IButtonProps } from "./types";
import { Text } from "../text";
import { parseClassName } from "../../utils/parseClassName";
import * as S from "./styles";

export function Button({
	type = "button",
	label,
	onClick,
	variant = "primary",
	className,
}: IButtonProps) {
	return (
		<div data-testid="button">
			<S.Button
				className={parseClassName("Button", className)}
				$variant={variant}
				type={type}
				onClick={onClick}
				disabled
			>
				<Text
					className={parseClassName("ButtonText", className)}
					variant="label200"
					as="label"
				>
					{label}
				</Text>
			</S.Button>
		</div>
	);
}
