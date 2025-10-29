export type TInputVariants = "primary" | "secondary" | "tertiary";

//add propriedades ao componente de input, precisa exportar!
export interface IInputProps {
	type: "text" | "radio" | "password";
	value: string;
	name: string;
	//necessário passar também o name, que usa no onChange
	onChange: (value: string, name: string) => void;
	variant?: TInputVariants;
	error?: boolean;
	className?: string;
	placeholder?: string;
}
