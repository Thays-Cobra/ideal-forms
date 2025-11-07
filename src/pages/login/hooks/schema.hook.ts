import * as z from "zod";
import { ErrorLangs } from "../../../langs";

export function useLoginSchema() {
	//schema de validação dos campos de email, senha e perfil
	const loginSchema = z.object({
		email: z
			.string()
			.nonempty(ErrorLangs.email.isRequired)
			.regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "O formato do e-mail é inválido")
			.min(8, "Mínimo de 8 letras"),
		password: z
			.string()
			.nonempty("A senha é obrigatório")
			.min(8, "Mínimo de 8 caracteres"),
		profile: z.string(),
	});
	return { loginSchema };
}
