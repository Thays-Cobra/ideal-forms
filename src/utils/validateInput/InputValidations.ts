export function validateEmail(value: string): string | undefined {
	if (!value) {
		return "O e-mail é obrigatório";
	}

	if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
		return "Formato de e-mail inválido";
	}
	return undefined;
}

export function validatePassword(value: string): string | undefined {
	if (!value) {
		return "A senha é obrigatória";
	}

	if (value.length < 6) {
		return "Mínimo de 6 caracteres";
	}

	return undefined;
}

export function validateName(value: string): string | undefined {
	if (!value) {
		return "O nome é obrigatório";
	}

	if (!/^[A-Za-zÀ-ú\s]+$/i.test(value)) {
		return "Apenas letras são permitidas";
	}

	if (value.trim().length < 3) {
		return "Mínimo de 3 letras";
	}

	return undefined;
}
