export default (state = {isFighting: false}, action) => {
	switch (action.type) {
		case 'START-FIGHT':
			return {isFighting: true}
		default:
			return state
	}
}
