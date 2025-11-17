import { Text } from "../../components/text/index";
import { TextField } from "../../components/textField";
import { Button } from "../../components/button";
import { PageLayout } from "../../components/pageLayout/index";
import { ErrorLangs, PlaceholderLangs, TitleLangs } from "../../langs/index";
import { Wrapper } from "./styles";
import {
	isFormatValid,
	hasMinLength,
} from "../../utils/validateInput/inputValidations";
import type z from "zod";
import { useRegisterSchema } from "./hooks/schema.hook";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Slide, toast } from "react-toastify";

//z.infer<Schema>: função utilitária do Zod que extrai o tipo TypeScript a partir de um schema (z.object, z.string, etc.).
//ReturnType<T>: utilitário do TypeScript que pega o tipo de retorno de uma função.
//typeof useRegisterSchema: pega o tipo da função useRegisterSchema (não executa, só pega o tipo).
//["registerSchema"]: acessa a propriedade registerSchema dentro do tipo retornado pelo hook.
//resumo: pega o tipo da função useRegisterSchema através do ReturnType e do tipo de retorno, pega a prop registerSchema e infere o tipo TypeScript dos dados que ele representa (o formato válido dos dados)
type FormData = z.infer<ReturnType<typeof useRegisterSchema>["registerSchema"]>;

export function RegisterPage() {
	//atribuição da função useRegisterSchema() na variável desestruturada registerSchema
	const { registerSchema } = useRegisterSchema();

	const {
		register,
		watch,
		handleSubmit,
		formState: { errors, isValid },
		reset,
	} = useForm<FormData>({
		resolver: zodResolver(registerSchema),
		mode: "onBlur",
	});

	//implementação do onSubmit para submeter os campos do formulário
	const onSubmit: SubmitHandler<FormData> = (data) => {
		toast.success("Aguarde para novas instruções!", {
			autoClose: 3000,
			transition: Slide,
		});
		reset();
	};

	const passwordValue = watch("password");

	return (
		<PageLayout className="RegisterPage">
			<Text className="RegisterTitleText" as="h1" variant="title100">
				{TitleLangs.registerPage}
			</Text>
			<hr />

			<form onSubmit={handleSubmit(onSubmit)}>
				<TextField
					label="Nome completo:"
					type="text"
					className="NameTextField"
					{...register("name")}
					error={errors.name?.message}
					placeholder={PlaceholderLangs.name}
				/>
				<TextField
					label="E-mail:"
					type="text"
					className="EmailTextField"
					{...register("email")}
					error={errors.email?.message}
					placeholder={PlaceholderLangs.email}
				/>
				<TextField
					label="Senha:"
					type="password"
					className="PasswordTextField"
					{...register("password")}
					error={errors.password?.message}
					placeholder={PlaceholderLangs.password}
				/>
				<Wrapper>
					<Text
						color={
							!passwordValue
								? "darkGray"
								: hasMinLength(8, passwordValue)
								? "green"
								: "red"
						}
					>
						{ErrorLangs.password.isFormatValid.hasMinimumCharacterLength}
					</Text>
					<Text
						color={
							!passwordValue
								? "darkGray"
								: isFormatValid(passwordValue, /[^a-zA-Z0-9\s]/g)
								? "green"
								: "red"
						}
					>
						{ErrorLangs.password.isFormatValid.hasSpecialCharacter}
					</Text>
					<Text
						color={
							!passwordValue
								? "darkGray"
								: isFormatValid(passwordValue, /[0-9]/g)
								? "green"
								: "red"
						}
					>
						{ErrorLangs.password.isFormatValid.hasNumber}
					</Text>
					<Text
						color={
							!passwordValue
								? "darkGray"
								: isFormatValid(passwordValue, /.*[A-Z].*/g)
								? "green"
								: "red"
						}
					>
						{ErrorLangs.password.isFormatValid.hasUpperCaseCharacter}
					</Text>
				</Wrapper>
				<TextField
					label="Confirmar senha:"
					type="password"
					className="confirmationPassword"
					{...register("confirmationPassword")}
					error={errors.confirmationPassword?.message}
					placeholder={PlaceholderLangs.confirmationPassword}
				/>
				<hr />
				<Button
					className="CreateAccountButton"
					label="Criar conta"
					variant="tertiary"
					type="submit"
					disabled={!isValid}
				/>
			</form>
		</PageLayout>
	);
}
