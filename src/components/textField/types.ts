//import type = interface, type e enums
import type { IInputProps } from "../input/types";

export interface ITextFieldProps extends Omit<IInputProps, "error"> {
	label: string;
	error?: string;
	className?: string;
}
