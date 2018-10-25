import * as React from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
  List,
  ListItem,
    Item,
    Input,
    Segment,
    Thumbnail,
    Form,
    Picker,
    View
} from "native-base";
import { FlatList, ActivityIndicator } from 'react-native';
import WebViewModal from '../WebViewModal'

import styles from "./styles";
export interface Props {
  navigation: any;
  list: any;
}
export interface State {}

//const data = [{name: 'Dima Pohiba', description: 'Hello motherfuckers', avatar_url: "https://avatars3.githubusercontent.com/u/17349153?v=4"},{name: 'Dima Pohiba', description: 'Hello motherfuckers', avatar_url: "https://avatars3.githubusercontent.com/u/17349153?v=4"}]

class EndlessList extends React.Component<Props, State> {
    _keyExtractor = (item, index) => item.id;

    renderList = () => {
        const { data, loadRep, isLoading, refreshRepos, isRefreshing } = this.props;
        return (
            <FlatList
                data={data}
                renderItem = {(render) => (
                    <ListItem key={render.item.id} onPress={()=>WebViewModal.toggleShow({uri:render.item.html_url})} avatar>
                        <Left>
                            <Thumbnail source={{ uri: render.item.owner ? render.item.owner.avatar_url : null }} />
                        </Left>
                        <Body>
                        <Text>{render.item.name}</Text>
                        <Text note>{render.item.description && render.item.description.substr(0, 29)}</Text>
                        </Body>
                    </ListItem>
                )}
                ListFooterComponent={() => (
                    <ActivityIndicator animating={isLoading}  />
                )}
                keyExtractor = {this._keyExtractor}
                onEndReachedThreshold={0.6}
                onRefresh={refreshRepos}
                refreshing={isRefreshing}
                onEndReached={loadRep}

            />
        );
    }

    renderCennectStatus = () => {
      const { isConnected } = this.props;
      return (
          <View><Text>{isConnected ? 'Online' : 'Offline'}</Text></View>
      )
    }


    render() {
        const { data } = this.props;
        return !data.length ? this.renderCennectStatus() : this.renderList();
    }
}

export default EndlessList;
