const initialState = {
	isConnected: false
};

export default function(state: any = initialState, action: Function) {
	if (action.type === "SET_IS_CONNECT") {
		return {
			...state,
            isConnected: action.isConnected,
		};
	}

	return state;
}
