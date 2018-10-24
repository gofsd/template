// @flow
import { connect } from "react-redux";
import { refreshNewRepos } from "../ListContainer/actions";
import SearchButton from '../../stories/components/SearchButton';

const mapDispatchToProps = (dispatch) => ({
    refreshRepos: () => dispatch(refreshNewRepos()),
});

const mapStateToProps = (state) => ({
    isRefreshing: state.listReducer.isRefreshing
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchButton);
