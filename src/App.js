import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Login from './Components/Login/Login';

class App extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			isLogin: false
		}
	}

	triggerLogin = () => {
		this.setState({
			isLogin:true
		})
	}

	render() {
		return (
			<div>
				{!this.state.isLogin && <Login onClicked={() => this.triggerLogin()}/>}
				{this.state.isLogin && <Navbar />}
			</div>
		)
	}
}

export default App;
