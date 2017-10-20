import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';  
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducer from './reducers';
import { getFilms } from './reducers/films/actions';


// Create redux store
const store = createStore(reducer, compose(
  applyMiddleware(thunk),
));
 
// Kick off things by getting all characters
store.dispatch(getFilms());


// Create app
const container = document.getElementById('root');

// Render app
ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>
  , container
);

