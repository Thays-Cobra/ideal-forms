//import type = interface, type e enums
import type { IInputProps } from "../input/types";

export interface ITextFieldProps extends IInputProps {
	label: string;
	errors?: string;
}
