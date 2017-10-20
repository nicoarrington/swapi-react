import React from 'react'; 
import { connect } from 'react-redux'; 
import { setCurrentCharacter, getCharacterProfile } from '../reducers/character/actions';  
import { getFilmDetails } from '../reducers/film/actions'; 

const FilmCharacterList = ({ characters, setCharacter }) => 
	<div id='film-characters' className='col-sm-4'>
		{characters.map((c, url) => {
			return <div className='card' key={c.name} onClick={setCharacter(c.url)}>{c.name}</div>; 
		})}	
	</div>

const mapStateToProps = ({ film: { characters } }) => ({
	characters
});

const mapDispatchToProps = dispatch => ({
	setCharacter(id) {
		return () => {
			dispatch(setCurrentCharacter(id)); 
			dispatch(getCharacterProfile(id));  
		}
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(FilmCharacterList); 

