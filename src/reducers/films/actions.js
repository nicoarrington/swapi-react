import { API_URL } from '../../constants'; 

export const SET_FILMS = 'SET_FILMS'; 

export function getFilms() {
	return dispatch => {
		fetch(`${API_URL}/films`)
			.then( res => res.json())
			.then( res => res.results)
			.then( films => 
				dispatch(setFilms(films)
			)
		);
	};
}

export function setFilms(films) {
	return {
		type: SET_FILMS, 
		films
	};
}