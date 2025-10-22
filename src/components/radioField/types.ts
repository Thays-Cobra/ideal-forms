import type { IInputProps } from "../input";

export interface IRadioFieldProps extends IInputProps {
	label: string;
	options: IRadioItem[];
}

export interface IRadioItem {
	value: string;
	label: string;
	className: string;
}
