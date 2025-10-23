import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
//import { useNavigate, useLocation, useParams } from "react-router-dom";

import { TextField } from "../../components/textField";
import { RadioField } from "../../components/radioField";
import { Button } from "../../components/button";
import { Text } from "../../components/text";
import { validateEmail, validatePassword } from "../login/utils/index";

import * as S from "./styles";

interface IFormState {
	email: string;
	password: string;
	profile: string;
}

//paginas = sempre criar div (para componentes grande)
export function Login() {
	//const location = useLocation();
	//const params = useParams();
	//console.log({ location });
	//console.log({ params });

	const [formData, setFormData] = useState<IFormState>({
		email: "",
		password: "",
		profile: "doctor",
	});

	const [errors, setErrors] = useState<
		Partial<Record<keyof IFormState, string>>
	>({});

	const [touches, setTouches] = useState<
		Record<keyof IFormState & string, boolean>
	>({
		email: false,
		password: false,
		profile: true,
	});

	const navigate = useNavigate();
	const handleClick = () => {
		//colocar validação do erros
		navigate("/welcome");
	};

	const validateErrors = () => {
		const currentErrors = { ...errors };

		Object.keys(formData).forEach((key) => {
			if (!touches[key as keyof typeof touches]) {
				return;
			}

			if (key === "email") {
				currentErrors[key] = validateEmail(formData.email);
			}

			if (key === "password") {
				currentErrors[key] = validatePassword(formData.password);
			}
		});

		setErrors(currentErrors);

		return currentErrors;
	};

	useEffect(() => {
		validateErrors();
	}, [formData]);

	const handleInputChange = (name: string, value: string) => {
		const current = { ...formData };

		current[name as keyof typeof formData] = value;

		setFormData(current);

		if (!touches[name as keyof typeof touches]) {
			const currentTouches = { ...touches };

			currentTouches[name as keyof typeof touches] = true;

			setTouches(currentTouches);
		}
	};

	const isButtonEnabled = useMemo<boolean>(() => {
		if (Object.values(touches).some((touch) => touch === false)) {
			return false;
		}

		if (Object.values(errors).some((error) => typeof error === "string")) {
			return false;
		}

		return true;
	}, [errors, touches]);

	return (
		<S.Wrapper className="LoginPage">
			<Text className="LoginTitleText" as="h1" variant="title100">
				Login
			</Text>
			<hr />
			<TextField
				className="EmailTextField"
				label="E-mail: "
				name="email"
				value={formData.email}
				onChange={handleInputChange}
				error={errors?.email}
			/>

			<TextField
				className="PasswordTextField"
				label="Senha: "
				name="password"
				value={formData.password}
				onChange={handleInputChange}
				error={errors?.password}
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
				disabled={!isButtonEnabled}
			/>
		</S.Wrapper>
	);
}
