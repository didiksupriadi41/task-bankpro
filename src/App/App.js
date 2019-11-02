import React from 'react';
import './App.css';
import Navbar from '../Components/Navbar/Navbar';
import Login from '../Container/Login/Login';

class App extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			isLogin: false
		}
	}

	triggerLogin = () => {
		this.setState({
			isLogin: true
		})
	}

	triggerLogout = () => {
		this.setState({
			isLogin: false
		})
	}

	render() {
		return (
			<div>
				{!this.state.isLogin && <Login onClicked={() => this.triggerLogin()}/>}
				{this.state.isLogin && <Navbar onLogout={() => this.triggerLogout()}/>}
			</div>
		)
	}
}

export default App;
