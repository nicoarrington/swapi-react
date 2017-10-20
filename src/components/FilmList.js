import React from 'react'; 
import { connect } from 'react-redux'; 
import { setCurrentFilm, getFilmDetails } from '../reducers/film/actions'; 

const FilmList = ({ films, setFilm }) => 
	<div id='film-list' className='col-sm-4'>
			{films.map((f, i) => 
			<div className='card' key={f.title} onClick={setFilm(i + 1)}>
				<h3>{f.title} </h3>
				<p className='help-block'><i>Released on: </i>{f.release_date}</p>
			</div>
			)}
	</div>

const mapStateToProps = ({ films }) => ({
	films
});

const mapDispatchToProps = dispatch => ({
	setFilm(id) {
		return () => {
			dispatch(setCurrentFilm(id)); 
			dispatch(getFilmDetails(id)); 
		}
	}
});
export default connect(mapStateToProps, mapDispatchToProps)(FilmList); 