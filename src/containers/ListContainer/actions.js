import axios from 'axios';

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
    dispatch(listIsRefreshing(true));
    const list = (await axios({
        method:'get',
        url:`https://api.github.com/search/repositories?q=${params.query}&order=${params.order}&sort=${params.sort}&page=${1}&per_page=${GITHUB_REPOS_PER_PAGE}`,
    })).data;
    console.log(list);
    dispatch(clearList())
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
	const params = getState().searchReposReducer;
	dispatch(listIsLoading(true));
	const list = (await axios({
        method:'get',
        url:`https://api.github.com/search/repositories?q=${params.query}&order=${params.order}&sort=${params.sort}&page=${page}&per_page=${GITHUB_REPOS_PER_PAGE}`,
    })).data;

    dispatch(fetchListSuccess(list.items));
    dispatch(listIsLoading(false));
}
