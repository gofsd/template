import * as React from "react";
import {
  Left,
  Body,
  ListItem,
    Thumbnail,
    Text,
    View
} from "native-base";
import { FlatList, ActivityIndicator } from 'react-native';
import WebViewModal from '../WebViewModal'

export interface Props {
  data: Array;
  loadRep: Function;
  isLoading: Boolean;
  refreshRepos: Function,
  isRefreshing: Boolean
}
export interface State {}


class EndlessList extends React.Component<Props, State> {
    _keyExtractor = (item) => item.id;

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
                    <ActivityIndicator animating={isLoading || !data.length}  />
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
          <View style={{flex:1, alignItems: "center", justifyContent:"center"}}><Text>{isConnected ? "Online" : "Offline"}</Text></View>
      )
    }


    render() {
        const { data, isRefreshing } = this.props;
        return !data.length && !isRefreshing ? this.renderCennectStatus() : this.renderList();
    }
}

export default EndlessList;
