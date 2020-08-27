import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Library from './pages/library/library.component';
import MyMovies from './pages/my-movies/my-movies.component';
import {MovieProvider} from './components/movie-context/movie-context.component.jsx'

function App () {
	return (
		<MovieProvider>
			<div className='App'>
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route path='/join' component={SignInAndSignUp} />
					<Route path='/library' component={Library} />
					<Route path='/mymovies' component={MyMovies} />
				</Switch>
			</div>
		</MovieProvider>
	);
}

export default App;
