import React from 'react';
import Axios from 'axios';
import './Home.css';
import Title from '../../Components/Title/Title';
import ProfileList from '../../Components/ProfileList/ProfileList';
var XMLParser = require('react-xml-parser');

class Home extends React.Component {
    constructor(){
        super();
        this.state = {
            noRekening: sessionStorage.getItem('noRek'),
            namaBank: 'Bank Pro',
            saldo: 10000
        }
    }

    componentDidMount(){
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        var xmlRequest = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ws="http://ws.test.org/">' +
        '<soapenv:Header/>' +
        '<soapenv:Body>' + 
           '<ws:sayHello>' + 
              '<guestname>DIDIK</guestname>' + 
           '</ws:sayHello>' +
        '</soapenv:Body>' + 
        '</soapenv:Envelope>';

        Axios.post(proxyurl + 'http://ma.kam-itb.com:8080/soap-test/bankService', xmlRequest,
            {headers: {'Content-Type':'text/xml'}
        }).then(res => {
            var xml = new XMLParser().parseFromString(res.data);
            // console.log(xml.getElementsByTagName('return')[0].value);
            var newName = xml.getElementsByTagName('return')[0].value
            this.setState({
                noRekening: newName
            })
        }).catch(err => {console.log(err)});
    }

    render() {
        return(
            <div className="home">
                <Title title="Welcome"/>
                <ProfileList category="No Rekening" data={this.state.noRekening} />
                <ProfileList category="Nama Bank" data={this.state.namaBank} />
                <ProfileList category="Saldo" data={this.state.saldo} />
            </div>
        )
    }
}

export default Home;