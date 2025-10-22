export function validateEmail(value: string) {
	if (!value) {
		return "O e-mail é obrigatório";
	}
	if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
		return "Formato de e-mail inválido";
	}
	return "";
}

export function validatePassword(value: string) {
	if (!value) {
		return "A senha é obrigatória";
	}
	return "";
}
