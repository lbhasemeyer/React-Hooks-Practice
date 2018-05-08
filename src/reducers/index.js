//REDUCERS TAKE IN A COPY OF CURRENT STATE AND AN ACTION, THEN UPDATE STATE ACCORDINGLY
//--DOES THIS UPDATE STORE AUTOMATICALLY?  HOW DOES IT UPDATE STORE?
export default (state = {jackalopes: 0, unicorns: 0}, action) => {
	var jackalopes = state.jackalopes;
	var unicorns = state.unicorns;
	switch (action.type) {
		case 'INCREMENT-JACKALOPES':
			var jackalopesPlusOne = state.jackalopes + 1;
			return {jackalopes: jackalopesPlusOne, unicorns: unicorns}
		case 'DECREMENT-JACKALOPES':
			var jackalopesMinusOne = state.jackalopes - 1;
			return {jackalopes: jackalopesMinusOne, unicorns: unicorns}
		case 'ADD-UNICORN':
			var unicornsPlusOne = state.unicorns + 1;
			return {jackalopes: jackalopes, unicorns: unicornsPlusOne}
		default:
			return state
	}
}
