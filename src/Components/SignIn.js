import React, { Component } from 'react';
import { Auth } from 'aws-amplify';

class SignIn extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: ''
		}
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange = (key, value) {
		this.setState({[key]: value})
	}

	signIn = () => {
		Auth.signIn(this.state.username, this.state.password)
			.then(user => this.setState({ user }))
			.catch(err => console.log('Error signing in: ', err))
	}

	render() {
		return (
			<input 
				placeholder='Username'
				onChange={e => this.handleChange(username, e.target.value)}
			/>
			<input 
				placeholder='Password'
				type='password'
				onChange={e => this.handleChange(password, e.target.value)}
			/>
			<button onClick={this.signIn}>Sign in</button>
		)
	}
}

export default SignIn;