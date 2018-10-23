const initialState = {
	query: '',
	sort: 'updated',
	order: 'asc',
	sortValues: ['updated', 'stars', 'forks']
};

export default function(state: any = initialState, action: Function) {
	if (action.type === "SET_SEARCH_REPOS_PARAMS") {
		return {
			...state,
			...action.payload
		};
	}
	return state;
}
