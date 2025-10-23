export type TButtonVariants = "primary" | "secondary" | "tertiary";

export interface IButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	label: string;
	variant?: TButtonVariants;
	className: string;
}
