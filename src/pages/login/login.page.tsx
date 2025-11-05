import { useState, useEffect, useMemo } from "react";
import { useNavigate, Link } from "react-router-dom";
//import { useLocation, useParams } from "react-router-dom";

import { TextField } from "../../components/textField";
import { RadioField } from "../../components/radioField";
import { Button } from "../../components/button";
import { Text } from "../../components/text";

import { PageLayout } from "../../components/pageLayout/index";
import {
	hasMinimumLettersLength,
	isFormatValid,
	isRequired,
} from "../../utils/validateInput/InputValidations";
import { ErrorLangs, PlaceholderLangs, TitleLangs } from "../../langs/index";

interface IFormState {
	email: string;
	password: string;
	profile: string;
}

interface ErrorValidatorItem {
	validator: (value: any, ...args: any[]) => string | undefined;
	arguments: any[];
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

	const errorValidator = (
		key: keyof typeof formData,
		list: ErrorValidatorItem[]
	) => {
		const currentErrors = { ...errors };
		let hasError = false;
		list.forEach((item) => {
			if (!hasError) {
				const value = formData[key];
				if (typeof item.validator === "function") {
					const errorState = item.validator(value, ...item.arguments);
					currentErrors[key] = errorState;
					if (errorState) {
						hasError = true;
					}
				}
			}
		});
		return currentErrors;
	};

	//handleClick para mais de um botão
	const navigate = useNavigate();
	const handleClick =
		(path: string): React.MouseEventHandler<HTMLButtonElement> =>
		() => {
			navigate(path);
		};

	const validateErrors = () => {
		let currentErrors = { ...errors };

		Object.keys(formData).forEach((key) => {
			if (!touches[key as keyof typeof touches]) {
				return;
			}

			if (key === "email") {
				const emailErrorChanges = errorValidator("email", [
					{
						validator: isRequired,
						arguments: [ErrorLangs.email.isRequired],
					},
					{
						validator: isFormatValid,
						arguments: [
							ErrorLangs.email.isFormatValid.hasValidEmailFormat,
							/^[^\s@]+@[^\s@]+\.[^\s@]+$/,
						],
					},
					{
						validator: hasMinimumLettersLength,
						arguments: [
							ErrorLangs.email.isFormatValid.hasMinimumLettersLength,
							8,
						],
					},
				]);

				currentErrors = { ...currentErrors, ...emailErrorChanges };
			}

			if (key === "password") {
				const passwordErrorChanges = errorValidator("password", [
					{
						validator: isRequired,
						arguments: [ErrorLangs.password.isRequired],
					},
					{
						validator: hasMinimumLettersLength,
						arguments: [
							ErrorLangs.password.isFormatValid
								.hasMinimumCharacterLength,
							8,
						],
					},
				]);

				currentErrors = { ...currentErrors, ...passwordErrorChanges };
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
			{/* Link: A progressively enhanced <a href> wrapper to enable navigation with client-side routing.  */}
			<Link to="/forgot-password" className="Link">
				Esqueci minha senha
			</Link>
		</PageLayout>
	);
}
