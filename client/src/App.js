import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import StudentLoginForm from './student_home/home'
import NavBar from './student_home/navbar'
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from 'react-router-dom'

class App extends Component {
	constructor(props){
		super(props)
		this.state = {}
	}

	render(){
  		return (
			<Router>
				<Switch>
					<Route path='/home'>
						<div class='student_home'>
							<NavBar/>
							<StudentLoginForm/>
						</div>
					</Route>
				</Switch>
			</Router>
		)
	}
}

export default App;
