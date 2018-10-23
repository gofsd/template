// @flow
import * as React from "react";
import { connect } from "react-redux";
import SearchForm from "../../stories/components/SearchForm";
import datas from "./data";
import { setSearchParams } from "./actions";
import searchReposReducer from "./reducer";
export interface Props {
	navigation: any,
	fetchList: Function,
	data: Object,
}
export interface State {}

const mapDispatchToProps = (dispatch) => ({
	setParams: params => dispatch(setSearchParams(params))
})


const mapStateToProps = state => ({
    sortValues: state.searchReposReducer.sortValues,
	query: state.searchReposReducer.query,
	sort: state.searchReposReducer.sort
});
export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
