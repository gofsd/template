// @flow
import { connect } from "react-redux";
import { searchNewRepos } from "./actions";
import SearchButton from '../../stories/components/SearchButton';

const mapDispatchToProps = (dispatch) => ({
    searchRepos: () => dispatch(searchNewRepos())
});

export default connect(null, mapDispatchToProps)(SearchButton);
