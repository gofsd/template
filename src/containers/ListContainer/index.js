// @flow
import * as React from "react";
import { connect } from "react-redux";
import Home from "../../stories/screens/Home";
import datas from "./data";
import { loadRepos } from "./actions";
import { View } from 'react-native';
import FlatList from '../../stories/components/List';
export interface Props {
	navigation: any,
	fetchList: Function,
	data: Object,
}
export interface State {}


const mapDispatchToProps = (dispatch) => ({
	loadRepos: () => dispatch(loadRepos())
})

const mapStateToProps = state => ({
    data: state.listReducer.list,
	isLoading: state.listReducer.isLoading
});

export default connect(mapStateToProps, mapDispatchToProps)(FlatList);
