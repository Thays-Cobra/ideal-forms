import { ThemeProvider } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router";
import { GlobalStyle } from "./config/theme/global";
import { Login } from "./pages/login/login.page";

import { WelcomePage } from "./pages/welcome/welcome.page";
import { theme } from "./config/theme";

function App() {
	return (
		//estudar essa desgraçaaaaaa <></> (fragment)
		<ThemeProvider theme={theme as any}>
			<GlobalStyle />
			<BrowserRouter>
				<Routes>
					<Route Component={Login} path="/" />
					<Route Component={Login} path="/:id" />
					<Route Component={Login} path="/:id/:access" />
					<Route Component={WelcomePage} path="/welcome" />
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
