// @flow
import React from "react";
import { StackNavigator, DrawerNavigator } from "react-navigation";
import { Root } from "native-base";
import Login from "./containers/LoginContainer";
import Home from "./containers/HomeContainer";
import {Container} from "./stories/screens/Login";
import WebViewModal from "./stories/components/WebViewModal";


const Drawer = DrawerNavigator(
	{
		Home: { screen: Home },
	},
	{
		initialRouteName: "Home",
		contentComponent: props => <Sidebar {...props} />,
	}
);

const App = StackNavigator(
	{
		Login: { screen: Login },
        Home: { screen: Home },

	},
	{
		initialRouteName: "Login",
		headerMode: "none",
	}
);
export default () => (
	<Root>
		<App />
        <WebViewModal/>
	</Root>
);
