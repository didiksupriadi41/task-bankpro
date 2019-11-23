import React from 'react';
import './Transaction.css';
import Title from '../../Components/Title/Title';
import Axios from 'axios';
import Loader from 'react-loader-spinner';
// import ReactDOM from 'react-dom';
import TransactionList from '../../Components/TransactionList/TransactionList';
var XMLParser = require('react-xml-parser');

class Transaction extends React.Component {
    constructor() {
        super();
        this.state = {
            noRekening: sessionStorage.getItem('noRek'),
            riwayatTransaksi : [],
            isTampil: true
        };

        // this.login = this.login.bind(this);
        // this.onChange = this.onChange.bind(this);
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
            var data = JSON.parse(value);
            data.forEach(element => {
                console.log(element);  
            });

            // console.log(data);
            this.setState({
                riwayatTransaksi: data
            })

            if (data.length === 1) {
                this.setState({
                    isTampil: false
                })
            }
            // ReactDOM.render(<TransactionList waktu="19-10-2019 17:04:29" jenis="debit" jumlah="300000" rekening="01234567"/>, document.getElementById('daftar-transaksi'))
            // console.log(data);
        }).catch(err => {console.log(err)});
    }

    render() {
        return (
            <div className="transaction">
                <Title title="Riwayat Transaksi"/>
                {/* <div className="judul-transaksi">
                    <h1>Riwayat Transaksi</h1>
                </div> */}
                <div className="riwayat-transaksi" id="daftar-transaksi">
                    {this.state.isTampil && (this.state.riwayatTransaksi).length === 0 && 
                    <div className="loader-riwayat-transaksi">
                        <Loader
                            type="Grid"
                            color="#537258"
                            height={70}
                            width={70}
                            />
                    </div>}

                    {this.state.isTampil && (this.state.riwayatTransaksi).length !== 0 && <TransactionList waktu="Waktu" jenis="Jenis" jumlah="Jumlah" rekening="Rekening"/>}
                    {this.state.isTampil &&  this.state.riwayatTransaksi.map((element) => (
                        <TransactionList waktu={element.transaction_time} jenis={element.type} jumlah={element.amount} rekening={element.linked_number}/>
                    ))
                    }
                    {!this.state.isTampil && <h2>Tidak ada riwayat transaksi</h2>}
                </div>
            </div>
        )
    }
}

export default Transaction;