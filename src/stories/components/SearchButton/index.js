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
    Footer,
    FooterTab
} from "native-base";

import styles from "./styles";
export interface Props {
  navigation: any;
  list: any;
}
export interface State {}

const data = [{name: 'Dima Pohiba', description: 'Hello motherfuckers', avatar_url: "https://avatars3.githubusercontent.com/u/17349153?v=4"}]

class SearchButton extends React.Component<Props, State> {
  render() {
    const { searchRepos } = this.props;
    console.log(this.props, 'some debug text');
    return (
        <Footer>
          <FooterTab>
              <Button onPress={searchRepos}>
                  <Text>Search</Text>
              </Button>
           </FooterTab>
        </Footer>
    );
  }
}

export default SearchButton;
