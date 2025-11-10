import { useForm, type SubmitHandler } from "react-hook-form";
import { PageLayout } from "../../components/pageLayout";
import { Text } from "../../components/text";
import { PlaceholderLangs, TitleLangs } from "../../langs";
import { Link } from "react-router-dom";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../../components/button";
import { Slide, toast } from "react-toastify";
import { TextField } from "../../components/textField";
import { useForgotPasswordSchema } from "./hooks/schema.hook";

//dados do form
type FormData = z.infer<
	ReturnType<typeof useForgotPasswordSchema>["forgotPasswordSchema"]
>;

export function ForgotPassword() {
	const { forgotPasswordSchema } = useForgotPasswordSchema();

	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
		setError,
		reset,
	} = useForm<FormData>({
		resolver: zodResolver(forgotPasswordSchema),
		mode: "onBlur",
	});
	const onSubmit: SubmitHandler<FormData> = (data) => {
		if (data.email !== "dev@dev.com") {
			return setError("email", {
				message: "O e-mail precisa ser dev@dev.com",
			});
		}
		toast.success("E-mail enviado com sucesso!", {
			autoClose: 3000,
			transition: Slide,
		});
		reset();
	};

	return (
		<PageLayout className="ForgotPasswordPage">
			<Text className="ForgotPasswordText" as="h1" variant="title100">
				{TitleLangs.forgotPassword}
			</Text>
			<hr />

			<form onSubmit={handleSubmit(onSubmit)}>
				<TextField
					label="E-mail:"
					type="text"
					className="ForgotPasswordTextField"
					{...register("email")}
					error={errors.email?.message}
					placeholder={PlaceholderLangs.email}
				/>
				<hr />
				<Button
					className="ForgotPasswordButton"
					label="Enviar"
					type="submit"
					variant="tertiary"
					disabled={!isValid}
				/>
			</form>

			<Link to="/" className="Link">
				Voltar à página de login
			</Link>
		</PageLayout>
	);
}
