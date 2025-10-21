//aqui é o componente sendo implementado
//importa toda a bagaça como "S" do "./style"
import * as S from "./styles";
import type { ITextProps } from "./types";
import { parseClassName } from "../../utils/parseClassName";

//lê-se: "retorne um wrapper de estilização S do tipo parágrafo P com uma string chamada children"
export function Text({
	children,
	as = "p",
	variant = "label100",
	color = "black",
	className,
}: ITextProps) {
	//Wrapper = tipo container
	return (
		<div data-testid="text">
			<S.Text
				className={parseClassName("Text", className)}
				$variant={variant}
				$color={color}
				as={as}
			>
				{children}
			</S.Text>
		</div>
	);
}
