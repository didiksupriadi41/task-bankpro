import React from 'react';
import './Login.css';
import logo from '../../assets/logo.png';

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            noRekening: '',
            redirectTo: false
        };

        this.login = this.login.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    login() {
        //JAVA SOAP action
        sessionStorage.setItem('noRek', this.state.noRekening);
        this.setState({redirectTo: true});
    }

    onChange(e) {
        this.setState({
            noRekening: e.target.value
        });
    }

    handleLogin = () => {
        this.login();
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
                    <input type="text" placeholder="No Rekening" className="login-no-rekening" onChange={this.onChange}/>
                    </div>
                    <button onClick={this.handleLogin} className="login-button">></button>
                </form>
            </div>
        </div>
		)
	}
}

export default Login;
