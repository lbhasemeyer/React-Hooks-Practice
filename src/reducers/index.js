//REDUCERS TAKE IN A COPY OF CURRENT STATE AND AN ACTION, THEN UPDATE STATE ACCORDINGLY
//--DOES THIS UPDATE STORE AUTOMATICALLY?  HOW DOES IT UPDATE STORE?
export default (state = {clicked: 0, unicorns: 0}, action) => {
	var clickedState = state.unicorns;
	var unicornsState = state.unicorns;
	switch (action.type) {
		case 'INCREMENT':
			var clickedStatePlusOne = state.clicked + 1;
			console.log('CASE INCREMENT');
			return {clicked: clickedStatePlusOne, unicorns: unicornsState}
		case 'DECREMENT':
			var clickedStateMinusOne = state.clicked - 1;
			console.log('CASE DECREMENT');
			return {clicked: clickedStateMinusOne, unicorns: unicornsState}
		default:
			return state
	}
}
