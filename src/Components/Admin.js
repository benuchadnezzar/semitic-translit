import React, { Component } from 'react';
import { Auth } from 'aws-amplify';

class Admin extends Component {
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

	render() {
		return (
			<h2>Please sign in</h2>
			<input 
				placeholder='Username'
				onChange={e => this.handleChange(username, e.target.value)}
			/>
			<input 
				placeholder='Password'
				type='password'
				onChange={e => this.handleChange(password, e.target.value)}
			/>
		)
	}
}

export default Admin;