import * as React from "react";
import { WebView, View, Button } from 'react-native';
import { Base64 } from 'js-base64';

let mountedInstance;
const params = {
    showModal: false,
    uri: '',
    onMessFn: null
};

class WebViewModal extends React.Component<Props, State> {

    componentDidMount() {
        mountedInstance = this;
    }

    static toggleShow(newParams) {
        if(mountedInstance){
            params.showModal = !params.showModal;
            params.uri = newParams ? newParams.uri : params.uri;
            mountedInstance.forceUpdate();
        }
    }

    static setOnMessageFunction = (fnc) => {
        if (mountedInstance) {
            params.onMessFn = fnc;
            mountedInstance.forceUpdate();
        }
    }

    static checkIsOpenModal = () => {
        return params.showModal;
    }

    base64ToObject = str => JSON.parse(Base64.decode(str));

    onMessage = ({ nativeEvent }) => {
        if (params.onMessFn) {
            params.onMessFn(this.base64ToObject(nativeEvent.data));
        }
        console.log('from webview', nativeEvent.data);
    }


    render() {
        const { showModal, uri } = params;
        const { url } = this.props;

        console.log("Hello from render", showModal);
        return (
            <View style={showModal ? {flex:1, justifyContent:'center', alignItems: 'center', position:'absolute',top:0, left:0,bottom:0, right:0, backgroundColor: 'black'} : {height:0, opacity: 0}}>
                <View style={{width:'90%', height:'90%', backgroundColor: 'white' }}>
                    <WebView
                        source={{uri:uri ? uri :'https://github.com/login/oauth/authorize?client_id=5c61c03eef77a46db102&redirect_uri=https://dimon41k.github.io/genesis-test.github.io'}}
                        ref={webview => { WebViewModal.webview = webview; }}
                        onMessage={this.onMessage}
                    />
                </View>
                <Button style={{width:'100'}} title={"CLOSE"} onPress={() => WebViewModal.toggleShow()}/>
            </View>
        );
    }
}



export default WebViewModal;
