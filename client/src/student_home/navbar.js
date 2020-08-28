import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import './css/NavBar.css'

class NavBar extends Component {
	constructor(props){
		super(props)
		this.state = {}
	}

	componentWillMount() {

	}

	componentWillUnmount() {

	}

	render = () => {
		return (
			<div class='home-navbar'>
				<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
				<div class="icon-bar">
					<img class='uow-navbar-icon' src='http://localhost:9000/static/img/uow_icon.png'/>
  					<a class="active" href="/"><i class="fa fa-home"></i></a> 
  					<a href="/login"><i class="fa fa-search"></i></a> 
  					<a href="/register"><i class="fa fa-envelope"></i></a> 
				</div>
			</div>
		)
	}
}

export default NavBar;
