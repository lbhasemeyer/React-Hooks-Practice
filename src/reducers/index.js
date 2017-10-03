//REDUCERS TAKE IN A COPY OF CURRENT STATE AND AN ACTION, THEN UPDATE STATE ACCORDINGLY
//--DOES THIS UPDATE STORE AUTOMATICALLY?  HOW DOES IT UPDATE STORE?
export default (state = {clicked: 0, unicorns: 0}, action) => {
	var clickedState = state.unicorns;
	var unicornsState = state.unicorns;
	switch (action.type) {
		case 'INCREMENT-COUNTER':
			var clickedStatePlusOne = state.clicked + 1;
			return {clicked: clickedStatePlusOne, unicorns: unicornsState}
		case 'DECREMENT-COUNTER':
			var clickedStateMinusOne = state.clicked - 1;
			return {clicked: clickedStateMinusOne, unicorns: unicornsState}
		case 'ADD-UNICORN': 
			var unicornsStatePlusOne = state.unicorns + 1;
			return {clicked: clickedState, unicorns: unicornsStatePlusOne}
		default:
			return state
	}
}
