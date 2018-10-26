const initialState = {
	list: [],
	isLoading: false,
	page: 1,
	isRefreshing: false
};

export default function(state: any = initialState, action: Function) {
	if (action.type === "FETCH_LIST_SUCCESS") {
		return {
			...state,
			list: [ ...state.list, ...action.list],
            page: ++state.page
		};
	}
	if (action.type === "LIST_IS_LOADING") {
		return {
			...state,
			isLoading: action.isLoading,
		};
	}
    if (action.type === "FETCH_LIST_SUCCESS") {
        return {
            ...state,
            list: action.list,
        };
    }
    if (action.type === "LIST_IS_REFRESHING") {
        return {
            ...state,
            isRefreshing: action.isRefreshing,
        };
    }
    if (action.type === "CLEAR_LIST") {
    	return initialState;
		}
	return state;
}
