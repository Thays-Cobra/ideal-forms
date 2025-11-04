import { useForm, type SubmitHandler } from "react-hook-form";
import { PageLayout } from "../../components/pageLayout";
import { Text } from "../../components/text";
import { TitleLangs } from "../../langs";
import { Link } from "react-router-dom";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../../components/button";
import { toast } from "react-toastify";

//schema de validação do e-mail
const forgotPasswordSchema = z.object({
	email: z.email("Formato de e-mail inválido"),
});

//dados do form
type FormData = z.infer<typeof forgotPasswordSchema>;

//usando o schema forgotPasswordSchema no useForm()
export function ForgotPassword() {
	const {
		register,
		handleSubmit,
		formState: { errors },
		setError,
	} = useForm<FormData>({
		resolver: zodResolver(forgotPasswordSchema),
	});
	const onSubmit: SubmitHandler<FormData> = (data) => {
		if (data.email !== "dev@dev.com") {
			return setError("email", {
				message: "O e-mail precisa ser dev@dev.com",
			});
		}
		toast.success("Sua senha é 1234");
	};

	return (
		<PageLayout className="ForgotPasswordPage">
			<Text className="ForgotPasswordText" as="h1" variant="title100">
				{TitleLangs.forgotPassword}
			</Text>
			<hr />

			<form onSubmit={handleSubmit(onSubmit)}>
				<Text>E-mail:</Text>
				<input {...register("email")} />
				{errors.email && (
					<p style={{ color: "red" }}>{errors.email.message}</p>
				)}
				<hr />
				<Button
					className="ForgotPasswordButton"
					label="Enviar"
					type="submit"
					variant="tertiary"
					//onClick={handleClick}
					//disabled={!isButtonEnabled}
					//disabled
				/>
			</form>

			<Link to="/" className="Link">
				Voltar à página de login
			</Link>
		</PageLayout>
	);
}
