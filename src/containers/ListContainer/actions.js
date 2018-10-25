import axios from 'axios';
import _ from 'lodash'
import GITHUB_REPOS_PER_PAGE from '../../config/constants';

export function listIsRefreshing(bool: boolean) {
    return {
        type: "LIST_IS_REFRESHING",
        isRefreshing: bool,
    };
}
export function fetchListSuccess(list: Object) {
    return {
        type: "FETCH_LIST_SUCCESS",
        list,
    };
}

export function clearList() {
    return {
        type: "CLEAR_LIST"
    }
}


export const refreshNewRepos = () => async (dispatch, getState) => {
    const params = getState().searchReposReducer;
    let list;
    dispatch(listIsRefreshing(true));
    try {
        list = (await axios({
            method:'get',
            url:`https://api.github.com/search/repositories?q=${params.query}&order=${params.order}&sort=${params.sort}&page=${1}&per_page=${GITHUB_REPOS_PER_PAGE}`,
        })).data;
    } catch (e) {
        dispatch(fetchListSuccess([]));
        return;
    }

    dispatch(clearList());
    dispatch(fetchListSuccess(list.items));

    dispatch(listIsRefreshing(false));
}

export function listIsLoading(bool: boolean) {
	return {
		type: "LIST_IS_LOADING",
		isLoading: bool,
	};
}

export const loadRepos = (params) => async (dispatch, getState) => {
	const { page } = getState().listReducer;
	let list;
	const params = getState().searchReposReducer;
	dispatch(listIsLoading(true));
	try {
        list = (await axios({
        method:'get',
        url:`https://api.github.com/search/repositories?q=${params.query}&order=${params.order}&sort=${params.sort}&page=${page}&per_page=${GITHUB_REPOS_PER_PAGE}`,
        })).data;
    } catch(error) {
	    dispatch(fetchListSuccess([]));
	    return;
    }
    dispatch(fetchListSuccess(list.items));
    dispatch(listIsLoading(false));
}
