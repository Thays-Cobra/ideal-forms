import { useEffect, useMemo, useState } from "react";
import { Text } from "../../components/text/index";
import { TextField } from "../../components/textField";
import { Button } from "../../components/button";
import {
	hasMinimumCharacterLength,
	isEqual,
	isFormatValid,
	isRequired,
} from "../../utils/validateInput";
import { PageLayout } from "../../components/pageLayout/index";
import { ErrorLangs, PlaceholderLangs, TitleLangs } from "../../langs/index";
import { Wrapper } from "./styles";
import {
	everyWordStartsWithUpperCase,
	hasMinimumLettersLength,
	hasMinimumWordsLength,
} from "../../utils/validateInput/InputValidations";

interface IFormState {
	name: string;
	email: string;
	password: string;
	confirmationPassword: string;
}

//validator = função que recebe valor do campo (value) e opcionalmente os argumentos extras (...args); retorna string se tiver erro ou undefined se não tiver
//arguments = array de parâmetros extras que passa pra o validator
interface ErrorValidatorItem {
	validator: (value: any, ...args: any[]) => string | undefined;
	arguments: any[];
}

//Record<K, T> cria um objeto cujas chaves são do tipo K e os valores do tipo T
//Partial<...> Torna todas as propriedades opcionais, neste caso, do Record
//useEffect() executa o efeito (função) depois que o componente renderiza
//useMemo() memoriza (cacheia) o valor retornado pela função até que uma das dependências mude

