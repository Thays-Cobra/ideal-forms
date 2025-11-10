import * as z from "zod";
import { ErrorLangs } from "../../../langs";

export function useLoginSchema() {
	//schema de validação dos campos de email, senha e perfil
	const loginSchema = z.object({
		email: z
			.string()
			.nonempty(ErrorLangs.email.isRequired)
			.regex(
				/^[^\s@]+@[^\s@]+\.[^\s@]+$/,
				ErrorLangs.email.isFormatValid.hasValidEmailFormat
			)
			.min(8, ErrorLangs.email.isFormatValid.hasMinimumLettersLength),
		password: z
			.string()
			.nonempty(ErrorLangs.password.isRequired)
			.min(8, ErrorLangs.password.isFormatValid.hasMinimumCharacterLength),
		profile: z.string(),
	});
	return { loginSchema };
}
