import { Text } from "../text";
import type { ILabelProps } from "./types";
import { parseClassName } from "../../utils/parseClassName";

export function Label({ error, children, className }: ILabelProps) {
	return (
		<div data-testid="label">
			<Text
				className={parseClassName("Label", className)}
				as="label"
				variant="label100"
				color={error ? "red" : "black"}
			>
				{children}
			</Text>
		</div>
	);
}
