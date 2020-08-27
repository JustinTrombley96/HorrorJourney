import React from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom'


import FormInput from '../form-input/form-input.component';

import './sign-in-styles.scss';

class SignIn extends React.Component {
	constructor (props) {
		super(props);

		this.state = {
			credentials : {
				email    : '',
				password : '',
			},
			error: ''
		};
	}

	// handleSubmit = event => {
	// 	event.preventDefault();
	// 	this.setState({ email: '', password: '' });
	// };

	// handleChange = event => {
	// 	const { value, name } = event.target;
	// 	this.setState({ [name]: value });
	// };

	handleChange = e => {
		this.setState({
			credentials:{
				...this.state.credentials,
				[e.target.name]: e.target.value
			}
		})
	}

	handleSubmit = e => {
		e.preventDefault()
		axios.post('http://localhost:4000/auth/login', this.state.credentials)
		.then(res => {
			localStorage.setItem('token', res.data.key)
			this.props.history.push('/library')
		})
		.catch(err => {
			this.setState({
				...this.state,
				error: 'Incorrect email or password'
			})
			console.log(err)
		})
	}


	render () {
		return (
			<div className='sign-in'>
				<h1>Sign In</h1>
				<form onSubmit={this.handleSubmit}>
					<FormInput
						name='email'
						type='email'
						onChange={this.handleChange}
						value={this.state.credentials.email}
						label='Email'
						required
					/>
					<FormInput
						name='password'
						type='password'
						onChange={this.handleChange}
						value={this.state.credentials.password}
						label='Password'
						required
					/>
					<button type='submit'>Sign in</button>
				</form>
			</div>
		);
	}
}

export default withRouter(SignIn);
