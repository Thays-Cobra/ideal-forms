import { useState } from "react";
import { Text } from "../../components/text/index";
import { TextField } from "../../components/textField";

interface IFormState {
	name: string;
	email: string;
	password: string;
}

export function RegisterPage() {
	const [formData, setFormData] = useState<IFormState>({
		name: "",
		email: "",
		password: "",
	});

	//PRECISA IMPLEMENTAR
	const handleInputChange = () => {};

	return (
		<div className="RegisterPage">
			<Text className="RegisterTitleText" as="h1" variant="title100">
				Formulário de Cadastro
			</Text>
			<hr />
			<TextField
				className="NameTextField"
				label="Nome:"
				name="name"
				onChange={handleInputChange}
				value={formData.name}
				//error={errors?.email}
			/>
		</div>
	);
}
