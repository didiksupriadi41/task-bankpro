import React from 'react';
import './Login.css';
import logo from '../../assets/logo.png';

class Login extends React.Component {
    handleLogin = () => {
        this.props.onClicked()
    }

	render() {
		return (
        <div className="login">
            <div className="logo">
                <img src={logo} alt="logo"/>
            </div>
            
			<div className="login-box">
                <form>
                    <div className="no-rekening">
                    <input type="text" placeholder="No Rekening" className="no-rekening"/>
                    </div>
                    <button onClick={this.handleLogin}>></button>
                </form>
            </div>
        </div>
		)
	}
}

export default Login;
