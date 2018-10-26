import * as React from "react";
import { Container, Button, Text, View} from "native-base";
import WebViewModal from "../../components/WebViewModal";
import { GITHUB_BACK_URL } from '../../../config/constants';
export interface Props {
	token: string,
    getAuthToken: Function,
	navigation: Function
}
export interface State {}
class Login extends React.Component<Props, State> {

	login = () => {
		const { token, getAuthToken, navigation, login } = this.props;
		if(!token) {
            WebViewModal.setOnMessageFunction(getAuthToken);
            WebViewModal.toggleShow({uri: GITHUB_BACK_URL});
		} else {
            login();
		}
	}

	render() {
	    const { token, navigation, login } = this.props;
        if (WebViewModal.checkIsOpenModal() && token) {
            WebViewModal.toggleShow();
            login();
        }
		return (
			<Container>
				<View padder>
					<Button block onPress = {this.login}>
						<Text>Sign in with Github</Text>
					</Button>
				</View>
			</Container>
		);
	}
}

export default Login;
