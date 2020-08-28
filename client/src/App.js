import React, {Component} from 'react';
import './App.css';
import Home from './student_home/home'
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
					<Route path='/home' component={Home}></Route>
				</Switch>
			</Router>
		)
	}
}

export default App;
