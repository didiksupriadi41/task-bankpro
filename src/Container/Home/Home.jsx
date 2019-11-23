import React from 'react';
import Axios from 'axios';
import './Home.css';
import Title from '../../Components/Title/Title';
import ProfileList from '../../Components/ProfileList/ProfileList';
var XMLParser = require('react-xml-parser');

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            noRekening: sessionStorage.getItem('noRek'),
            namaBank: 'Bank Pro',
            saldo: 10000,
            isFetching: true
        }
    }

    componentDidMount(){
        var xmlRequest = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ws="http://ws.test.org/">'
        + '<soapenv:Header/>'
            + '<soapenv:Body>'
                + '<ws:getUserData>'
                    + `<accountNumber>${this.state.noRekening}</accountNumber>`
                + '</ws:getUserData>'
            + '</soapenv:Body>'
        + '</soapenv:Envelope>';

        Axios.post('http://ma.kam-itb.com:8080/soap-test/bankService', xmlRequest,
            {headers: {'Content-Type':'text/xml'}
        }).then(res => {
            var xml = new XMLParser().parseFromString(res.data);
            var value = xml.getElementsByTagName('return')[0].value
            var data = JSON.parse(value)[0];
            this.setState({
                noRekening: data.account_number,
                saldo: data.balance,
                isFetching: false
            })
            
        }).catch(err => {console.log(err)});
    }

    render() {
        return(
            <div className="home">
                <Title title="Welcome"/>
                <ProfileList category="No Rekening" data={this.state.noRekening} isFetching={this.state.isFetching}/>
                <ProfileList category="Nama Bank" data={this.state.namaBank} isFetching={this.state.isFetching}/>
                <ProfileList category="Saldo" data={this.state.saldo} isFetching={this.state.isFetching}/>
            </div>
        )
    }
}

export default Home;