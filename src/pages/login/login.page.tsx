import { useState, useEffect, useMemo } from "react";
import { useNavigate, Link } from "react-router-dom";
//import { useLocation, useParams } from "react-router-dom";

import { TextField } from "../../components/textField";
import { RadioField } from "../../components/radioField";
import { Button } from "../../components/button";
import { Text } from "../../components/text";

import { PageLayout } from "../../components/pageLayout/index";
import { isRequired } from "../../utils/validateInput/InputValidations";
import { ErrorLangs, PlaceholderLangs, TitleLangs } from "../../langs/index";

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

	//handleClick para mais de um botão
	const navigate = useNavigate();
	const handleClick =
		(path: string): React.MouseEventHandler<HTMLButtonElement> =>
		() => {
			navigate(path);
		};

	const validateErrors = () => {
		const currentErrors = { ...errors };

		Object.keys(formData).forEach((key) => {
			if (!touches[key as keyof typeof touches]) {
				return;
			}

			if (key === "email") {
				currentErrors[key] = isRequired(
					formData.email,
					ErrorLangs.email.isRequired
				);
				// currentErrors[key] = isFormatValid(
				// 	formData.email,
				// 	ErrorLangs.email.isFormatValid,
				// 	/^[^\s@]+@[^\s@]+\.[^\s@]+$/
				// );
			}

			if (key === "password") {
				currentErrors[key] = isRequired(
					formData.password,
					ErrorLangs.password.isRequired
				);
				// currentErrors[key] = isFormatValid(
				// 	formData.password,
				// 	ErrorLangs.password.isFormatValid.hasSpecialCharacter,
				// 	/[^a-zA-Z0-9\s]/g
				// );
				// currentErrors[key] = isFormatValid(
				// 	formData.password,
				// 	ErrorLangs.password.isFormatValid.hasNumber,
				// 	/[0-9]/g
				// );
				// currentErrors[key] = isFormatValid(
				// 	formData.password,
				// 	ErrorLangs.password.isFormatValid.hasUpperCaseCharacter,
				// 	/.*[A-Z].*/g
				// );
				// currentErrors[key] = hasMinimumCharacterLength(
				// 	formData.password,
				// 	ErrorLangs.password.isFormatValid.hasMinimumCharacterLength,
				// 	8
				// );
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
		<PageLayout className="LoginPage">
			<Text className="LoginTitleText" as="h1" variant="title100">
				{TitleLangs.loginPage}
			</Text>
			<hr />
			<TextField
				type="text"
				className="EmailTextField"
				label="E-mail: "
				name="email"
				value={formData.email}
				onChange={handleInputChange}
				error={errors?.email}
				placeholder={PlaceholderLangs.email}
			/>

			<TextField
				type="password"
				className="PasswordTextField"
				label="Senha: "
				name="password"
				value={formData.password}
				onChange={handleInputChange}
				error={errors?.password}
				placeholder={PlaceholderLangs.password}
			/>

			<RadioField
				type="radio"
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
				onClick={handleClick("/register")}
				variant="tertiary"
				disabled={!isButtonEnabled}
			/>
			<Link to="/forgot-password">Esqueci minha senha</Link>
		</PageLayout>
	);
}
