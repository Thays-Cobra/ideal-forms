export const isFormatValid = (value: string, regex: RegExp) =>
	regex.test(value.trim());

export const hasMinLength = (min: number, value: string) => value.length >= min;

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

export const everyWordStartsWithUpperCase = (value: string) => {
	if (!value) return false;
	const words = value.trim().split(/\s+/);
	return words.every((word) => {
		const firstChar = word[0];
		return firstChar === firstChar.toUpperCase();
	});
};

//função para verificar se há um mínimo de letras
export const hasMinimumLettersLength = (min: number) => (value: string) => {
	if (!value) return true;
	const text = value.split(" ");
	for (const part of text) {
		if (part.length < min) return false;
	}
	return true;
};

//função para verificar se há um mínimo de palavras
export const hasMinimumWordsLength = (min: number) => (value: string) =>
	value.trim().split(/\s+/).filter(Boolean).length >= min;
