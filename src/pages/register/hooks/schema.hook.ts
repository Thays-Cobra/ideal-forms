import * as z from "zod";
import { ErrorLangs } from "../../../langs";

export function useRegisterSchema() {
	const registerSchema = z.object({
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
	});
	return { registerSchema };
}
