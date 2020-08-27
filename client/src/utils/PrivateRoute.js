import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
	{
		console.log('It works!');
	}
	return (
		<Route
			{...rest}
			render={props => {
				if (localStorage.getItem('token')) {
					console.log('Success!');
					return <Component {...props} />;
				}
				else {
					return <Redirect to='/join' />;
				}
			}}
		/>
	);
};

export default PrivateRoute