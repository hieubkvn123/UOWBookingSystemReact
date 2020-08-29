import React, { Component } from 'react'
import './css/Form.css'
import axios from 'axios'

class RegisterForm extends Component {
	constructor(props){
		super(props)
		this.state = {}
	}

	onChange(e) {
		e.preventDefault()
		this.setState({ [e.target.name] : e.target.value })
	}

	onSubmit() {
		// grab all data then send to server
	}

	render = () => {
		return (
			<div class='registration home-form'>
				<form method='post' class='register-form'>
					{/* These first information will define if the student is */}
					{/* actually a uow-er */}
					<label for='name'>Full Name</label>
					<input type='text' id='name' name='name'/>
					
					<label for='uow_id'>UOW Student ID</label>
					<input type='text' id='uow_id' name='uow_id'/>

					<select  id='major'>
						<option value="" disabled selected>Select Major</option>
						<option>Computer Science - Big Data</option>
						<option>Computer Science - Digital System Security</option>
						<option>Computer Science - Cyber Security</option>
						<option>Computer Science - Game Development</option>
						<option>Information Technology</option>
						<option>Business Information Technology</option>
						<option>Data Science and Business Analytics</option>
					</select>

					{/* These information are for the accounts themselves */}
					<label for='username'>Username</label>
					<input type='text' id='username' name='username'/>
					
					<label for='password'>Password</label>
					<input type='password' id='password' name='password'/>

					<input type='submit' class='btn btn-primary' value='Register'/>
					<button type='button' class='btn btn-primary' >Scan Student Card</button>
				</form>
			</div>
		)
	}
}

export default RegisterForm;
