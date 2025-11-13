import { ThemeProvider } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router";
import { GlobalStyle } from "./config/theme/global";
import { Login } from "./pages/login/login.page";
import { RegisterPage } from "./pages/register/register2.page";
import { ForgotPassword } from "./pages/forgotPassword/forgotPassword.page";
import { theme } from "./config/theme";
import { ToastContainer } from "react-toastify";

function App() {
	return (
		<ThemeProvider theme={theme as any}>
			<GlobalStyle />
			<ToastContainer />
			<BrowserRouter>
				<Routes>
					<Route Component={Login} path="/" />
					{/* <Route Component={Login} path="/:id" />
					<Route Component={Login} path="/:id/:access" /> */}
					<Route Component={RegisterPage} path="/register" />
					<Route Component={ForgotPassword} path="/forgot-password" />
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
