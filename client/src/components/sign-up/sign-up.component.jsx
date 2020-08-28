import React from 'react';
import axios from 'axios';
import FormInput from '../form-input/form-input.component';
import {withRouter} from 'react-router-dom'

import './sign-up.styles.scss';


class SignUp extends React.Component {
	constructor (props) {
		super(props);

		this.state = {
			credentials : {
				email    : '',
				password : '',
			},
		};
	}

	addUser = e => {
		e.preventDefault()
		axios.post('http://localhost:4000/auth/register', this.state.credentials)
		.then(res => {
			localStorage.setItem('token', res.data.key)
			this.props.history.push('/library')
			
		})
		.catch(err => {
			console.log(err)
		})
	}

	handleChange = e => {
		this.setState({
			credentials:{
				...this.state.credentials,
				[e.target.name]: e.target.value
			}
		})
	}

	render () {
		return (
			<div className='sign-up'>
				<h1>Sign Up</h1>
				<form onSubmit={this.addUser}>
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

					<button className= 'sign-up-button' type='submit'>Sign up</button>
				</form>
			</div>
		);
	}
}

export default withRouter(SignUp);
