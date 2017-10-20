import { combineReducers } from 'redux'; 
import films from './films'; 
import film from './film'; 
import character from './character'; 

export default combineReducers({
	films, 
	film, 
	character
});