// @flow
import * as React from "react";
import { connect } from "react-redux";
import datas from "./data";
import { fetchList, getReposByUser } from "./actions";
import { View } from 'react-native';
import SearchForm from '../SearchReposContainer'
import List from '../ListContainer'
import SearchButton from '../Footer'
import Home from '../../stories/screens/Home';
export interface Props {
	navigation: any,
	fetchList: Function,
	data: Object,
}
export interface State {}
class HomeContainer extends React.Component<Props, State> {
	render() {
		return (
			<Home Header={SearchForm} Body={List} Footer={SearchButton} />
		)
	}
}

const mapDispatchToProps = (dispatch) => ({
})

const mapStateToProps = state => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
