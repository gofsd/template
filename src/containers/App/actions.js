
export function setConnect(bool: boolean) {
	return {
		type: "SET_IS_CONNECT",
        isConnected: bool,
	};
}
