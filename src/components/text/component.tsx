//aqui é o componente sendo implementado
//importa toda a bagaça como "S" do "./style"
import * as S from "./styles";
import type { ITextProps } from "./types";

//lê-se: "retorne um wrapper de estilização S do tipo parágrafo P com uma string chamada children"
export function Text({
	children,
	as = "p",
	variant = "label100",
	color = "black",
}: ITextProps) {
	//Wrapper = tipo container
	return (
		<S.Text className="Text" $variant={variant} $color={color} as={as}>
			{children}
		</S.Text>
	);
}
