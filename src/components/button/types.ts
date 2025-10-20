export type TButtonVariants = "primary" | "secondary" | "tertiary";

export interface IButtonProps {
	type?: "button" | "submit";
	label: string;
	onClick: () => void;
	variant?: TButtonVariants;
}
