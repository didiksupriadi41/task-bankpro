import React from 'react';
import Axios from 'axios';
import './Login.css';
import logo from '../../assets/logo.png';
import Loader from 'react-loader-spinner';
var XMLParser = require('react-xml-parser');

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            noRekening: '',
            isFetching: false,
            isNoRekTrue: false,
            isTampilError: false
        };

        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        this.setState({
            noRekening: e.target.value
        });
    }

    handleLogin = (e) => {
        e.preventDefault();
        this.setState({isFetching: true, isTampilError: false});
        var xmlRequest = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ws="http://ws.test.org/">'
        + '<soapenv:Header/>'
        + '<soapenv:Body>'
        + '<ws:validateAccountNumber>'
        + '<accountNumber>' + this.state.noRekening + '</accountNumber>'
        + '</ws:validateAccountNumber>'
        + '</soapenv:Body>'
        + '</soapenv:Envelope>'
        
        Axios.post('http://ma.kam-itb.com:8080/soap-test/bankService', xmlRequest,
        {headers: {'Content-Type':'text/xml'}
        }).then(res => {
            var xml = new XMLParser().parseFromString(res.data);
            var value = xml.getElementsByTagName('return')[0].value
            if (value === 'true') {
                sessionStorage.setItem('noRek', this.state.noRekening);
                this.props.onClicked()
            } else {
                this.setState({isFetching: false, isTampilError: true});
            }
        }).catch(err => {console.log(err)});
    }

	render() {
		return (
        <div className="login">
            <div className="logo">
                <img src={logo} alt="logo"/>
            </div>
            
			<div className="login-box">
                {!this.state.isFetching && <form>
                    <div className="no-rekening">
                    <input type="text" placeholder="No Rekening" className="login-no-rekening" onChange={this.onChange}/>
                    </div>
                    {!this.state.isFetching && <button onClick={this.handleLogin} className="login-button">></button>}
                    
                </form>}
                {this.state.isFetching &&
                    <div className="loader-login">
                        <Loader
                            type="Puff"
                            color="#537258"
                            height={70}
                            width={70}
                            />
                    </div>}
                {this.state.isTampilError && <div className="pesan-error"><h5>No Rekening Salah</h5></div>}
            </div>
        </div>
		)
	}
}

export default Login;
