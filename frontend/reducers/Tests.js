const testReducer = ( state = [], action) => {
	const time_controller = 0;
	switch(action.type) {
		case "RECEIVE_TESTS":
			state = [
				...state,
        {
          name: action.name,
        }
			]
		break;

		default:
			return state;
	}
	return state;

}

export default testReducer;
