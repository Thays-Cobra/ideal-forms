//esse serve só pra resolver gambiarra, forget it
import { ThemeType } from "../src/config/theme";

import "styled-components";

declare module "styled-components" {
	export interface DefaultTheme extends ThemeType {
		font: string;
	}
}
