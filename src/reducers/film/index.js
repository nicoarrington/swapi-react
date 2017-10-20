import { combineReducers } from 'redux'; 
import id from './id'; 
import details from './details'; 
import characters from './characters'; 

export default combineReducers({
	id, 
	details, 
	characters, 
});