export type TInputVariants = "primary" | "secondary" | "tertiary";

//PEGAR EXPLICAÇÃO
export interface IInputProps {
	ref?: React.ForwardedRef<HTMLInputElement>;
	type: "text" | "radio" | "password";
	value?: string;
	name: string;
	onChange?: React.ChangeEventHandler<HTMLInputElement>;
	onBlur?: React.ChangeEventHandler<HTMLInputElement>;
	variant?: TInputVariants;
	error?: boolean;
	className?: string;
	placeholder?: string;
}
