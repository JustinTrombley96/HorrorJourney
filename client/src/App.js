import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';

import './App.css';

import HomePage from './pages/homepage.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up.component';
import Library from './pages/library.component';
import MyMovies from './pages/my-movies.component';
import { MovieProvider } from './components/contexts/movie-context.component.jsx';
import { MyMovieProvider } from './components/contexts/my-movie-context';

function App () {
	return (
		<MovieProvider>
			<MyMovieProvider>
				<div className='App'>
					<Switch>
						<Route exact path='/' component={HomePage} />
						<Route path='/join' component={SignInAndSignUp} />
						<PrivateRoute path='/library' component={Library} />
						<PrivateRoute path='/mymovies' component={MyMovies} />
					</Switch>
				</div>
			</MyMovieProvider>
		</MovieProvider>
	);
}

export default App;
