import { parseClassName } from "../../utils/parseClassName";
import type { IPageStyleProps } from "./types";

import * as S from "./styles";

export function PageLayout({
	className,
	as = "wrapper",
	children,
}: IPageStyleProps) {
	return (
		<div data-testid="pageStyle">
			<S.PageLayout
				className={parseClassName("PageLayout", className)}
				as={as}
			>
				{children}
			</S.PageLayout>
		</div>
	);
}
