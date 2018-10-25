// @flow
import * as React from "react";
import { connect } from "react-redux";
import { loadRepos, refreshNewRepos } from "./actions";
import { View } from 'react-native';
import FlatList from '../../stories/components/List';
export interface Props {
	navigation: any,
	fetchList: Function,
	data: Object,
}
export interface State {}


const mapDispatchToProps = (dispatch) => ({
	loadRep: () => dispatch(loadRepos()),
	refreshRepos: () => dispatch(refreshNewRepos())
})

const mapStateToProps = state => ({
    data: state.listReducer.list,
	isLoading: state.listReducer.isLoading,
    isRefreshing: state.listReducer.isRefreshing,
	isConnected: state.rootReducer.isConnected,
    repo_name: state.searchReposReducer.query
});

export default connect(mapStateToProps, mapDispatchToProps)(FlatList);
