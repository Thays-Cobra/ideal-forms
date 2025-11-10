export interface IRadioProps {
	ref?: React.ForwardedRef<HTMLInputElement>;
	value?: string;
	name: string;
	onChange?: React.ChangeEventHandler<HTMLInputElement>;
	checked?: boolean;
	error?: boolean;
	disabled?: boolean;
	className?: string;
}
