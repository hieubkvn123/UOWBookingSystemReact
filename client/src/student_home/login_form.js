import React, {Component} from 'react'
import './css/StudentLoginForm.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'

class StudentLoginForm extends Component {
	constructor(props){
		super(props)
		this.state = {}
	}


	// Executed when the component about to mount
	componentWillMount(){
		
	}

	// Executed when the component about to unmount
	componentWillUnmount(){

	}

	onChange = (e) => {
		this.setState({
			[e.target.name] : e.target.value 
		})
	}

	onSubmit = (e) => {
		// submit the two state vars to system
		e.preventDefault()
			var username = this.state.username
			var password = this.state.password

			var formData = new FormData()
			formData.append('username', username)
			formData.append('password', password)

			axios({
				method : 'post',
				url : 'http://localhost:9000/student/login',
				data : formData,
				headers : {
					'Content-Type' : 'multipart/form-data'
				}
			})
			.then(function(response){
				// handle success
				window.location.replace('/student')
			})
			.catch(function(response){
				// handle fail
				console.log('Failed')
			})
	}

	render() {
		return(
			<div>
				<form onSubmit={this.onSubmit} action='http://localhost:9000' method='POST' class='student_login'>
					<label for='username'>Username</label>
					<input onChange={this.onChange} type='text' id='username' name='username'/>

					<label for='Password'>Password</label>
					<input onChange={this.onChange} type='text' id='password' name='password'/>

					<button class='btn btn-primary' id='register'>Register</button>
					<input onSubmit={this.onSubmit} class='btn btn-primary' type='submit' value='Login' id='submit'/>
				</form>
			</div>
		)
	}
}

export default StudentLoginForm;
