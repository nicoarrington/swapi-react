import React from 'react';
import logo from './logo.png';
import './App.css';
import FilmList from './components/FilmList'; 
import FilmCharacterList from './components/FilmCharacterList'; 
import CharacterProfile from './components/CharacterProfile'; 

const App = () => 
    <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="App-content">
            <div className="row">
                <FilmList />
                <FilmCharacterList />
                <CharacterProfile />
            </div>
        </div>
        <footer className='footer'>
        App by Nico Arrington.
        </footer>

    </div>

export default App;