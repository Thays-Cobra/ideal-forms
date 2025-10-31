import { PageLayout } from "../../components/pageLayout";
import { Text } from "../../components/text";
import { TitleLangs } from "../../langs";

export function ForgotPassword() {
	return (
		<PageLayout className="ForgotPasswordPage">
			<Text className="ForgotPasswordText" as="h1" variant="title100">
				{TitleLangs.forgotPassword}
			</Text>
		</PageLayout>
	);
}
