import { API_URL } from '../../constants'; 

export const SET_CURRENT_FILM = 'SET_CURRENT_FILM'; 
export const SET_FILM_CHARACTERS = 'SET_FILM_CHARACTERS'; 
export const SET_FILM_DETAILS = 'SET_FILM_DETAILS'; 

export function setCurrentFilm(id) {
	return {
		type: SET_CURRENT_FILM, 
		id
	}
}

export function getFilmDetails(id) {
	return dispatch => 
		fetch(`${API_URL}/films/${id}`)
			.then(res => res.json())
			.then(details => {
				dispatch(getFilmCharacters(details.characters)); 
			}
		);
}

export function setFilmDetails(details) {
	return {
		type: SET_FILM_DETAILS, 
		details
	}
}

export function getFilmCharacters(characterUrls) {
	return dispatch => 
		Promise.all(characterUrls.map(url =>
				fetch(url)
					.then(res => res.json())
		))
		.then(characters => 
			dispatch(setFilmCharacters(characters))
		);
}

export function setFilmCharacters(characters) {
	return {
		type: SET_FILM_CHARACTERS, 
		characters
	}
}