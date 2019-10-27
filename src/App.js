import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';

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
				{!this.state.isLogin && <button onClick={this.triggerLogin}>Login</button>}
				{this.state.isLogin && <Navbar />}
			</div>
		)
	}
}

export default App;
