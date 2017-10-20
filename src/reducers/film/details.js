import { SET_FILM_DETAILS } from './actions'; 

const initialState = {}; 

export default (state = initialState, action) => {
	switch (action.type) {
		case SET_FILM_DETAILS: 
			return action.details; 
		default: 
			return state; 
	}
}