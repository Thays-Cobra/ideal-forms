//add propriedades ao componente de input, precisa exportar!
export interface IRadioProps {
	value: string;
	name: string;
	//necessário passar também o name, que usa no onChange
	onChange: (value: string, name: string) => void;
	checked?: boolean;
	error?: boolean;
	disabled?: boolean;
}
