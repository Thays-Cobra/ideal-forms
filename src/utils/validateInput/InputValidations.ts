export const isFormatValid = (
	value: string,
	message: string,
	regex: RegExp
): string | undefined => {
	if (!regex.test(value.trim())) {
		return message;
	}
	return undefined;
};

export const hasMinimumCharacterLength = (
	value: string,
	message: string,
	minimumLength: number
): string | undefined => {
	if (value.length < minimumLength) {
		return message;
	}
	return undefined;
};

export const isRequired = (
	value: string,
	message: string
): string | undefined => {
	if (!value) {
		return message;
	}
	return undefined;
};

export const isEqual = (
	value: string,
	compareValue: string,
	message: string
): string | undefined => {
	if (value !== compareValue) {
		return message;
	}
	return undefined;
};

//essa função recebe um value e retorna true/false; se o value for inválido, retorna false; senão, ele pega a primeira letra digitada, deixa minúscula, e faz uma comparação se a letra originalmente era minúscula; se sim, retorna false, senão retorna true
const startsWithUpperCase = (value: string): boolean => {
	if (!value) return false;
	const char = value.trim()[0];
	const lowerChar = char.toLowerCase();
	return char !== lowerChar;
};

//essa função recebe um value e uma message e retorna uma string ou undefined; se o value for inválido, retorna undefined; senão, ele separa o value em um array de acordo com o " " (espaço) e verifica com a função startsWithUpperCase se cada elemento do array retorna true/false; se for true, ele retorna undefined, se for false retorna message
export const everyWordStartsWithUpperCase = (
	value: string,
	message: string
): string | undefined => {
	if (!value) return undefined;
	const words = value.split(" ");
	return words.every(startsWithUpperCase) ? undefined : message;
};
