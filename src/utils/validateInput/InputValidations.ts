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
