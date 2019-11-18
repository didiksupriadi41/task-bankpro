import React from 'react';
import './App.css';
import Login from '../Container/Login/Login';
import Navbar from '../Components/Navbar/Navbar';

class App extends React.Component {
	constructor(props) {
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
		sessionStorage.removeItem('noRek');
		this.setState({
			isLogin: false
		})
	}

	render() {
		return (
			<div>
				{!this.state.isLogin && <Login onClicked={() => this.triggerLogin()} />}
				{this.state.isLogin && <Navbar onLogout={() => this.triggerLogout()} />}
			</div>
		)
	}
}

export default App;
