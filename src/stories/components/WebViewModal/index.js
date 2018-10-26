import * as React from "react";
import { WebView, View, Button } from 'react-native';
import { Base64 } from "js-base64";
import styles from "./styles"

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
    }


    render() {
        const { showModal, uri } = params;
        const { url } = this.props;

        console.log("Hello from render", showModal);
        return (
            <View style={showModal ? styles.showModal : styles.hideModal }>
                <View style={styles.webViewContainer}>
                    <WebView
                        source={{uri:uri ? uri : url }}
                        ref={webview => { WebViewModal.webview = webview; }}
                        onMessage={this.onMessage}
                        javaScriptEnabled
                        onError={(e) => console.warn(e)}

                    />
                </View>
                <Button title={"CLOSE"} onPress={() => WebViewModal.toggleShow()}/>
            </View>
        );
    }
}



export default WebViewModal;
