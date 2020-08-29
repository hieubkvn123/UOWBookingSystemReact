import React from 'react'
import StudentLoginForm from './login_form'
import RegisterForm from './register_form'
import NavBar from './navbar'
import {
	BrowserRouter as Router,
	Switch,
	Route,
	useRouteMatch // To get the default endpoint
} from 'react-router-dom'



// Stateless (functional) components use function (not class)
function Home() {

	let { path, url } = useRouteMatch();

  	return (
		<Router>
			<Switch>
				<Route  path={`${path}/register`}>
					<NavBar/>
					<RegisterForm/>
				</Route>

				<Route path={`${path}/student`}>
					<h1>Login</h1>
				</Route>
					
				{/* Always put the default route as exact*/}
				<Route exact path={`${path}/`}>
					<div>
						<NavBar/>
						<StudentLoginForm/>
					</div>
				</Route>
			</Switch>
		</Router>
	)
}

export default Home;
