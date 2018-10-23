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
    Picker
} from "native-base";
import { View } from 'react-native'

import styles from "./styles";
export interface Props {
  navigation: any;
  list: any;
}
export interface State {}

const data = [{name: 'Dima Pohiba', description: 'Hello motherfuckers', avatar_url: "https://avatars3.githubusercontent.com/u/17349153?v=4"}]

class SearchForm extends React.Component<Props, State> {
  render() {
    const { sortValues, query, sort, setParams } = this.props;
    console.log(this.props, 'some debug text');
    return (
          <Header searchBar rounded hasSegment>
              <Item>
                  <Icon name="ios-search" />
                  <Input placeholder="Search"
                         onChangeText={query => setParams({query})}
                         value={query}
                  />
              </Item>
                  <Form>
                      <Picker
                          note
                          mode="dropdown"
                          style={{ width: 120 }}
                          selectedValue={sort}
                          onValueChange={(sort)=>setParams({sort})}
                      >
                          {
                              sortValues.map(item =>
                                  <Picker.Item key={item} label={item} value={item} />
                              )
                          }

                      </Picker>
                  </Form>
          </Header>
    );
  }
}

export default SearchForm;
