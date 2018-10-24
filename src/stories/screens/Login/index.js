import * as React from "react";
import { Container, Button, Text, View} from "native-base";
import WebViewModal from '../../components/WebViewModal';
import { GITHUB_BACK_URL } from '../../../config/constants';
export interface Props {
	token: string,
    getAuthToken: Function,
	navigation: Function
}
export interface State {}
class Login extends React.Component<Props, State> {

	login = () => {
		const { token, getAuthToken } = this.props;
		if(!token) {
            WebViewModal.setOnMessageFunction(getAuthToken);
            WebViewModal.toggleShow({uri: GITHUB_BACK_URL});
		}
	}

	render() {
	    const { token, navigation } = this.props;
        if (WebViewModal.checkIsOpenModal()&&token) {
            WebViewModal.toggleShow();
            navigation.navigate("Home");
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
