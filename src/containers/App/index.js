// @flow
import * as React from "react";
import { NetInfo } from "react-native";
import { StackNavigator, DrawerNavigator } from "react-navigation";
import { Root } from "native-base";
import Login from "../LoginContainer/index";
import Home from "../HomeContainer/index";
import {Container} from "../../stories/screens/Login/index";
import WebViewModal from "../../stories/components/WebViewModal/index";
import type {Props, State} from "../../stories/screens/Login/index";
import { connect } from "react-redux";
import { setConnect } from "./actions"

const Nav = StackNavigator(
	{
		Login: { screen: Login },
        Home: { screen: Home },

	},
	{
		initialRouteName: "Login",
		headerMode: "none",
	}
);
class App extends React.Component<Props, State> {

	componentDidMount () {
		const { setConnect } = this.props;
        NetInfo.isConnected.fetch().then(this.handleFirstConnectivityChange);

        NetInfo.isConnected.addEventListener(
            'connectionChange',
            this.handleFirstConnectivityChange
        );
	}

	componentWillUnmount = () => {
        NetInfo.isConnected.removeEventListener(
            'connectionChange',
            this.handleFirstConnectivityChange
        );
	}

	handleFirstConnectivityChange = (isConnected) => {
        const { setConnect } = this.props;
        setConnect(isConnected);
    }

	render () {
		return (
			<Root>
				<Nav />
        		<WebViewModal/>
			</Root>
		)
	}
}

const mapDispatchToProps = (dispatch) => ({
    setConnect: (isConnected) => dispatch(setConnect(isConnected))
});

const mapStateToProps = (state) => ({
    isConnected: state.rootReducer.isConnected
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

