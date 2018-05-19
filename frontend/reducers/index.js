import { combineReducers } from 'redux';
import testReducer from './Tests';



const allReducer = combineReducers({
		tests: testReducer,
	})

export default allReducer;
