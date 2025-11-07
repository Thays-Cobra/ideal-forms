export interface IRadioProps {
	value: string;
	//value?: string;
	name: string;
	onChange: (value: string, name: string) => void;
	//onChange?: React.ChangeEventHandler<HTMLEmbedElement>;
	checked?: boolean;
	error?: boolean;
	disabled?: boolean;
	className?: string;
}
