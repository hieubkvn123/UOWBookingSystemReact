import React, {Component} from 'react';
import './App.css';
import Home from './student_home/home'
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect
} from 'react-router-dom'

class App extends Component {
	constructor(props){
		super(props)
		this.state = {}
	}

	componentWillMount() {
		
	}

	render(){
  		return (
			<Router>
				<Switch>
					{/* Redirect users to home page when endpoint is nothing*/}	
					<Route path='/home'>
						<Home/>
					</Route>
					<Route exact  path='/' render={() => {
						return ( <Redirect to='/home'/> )
					}}/>
				</Switch>
			</Router>
		)
	}
}

export default App;
