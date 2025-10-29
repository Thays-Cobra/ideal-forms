export const ErrorLangs = {
	name: {
		isRequired: "O nome é obrigatório",
		isFormatValid: {
			hasOnlyLetters: "Apenas letras são permitidas",
			startsWithUpperCaseLetters: "Deve começar com letra maiúscula",
			hasMinimumWordsLength: "Mínimo de 2 palavras",
			hasMinimumLettersLength: "Mínimo de 2 letras",
		},
	},
	email: {
		isRequired: "O e-mail é obrigatório",
		isFormatValid: "Formato de e-mail inválido",
	},
	password: {
		isRequired: "A senha é obrigatória",
		isFormatValid: {
			hasSpecialCharacter: "Deve conter um caractere especial",
			hasNumber: "Deve conter um numeral",
			hasUpperCaseCharacter: "Deve conter uma letra maiúscula",
			hasMinimumCharacterLength: "Mínimo de 8 caracteres",
		},
	},
	confirmationPassword: {
		isRequired: "A confirmação da senha é obrigatória",
		isEqual: "As senhas não conferem. Verifique e tente novamente.",
	},
};
