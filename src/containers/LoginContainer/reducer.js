const initialState = {
	token: '',
};

export default function(state: any = initialState, action: Function) {
	if (action.type === "ADD_AUTH_TOKEN") {
		return {
			...state,
			token: action.token
		};
	}
	if (action.type === "CHECK_AUTHORIZATION_DATA") {
		return {
			...state,
			userData: action.payload
		};
	}
	return state;
}
