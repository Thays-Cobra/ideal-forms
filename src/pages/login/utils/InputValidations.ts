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

	return undefined;
}
