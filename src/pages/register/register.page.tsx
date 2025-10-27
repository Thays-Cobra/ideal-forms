import { useEffect, useMemo, useState } from "react";
import { Text } from "../../components/text/index";
import { TextField } from "../../components/textField";
import { Button } from "../../components/button";
import {
	validateEmail,
	validateName,
	validatePassword,
} from "../../utils/validateInput";

import { PageLayout } from "../../components/pageLayout/index";

interface IFormState {
	name: string;
	email: string;
	password: string;
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
	});

	//pega todas as chaves do tipo IFormState (strings) e cada uma terá um valor boolean, e o objeto inicial define que cada campo não foi tocado (false)
	const [touches, setTouches] = useState<
		Record<keyof IFormState & string, boolean>
	>({
		email: false,
		name: false,
		password: false,
	});

	//pega todas as chaves do tipo IFormState (strings) e cada uma terá um valor string, e o objeto inicial define prop vazia de mensagens de errors
	const [errors, setErrors] = useState<
		Partial<Record<keyof IFormState, string>>
	>({});

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
		const currentErrors = { ...errors };

		Object.keys(formData).forEach((key) => {
			if (!touches[key as keyof typeof touches]) {
				return;
			}

			if (key === "name") {
				currentErrors[key] = validateName(formData.name);
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
		});

		setTouches({
			email: false,
			name: false,
			password: false,
		});

		setErrors({});
	};

	return (
		<PageLayout className="RegisterPage">
			<Text className="RegisterTitleText" as="h1" variant="title100">
				Formulário de Cadastro
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
			/>
			<TextField
				type="text"
				className="EmailTextField"
				label="E-mail"
				name="email"
				onChange={handleInputChange}
				value={formData.email}
				error={errors?.email}
			/>
			<TextField
				className="PasswordTextFiel"
				label="Senha:"
				name="password"
				type="password"
				onChange={handleInputChange}
				value={formData.password}
				error={errors?.password}
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
