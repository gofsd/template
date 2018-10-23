import axios from 'axios';

export function listIsLoading(bool: boolean) {
	return {
		type: "LIST_IS_LOADING",
		isLoading: bool,
	};
}
export function fetchListSuccess(list: Object) {
	return {
		type: "FETCH_LIST_SUCCESS",
		list,
	};
}
export function fetchList(url: any) {
	return dispatch => {
		dispatch(fetchListSuccess((url: any)));
		dispatch(listIsLoading(false));
	};
}

export const loadRepos = (params) => async (dispatch, getState) => {
	const { page } = getState().listReducer;
	const params = getState().searchReposReducer;
	dispatch(listIsLoading(true));
	const list = (await axios({
        method:'get',
        url:`https://api.github.com/search/repositories?q=${params.query}&order=${params.order}&sort=${params.sort}&page=${page}&per_page=${params.per_page}`,
    })).data;

    dispatch(fetchListSuccess(list.items));
    dispatch(listIsLoading(false));
}
