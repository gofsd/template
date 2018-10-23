import axios from 'axios';

export function getAuthToken(token: string) {
	return {
		type: "ADD_AUTH_TOKEN",
		token
	};
}
export function checkAuth(data: Object) {
	return {
		type: "CHECK_AUTHORIZATION_DATA",
        userData: data
	};
}


export const checkAuth = (params) => async (dispatch, getState) => {
	const list = (await axios({
        method:'get',
        url:`https://api.github.com/search/repositories?q=${params.query}&order=${params.order}&sort=${params.sort}&page=${page}&per_page=${params.per_page}`,
    })).data;

    dispatch(fetchListSuccess(list.items));
    dispatch(listIsLoading(false));
}
