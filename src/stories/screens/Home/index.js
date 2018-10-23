import * as React from "react";
import {
  Container,
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
} from "native-base";
import SearchForm from '../../components/SearchForm'
import styles from "./styles";
export interface Props {
  navigation: any;
  list: any;
}
export interface State {}

const data = [{name: 'Dima Pohiba', description: 'Hello motherfuckers', avatar_url: "https://avatars3.githubusercontent.com/u/17349153?v=4"}]

class Home extends React.Component<Props, State> {
  render() {
    const { Header, Body, Footer } = this.props;
    return (
      <Container style={styles.container}>
          <Header/>
          <Container>
            <Body/>
          </Container>
          <Footer/>
      </Container>
    );
  }
}

export default Home;
