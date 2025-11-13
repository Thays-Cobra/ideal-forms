import z from "zod";
import { ErrorLangs } from "../../../langs";

export function useForgotPasswordSchema() {
	const forgotPasswordSchema = z.object({
		email: z
			.string()
			.trim()
			.nonempty(ErrorLangs.email.isRequired)
			.regex(
				/^[^\s@]+@[^\s@]+\.[^\s@]+$/,
				ErrorLangs.email.isFormatValid.hasValidEmailFormat
			)
			.min(8, ErrorLangs.email.isFormatValid.hasMinimumLettersLength),
	});
	return { forgotPasswordSchema };
}
