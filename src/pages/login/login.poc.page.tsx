import * as z from "zod";

import { PageLayout } from "../../components/pageLayout";
import { Text } from "../../components/text";

import { TitleLangs } from "../../langs";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../../components/button";
import { Link, useNavigate } from "react-router-dom";
import { useLoginSchema } from "./hooks/schema.hook";
import { TextField } from "../../components/textField";

//dados do form
type FormData = z.infer<ReturnType<typeof useLoginSchema>["loginSchema"]>;

export function Login() {
	const { loginSchema } = useLoginSchema();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>({
		resolver: zodResolver(loginSchema),
	});

	const onSubmit: SubmitHandler<FormData> = (data) => console.log(data);

	const navigate = useNavigate();
	const handleClick =
		(path: string): React.MouseEventHandler<HTMLButtonElement> =>
		() => {
			navigate(path);
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
					{...register("email")}
					error={errors.email?.message}
				/>
				<TextField
					label="Senha:"
					type="password"
					{...register("password")}
					error={errors.password?.message}
				/>
				<hr />

				<Button
					className="LoginButton"
					label="Entrar"
					type="submit"
					variant="tertiary"
					onClick={handleClick("/register")}
					//disabled={!isButtonEnabled}
				/>
			</form>
			<Link to="/forgot-password" className="Link">
				Esqueci minha senha
			</Link>
		</PageLayout>
	);
}
