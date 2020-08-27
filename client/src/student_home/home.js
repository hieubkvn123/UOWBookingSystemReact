import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import './css/StudentLoginForm.css'
import 'bootstrap/dist/css/bootstrap.min.css';


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

	onSubmit = () => {
		// submit the two state vars to system
	}

	render() {
		return(
			<div>
				<form onSubmit={this.onSubmit} action='http://localhost:9000' method='POST' class='student_login'>
					<label for='username'>Username</label>
					<input class='form-control' onChange={this.onChange} type='text' id='username' name='username'/>

					<label for='Password'>Password</label>
					<input class='form-control' onChange={this.onChange} type='text' id='password' name='password'/>
					<input type='submit' value='Login' id='submit'/>
				</form>
			</div>
		)
	}
}

export default StudentLoginForm
