import * as z from "zod";

import { PageLayout } from "../../components/pageLayout";
import { Text } from "../../components/text";
import { PlaceholderLangs, TitleLangs } from "../../langs";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../../components/button";
import { Link, useNavigate } from "react-router-dom";
import { useLoginSchema } from "./hooks/schema.hook";
import { TextField } from "../../components/textField";
import { RadioField } from "../../components/radioField";
import { Slide, toast } from "react-toastify";

//dados do form
type FormData = z.infer<ReturnType<typeof useLoginSchema>["loginSchema"]>;

export function Login() {
	//usando o schema de validação dos campos utilizados
	const { loginSchema } = useLoginSchema();

	//useNavigate() para transitar entre as rotas
	const navigate = useNavigate();

	//chamando as props do hook forms que serão utilizados e o resolver para conectar o HF e o Zod
	const {
		register,
		handleSubmit,
		setError,
		formState: {
			errors, //mensagens automáticas de erro
			isValid, //indica se o formulário é válido
		},
	} = useForm<FormData>({
		resolver: zodResolver(loginSchema), //conecta o zod
		mode: "onBlur", //valida ao "deixar de tocar" o campo
	});

	//implementação do onSubmit para submeter os campos do formulário
	const onSubmit: SubmitHandler<FormData> = (data) => {
		if (data.email !== "dev@dev.com") {
			return setError("email", {
				message: "O e-mail precisa ser dev@dev.com",
			});
		}

		if (data.password !== "senha1234") {
			return setError("password", {
				message: "A senha precisa ser senha1234",
			});
		}

		toast.success("Login realizado com sucesso!", {
			autoClose: 2000,
			transition: Slide,
		});
		navigate("/register");
	};

	return (
		<PageLayout className="LoginPage">
			<Text className="LoginTitleText" as="h1" variant="title100">
				{TitleLangs.loginPage}
			</Text>
			<hr />
			<form onSubmit={handleSubmit(onSubmit)}>
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
				{/* 1 - AJUSTAR VALOR PADRÃO "doctor" */}
				<RadioField
					type="radio"
					label="Perfil:"
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
					{...register("profile")}
				/>
				<hr />
				<Button
					className="LoginButton"
					label="Entrar"
					type="submit"
					variant="tertiary"
					disabled={!isValid}
				/>
			</form>
			<Link to="/forgot-password" className="Link">
				Esqueci minha senha
			</Link>
		</PageLayout>
	);
}
