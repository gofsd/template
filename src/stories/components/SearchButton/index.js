import * as React from "react";
import {
    Text,
    Button,
    Footer,
    FooterTab
} from "native-base";

import styles from "./styles";
export interface Props {
  navigation: func;
}
export interface State {}


class SearchButton extends React.Component<Props, State> {
  render() {
    const { refreshRepos } = this.props;
    return (
        <Footer>
          <FooterTab>
              <Button onPress={refreshRepos}>
                  <Text>Search</Text>
              </Button>
           </FooterTab>
        </Footer>
    );
  }
}

export default SearchButton;
