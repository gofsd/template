// @flow
import * as React from "react";
import { connect } from "react-redux";
import Home from "../../stories/screens/Home";
import datas from "./data";
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
	isConnected: state.rootReducer.isConnected
});

export default connect(mapStateToProps, mapDispatchToProps)(FlatList);
