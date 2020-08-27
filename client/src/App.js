import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import StudentLoginForm from './student_home/home'

class App extends Component {
	constructor(props){
		super(props)
		this.state = {}
	}

	render(){
  		return (
			<div class='student_home'>
				<h1>Hello World</h1>
				<StudentLoginForm/>
			</div>
		)
	}
}

export default App;