export function RegisterPage() {
	//criação das props de formData que serão usadas
	const [formData, setFormData] = useState<IFormState>({
		name: "",
		email: "",
		password: "",
		confirmationPassword: "",
	});

	//pega todas as chaves do tipo IFormState (strings) e cada uma terá um valor boolean, e o objeto inicial define que cada campo não foi tocado (false)
	const [touches, setTouches] = useState<
		Record<keyof IFormState & string, boolean>
	>({
		email: false,
		name: false,
		password: false,
		confirmationPassword: false,
	});

	//pega todas as chaves do tipo IFormState (strings) e cada uma terá um valor string, e o objeto inicial define prop vazia de mensagens de errors
	const [errors, setErrors] = useState<
		Partial<Record<keyof IFormState, string>>
	>({});

	//a função pega um campo específico do tipo formdata (name, email, password etc) e uma lista de validadores (isRequired, everyWordStartsWithUpperCase etc) e atualiza o estado de erros com a mensagem de erro
	//ele realiza uma cópia de errors e inicia sem erros (hasError = false), mas quando ela fica true, o loop para de checar os outros para não sobrescrever a primeira mensagem; depois, para cada item da list, value recebe a key do formData sendo validada e verifica se o item é uma função, executa o validator e guarda o resultado em currentErrors[key]; se achou o erro (errorState), ele para o looping com hasError = true; retorna o erro em currentErrors
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

	//name as keyof typeof formData = cast para uma chave name válida no formData
	//cria uma cópia de formData, atualiza a prop name com o novo value e atualiza o estado setFormData; verifica se foi tocado, e se não, o campo name recebe true e atualiza setTouches
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

	//percorre todas as chaves do objeto formData (name, email etc); se o campo não foi tocado, pula a validação; valida cada campo com a respectiva função, guarda no currentErrors e atualiza o setErrors
	const validateErrors = () => {
		let currentErrors = { ...errors };

		Object.keys(formData).forEach((key) => {
			if (!touches[key as keyof typeof touches]) {
				return;
			}

			//validar cada palavra com a primeira letra maiúscula, no mínimo 2 palavras, cada palavra com no mínimo 2 letras
			if (key === "name") {
				const nameErrorChanges = errorValidator("name", [
					{
						validator: isRequired,
						arguments: [ErrorLangs.name.isRequired],
					},
					{
						validator: everyWordStartsWithUpperCase,
						arguments: [
							ErrorLangs.name.isFormatValid.startsWithUpperCaseLetters,
						],
					},
					{
						validator: isFormatValid,
						arguments: [
							ErrorLangs.name.isFormatValid.hasOnlyLetters,
							/^[A-Za-zÀ-ÿ]+(?:\s+[A-Za-zÀ-ÿ]+)*$/u,
						],
					},
					{
						validator: hasMinimumLettersLength,
						arguments: [
							ErrorLangs.name.isFormatValid.hasMinimumLettersLength,
							2,
						],
					},
					{
						validator: hasMinimumWordsLength,
						arguments: [
							ErrorLangs.name.isFormatValid.hasMinimumWordsLength,
							2,
						],
					},
				]);
				currentErrors = { ...currentErrors, ...nameErrorChanges };
			}

			if (key === "email") {
				currentErrors[key] = isRequired(
					formData.email,
					ErrorLangs.email.isRequired
				);
				if (!currentErrors[key]) {
					currentErrors[key] = isFormatValid(
						formData.email,
						ErrorLangs.email.isFormatValid,
						/^[^\s@]+@[^\s@]+\.[^\s@]+$/
					);
				}
			}

			if (key === "password") {
				currentErrors[key] = isRequired(
					formData.password,
					ErrorLangs.password.isRequired
				);
			}

			if (key === "confirmationPassword") {
				currentErrors[key] = isRequired(
					formData.confirmationPassword,
					ErrorLangs.confirmationPassword.isRequired
				);

				// if (currentErrors[key]) {
				// 	currentErrors.password = " ";
				// }
				if (!currentErrors[key])
					currentErrors[key] = isEqual(
						formData.confirmationPassword,
						formData.password,
						ErrorLangs.confirmationPassword.isEqual
					);
			}

			if (currentErrors.confirmationPassword && !currentErrors.password) {
				currentErrors.password = " ";
			}
		});

		setErrors(currentErrors);
		return currentErrors;
	};

	//roda a função validateErrors() sempre que formData mudar
	useEffect(() => {
		validateErrors();
	}, [formData]);

	//os objetos touches e errors são transformados em arrays com os valores (ex: [true, false, true] e ["O e-mail é obrigatório", undefined, undefined]); fica desabilitado se pelo menos um valor de touch for falso e/ou um valor de error for string; senão, retorna botão habilitado
	const isButtonEnabled = useMemo<boolean>(() => {
		if (Object.values(touches).some((touch) => touch === false)) {
			return false;
		}

		if (Object.values(errors).some((error) => typeof error === "string")) {
			console.log(
				Object.values(errors).some((error) => typeof error === "string")
			);

			return false;
		}

		return true;
	}, [errors, touches]);

	//implementação handleClick e resetando os estados
	const handleClick = () => {
		alert("Cadastrado com sucesso!");
		setFormData({
			email: "",
			name: "",
			password: "",
			confirmationPassword: "",
		});

		setTouches({
			email: false,
			name: false,
			password: false,
			confirmationPassword: false,
		});

		setErrors({});
	};

	//console.log(formData.password);
	//console.log(formData.confirmationPassword);

	return (
		<PageLayout className="RegisterPage">
			<Text className="RegisterTitleText" as="h1" variant="title100">
				{TitleLangs.registerPage}
			</Text>
			<hr />
			<TextField
				type="text"
				className="NameTextField"
				label="Nome completo:"
				name="name"
				onChange={handleInputChange}
				value={formData.name}
				error={errors?.name}
				placeholder={PlaceholderLangs.name}
			/>
			<TextField
				type="text"
				className="EmailTextField"
				label="E-mail"
				name="email"
				onChange={handleInputChange}
				value={formData.email}
				error={errors?.email}
				placeholder={PlaceholderLangs.email}
			/>
			<TextField
				className="PasswordTextFiel"
				label="Senha:"
				name="password"
				type="password"
				onChange={handleInputChange}
				value={formData.password}
				error={errors?.password}
				placeholder={PlaceholderLangs.password}
			/>
			<Wrapper>
				<Text
					color={
						formData.password
							? isFormatValid(
									formData.password,
									ErrorLangs.password.isFormatValid
										.hasSpecialCharacter,
									/[^a-zA-Z0-9\s]/g
							  )
								? "red"
								: "green"
							: "gray"
					}
				>
					{ErrorLangs.password.isFormatValid.hasSpecialCharacter}
				</Text>
				<Text
					color={
						formData.password
							? isFormatValid(
									formData.password,
									ErrorLangs.password.isFormatValid.hasNumber,
									/[0-9]/g
							  )
								? "red"
								: "green"
							: "gray"
					}
				>
					{ErrorLangs.password.isFormatValid.hasNumber}
				</Text>
				<Text
					color={
						formData.password
							? isFormatValid(
									formData.password,
									ErrorLangs.password.isFormatValid
										.hasUpperCaseCharacter,
									/.*[A-Z].*/g
							  )
								? "red"
								: "green"
							: "gray"
					}
				>
					{ErrorLangs.password.isFormatValid.hasUpperCaseCharacter}
				</Text>
				<Text
					color={
						formData.password
							? hasMinimumCharacterLength(
									formData.password,
									ErrorLangs.password.isFormatValid
										.hasMinimumCharacterLength,
									8
							  )
								? "red"
								: "green"
							: "gray"
					}
				>
					{ErrorLangs.password.isFormatValid.hasMinimumCharacterLength}
				</Text>
			</Wrapper>
			<TextField
				className="PasswordConfirmationTextFiel"
				label="Confirmar senha:"
				name="confirmationPassword"
				type="password"
				onChange={handleInputChange}
				value={formData.confirmationPassword}
				error={errors?.confirmationPassword}
				placeholder={PlaceholderLangs.confirmationPassword}
			/>

			<hr />
			<Button
				className="CreateAccountButton"
				label="Criar conta"
				variant="tertiary"
				disabled={!isButtonEnabled}
				onClick={handleClick}
			/>
		</PageLayout>
	);
}
