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

//ESTUDAR
const startsWithUpperCase = (value: string): boolean => {
	if (!value) return false;
	const char = value[0];
	const lowerChar = char.toLowerCase();
	return char !== lowerChar;
};

//ESTUDAR
export const everyWordStartsWithUpperCase = (
	value: string,
	message: string
): string | undefined => {
	if (!value) return undefined;
	const words = value.split(" ");
	return words.every(startsWithUpperCase) ? undefined : message;
};
