import { useState } from "react";
import { useNavigate } from "react-router-dom";
//import { useNavigate, useLocation, useParams } from "react-router-dom";

import { TextField } from "../../components/textField";
import { RadioField } from "../../components/radioField";
import { Button } from "../../components/button";
import { Text } from "../../components/text";
import { validateEmail, validatePassword } from "../login/utils/index";

import * as S from "./styles";

//paginas = sempre criar div (para componentes grande)
export function Login() {
	const navigate = useNavigate();
	const handleClick = () => {
		navigate("/welcome");
	};
	//const location = useLocation();
	//const params = useParams();
	//console.log({ location });
	//console.log({ params });

	const [formData, setFormData] = useState({
		email: "",
		password: "",
		profile: "doctor",
	});
	const [errors, setErrors] = useState({
		email: "",
		password: "",
	});

	const handleInputChange = (name: string, value: string) => {
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));

		// Validação imediata no onChange
		let errorMessage = "";
		if (name === "email") {
			errorMessage = validateEmail(value);
		} else if (name === "password") {
			errorMessage = validatePassword(value);
		}

		setErrors((prev) => ({
			...prev,
			[name]: errorMessage,
		}));
	};

	return (
		<S.Wrapper className="LoginPage">
			<Text
				className="LoginTitleText"
				as="h1"
				color="purple"
				variant="title100"
			>
				Login
			</Text>
			<hr />
			<TextField
				className="EmailTextField"
				label="E-mail: "
				name="email"
				value={formData.email}
				onChange={handleInputChange}
				error={errors.email}
			/>

			<TextField
				className="PasswordTextField"
				label="Senha: "
				name="password"
				value={formData.password}
				onChange={handleInputChange}
				error={errors.password}
			/>

			<RadioField
				className="ProfileRadioField"
				options={[
					{
						label: "Médico",
						value: "doctor",
						className: "DoctorRadio",
					},
					{
						label: "Administrador",
						value: "admin",
						className: "AdminRadio",
					},
					{
						label: "Paciente",
						value: "patient",
						className: "PatientRadio",
					},
				]}
				value={formData.profile}
				name="profile"
				label="Perfil:"
				onChange={handleInputChange}
			/>
			<hr />
			<Button
				className="LoginButton"
				label="Entrar"
				onClick={handleClick}
				variant="tertiary"
			/>
		</S.Wrapper>
	);
}
