export interface IRadioProps {
	value: string;
	name: string;
	onChange: (value: string, name: string) => void;
	checked?: boolean;
	error?: boolean;
	disabled?: boolean;
	className: string;
}
