import { Text } from "../text";

import type { ILabelProps } from "./types";

export function Label({ error, children }: ILabelProps) {
	return (
		<Text as="label" variant="label100" color={error ? "red" : "black"}>
			{children}
		</Text>
	);
}
