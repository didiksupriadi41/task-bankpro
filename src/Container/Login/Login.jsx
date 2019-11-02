import React from 'react';
import './Login.css';

class Login extends React.Component {
    handleLogin = () => {
        this.props.onClicked()
    }

	render() {
		return (
			<div className="login-box">
            <div className="title">
                <h1>Welcome</h1>
            </div>
            <form>
                <div className="input-container">
                <input type="text" placeholder="No Rekening" className="no-rekening"/>
                </div>
                <div className="input-container">
                <input type="password" placeholder="Password" className="no-rekening"/>
                </div>
                <div className="input-container">
                <button onClick={this.handleLogin}>Log In</button>
                </div>
            </form>
        </div>
		)
	}
}

export default Login;
