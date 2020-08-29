import React, {Component} from 'react';
import './App.css';
import Home from './student_home/home'
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect
} from 'react-router-dom'

// Helps track the locations users have gone thru
import { LastLocationProvider } from 'react-router-last-location'

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
				<LastLocationProvider>
				<Switch>
					{/* Redirect users to home page when endpoint is nothing*/}	
					<Route path='/home'>
						<Home/>
					</Route>

					{/* Always put default router as exact */}
					<Route exact  path='/' render={() => {
						return ( <Redirect to='/home'/> )
					}}/>
				</Switch>
				</LastLocationProvider>
			</Router>
		)
	}
}

export default App;
