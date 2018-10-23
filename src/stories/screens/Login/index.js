import * as React from "react";
import { Container, Button, Text, View} from "native-base";
import WebViewModal from '../../components/WebViewModal';
import { GITHUB_BACK_URL } from '../../../boot/config/constants';
export interface Props {
	token: string,
    getAuthToken: Function,
	navigation: Function
}
export interface State {}
class Login extends React.Component<Props, State> {

	login = () => {
		const { token, getAuthToken, navigation } = this.props;
		if(!token) {
            WebViewModal.setOnMessageFunction(getAuthToken);
            WebViewModal.toggleShow({uri: GITHUB_BACK_URL});
		} else {
			if (WebViewModal.checkIsOpenModal()) {
                WebViewModal.toggleShow();
			}
            navigation.navigate("Home");
		}
	}

	render() {
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
