import * as z from "zod";
import { ErrorLangs } from "../../../langs";
import {
	hasMinimumLettersLength,
	hasMinimumWordsLength,
	everyWordStartsWithUpperCase,
	hasMinLength,
	isFormatValid,
} from "../../../utils/validateInput";

export function useRegisterSchema() {
	const registerSchema = z
		.object({
			email: z
				.string()
				.trim()
				.nonempty(ErrorLangs.email.isRequired)
				.regex(
					/^[^\s@]+@[^\s@]+\.[^\s@]+$/,
					ErrorLangs.email.isFormatValid.hasValidEmailFormat
				)
				.min(8, ErrorLangs.email.isFormatValid.hasMinimumLettersLength),
			password: z
				.string()
				.trim()
				.nonempty(ErrorLangs.password.isRequired)
				.refine((value) => {
					return isFormatValid(value, /[^a-zA-Z0-9\s]/g);
				}, ErrorLangs.password.isFormatValid.hasSpecialCharacter)
				.refine((value) => {
					return isFormatValid(value, /[0-9]/g);
				}, ErrorLangs.password.isFormatValid.hasNumber)
				.refine((value) => {
					return isFormatValid(value, /.*[A-Z].*/g);
				}, ErrorLangs.password.isFormatValid.hasUpperCaseCharacter)
				.refine((value) => {
					return hasMinLength(8, value);
				}, ErrorLangs.password.isFormatValid.hasMinimumCharacterLength),
			name: z
				.string()
				.trim()
				.nonempty(ErrorLangs.name.isRequired)
				.regex(
					/^[A-Za-zÀ-ÿ]+(?:\s+[A-Za-zÀ-ÿ]+)*$/u,
					ErrorLangs.name.isFormatValid.hasOnlyLetters
				)
				.refine(everyWordStartsWithUpperCase, {
					message:
						ErrorLangs.name.isFormatValid.startsWithUpperCaseLetters,
				})
				.refine(hasMinimumLettersLength(2), {
					message: ErrorLangs.name.isFormatValid.hasMinimumLettersLength,
				})
				.refine(hasMinimumWordsLength(2), {
					message: ErrorLangs.name.isFormatValid.hasMinimumWordsLength,
				}),
			confirmationPassword: z
				.string()
				.trim()
				.nonempty(ErrorLangs.confirmationPassword.isRequired),
		})
		.refine(
			({ password, confirmationPassword }) =>
				password === confirmationPassword,
			{
				message: ErrorLangs.confirmationPassword.isEqual,
				path: ["confirmationPassword"],
			}
		);
	return { registerSchema };
}
