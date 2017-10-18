//REDUCERS TAKE IN A COPY OF CURRENT STATE AND AN ACTION, THEN UPDATE STATE ACCORDINGLY
//--DOES THIS UPDATE STORE AUTOMATICALLY?  HOW DOES IT UPDATE STORE?
export default (state = {clicked: 0, unicorns: 0}, action) => {
	var clicked = state.clicked;
	var unicorns = state.unicorns;
	switch (action.type) {
		case 'INCREMENT-COUNTER':
			var clickedPlusOne = state.clicked + 1;
			return {clicked: clickedPlusOne, unicorns: unicorns}
		case 'DECREMENT-COUNTER':
			var clickedMinusOne = state.clicked - 1;
			return {clicked: clickedMinusOne, unicorns: unicorns}
		case 'ADD-UNICORN': 
			var unicornsPlusOne = state.unicorns + 1;
			return {clicked: clicked, unicorns: unicornsPlusOne}
		default:
			return state
	}
}
