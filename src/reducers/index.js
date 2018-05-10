//REDUCERS TAKE IN A COPY OF CURRENT STATE AND AN ACTION, THEN UPDATE STATE ACCORDINGLY
//--DOES THIS UPDATE STORE AUTOMATICALLY?  HOW DOES IT UPDATE STORE?
export default (state = {jackalopes: 0, unicorns: 0, isFighting: false}, action) => {
	var jackalopes = state.jackalopes;
	var unicorns = state.unicorns;
	var isFighting = state.isFighting;
	switch (action.type) {
		case 'INCREMENT-JACKALOPES':
			var jackalopesPlusOne = state.jackalopes + 1;
			return {jackalopes: jackalopesPlusOne, unicorns: unicorns, isFighting: false}
		case 'DECREMENT-JACKALOPES':
			var jackalopesMinusOne = state.jackalopes - 1;
			return {jackalopes: jackalopesMinusOne, unicorns: unicorns, isFighting: false}
		case 'ADD-UNICORN':
			var unicornsPlusOne = state.unicorns + 1;
			return {jackalopes: jackalopes, unicorns: unicornsPlusOne, isFighting: false}
		case 'START-FIGHT':
			return {jackalopes: jackalopes, unicorns: unicorns, isFighting: true}
		default:
			return state
	}
}
