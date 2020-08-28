import React, {Component} from 'react';
import StudentLoginForm from './login_form'
import NavBar from './navbar'
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from 'react-router-dom'



class Home extends Component {
	constructor(props){
		super(props)
		this.state = {}
	}

	render(){
  		return (
			<Router>
				<Switch>
					<Route path='/home/'>
						<div class='student_home'>
							<NavBar/>
							<StudentLoginForm/>
						</div>
					</Route>
					<Route path='/home/student'>
						<h1>Login</h1>
					</Route>
				</Switch>
			</Router>
		)
	}
}

export default Home;
