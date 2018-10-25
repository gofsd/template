import { StyleSheet } from "react-native";

const styles: any = StyleSheet.create({
	showModal: {
		flex:1,
		justifyContent:'center',
		alignItems: 'center',
		position:'absolute',
		top:0,
		left:0,
		bottom:0,
		right:0,
		backgroundColor: 'black'
	},
	hideModal: {
		height:0,
		opacity: 0
	},
	webViewContainer: {
		width:'90%',
		height:'90%',
		backgroundColor: 'white'
	}

});
export default styles;
