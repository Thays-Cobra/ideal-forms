import { parseClassName } from "../../utils/parseClassName";
import type { IFormProps } from "./types";

export function Form({ className, children }: IFormProps) {
	return (
		<div data-testid="form">
			<Form className={parseClassName("Form", className)}>{children}</Form>
		</div>
	);
}
