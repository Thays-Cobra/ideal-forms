import { useForm, type SubmitHandler } from "react-hook-form";
import { PageLayout } from "../../components/pageLayout";
import { Text } from "../../components/text";
import { TitleLangs } from "../../langs";
import { Link } from "react-router-dom";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

//schema de validação do e-mail
const forgotPasswordSchema = z.object({
	email: z
		.string()
		.min(1, "O e-mail é obrigatório")
		.email("Formato de e-mail inválido"),
});

//dados do form
type FormData = z.infer<typeof forgotPasswordSchema>;

//usando o schema forgotPasswordSchema no useForm()
export function ForgotPassword() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>({
		resolver: zodResolver(forgotPasswordSchema),
	});
	const onSubmit: SubmitHandler<FormData> = (data) => console.log(data);

	return (
		<PageLayout className="ForgotPasswordPage">
			<Text className="ForgotPasswordText" as="h1" variant="title100">
				{TitleLangs.forgotPassword}
			</Text>
			<hr />

			<form onSubmit={handleSubmit(onSubmit)}>
				<Text>E-mail: </Text>
				<input {...register("email")} />
				{errors.email && (
					<p style={{ color: "red" }}>{errors.email.message}</p>
				)}
				<hr />
				<input type="submit" value="Enviar" />
			</form>

			<Link to="/">Voltar à página de login</Link>
		</PageLayout>
	);
}
