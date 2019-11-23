import React from 'react';
import Axios from 'axios';
import './Transfer.css';
import Title from '../../Components/Title/Title';
import Loader from 'react-loader-spinner';
var XMLParser = require('react-xml-parser');

class Transfer extends React.Component {
	constructor(props) {
		super(props)
    this.state = {
      accountNumber: sessionStorage.getItem('noRek'),
      linkedNumber: '',
      status: false,
      amount: 0,
      isClicked: false,
      isSet: false,
      isFetching: false
    };
    this.onChange = this.onChange.bind(this);
	}

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  transfer = (e) => {
    e.preventDefault();
    this.setState({
      isFetching: true
    })
    var xmlRequest = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ws="http://ws.test.org/">'
      + '<soapenv:Header/>'
      + '<soapenv:Body>'
      + '<ws:doTransaction>'
      + '<accountNumber>' + this.state.accountNumber + '</accountNumber>'
      + '<linkedNumber>' + this.state.linkedNumber + '</linkedNumber>'
      + '<amount>' + this.state.amount + '</amount>'
      + '</ws:doTransaction>'
      + '</soapenv:Body>'
      + '</soapenv:Envelope>';

    Axios.post('http://ma.kam-itb.com:8080/soap-test/bankService', xmlRequest,
      {headers: {'Content-Type':'text/xml'}
    }).then(res => {
      var xml = new XMLParser().parseFromString(res.data);
      var value = xml.getElementsByTagName('return')[0].value
      if (value === 'true') {
        this.setState({
          status: true
        })
      }
      else {
        this.setState({
          status: false
        })
      }
      this.setState({
        isSet: true,
        isFetching: false
      })
    }).catch(err => {console.log(err)});
  }

  render() {
    return (
      <div className="transfer">
        <Title title="Transfer"/>
      { !this.state.isFetching &&
        <form>
          <input name="linkedNumber" type="text" placeholder="No Rekening / Virtual Account" className="trf-no-rekening" onChange={this.onChange}/>
          <input name="amount" type="text" placeholder="Jumlah" className="trf-amount" onChange={this.onChange}/>
          <button onClick={this.transfer} className="trf-button">Transfer</button>
        </form> }
      { this.state.isFetching &&
          <div className="loader-transfer">
            <Loader
              type="Puff"
              color="#537258"
              height={70}
              width={70}
            />
          </div> }
      { !this.state.isFetching && this.state.isSet && !this.state.status && <div className="status-failed"><h5>Transaksi gagal</h5></div> }
      { !this.state.isFetching && this.state.isSet && this.state.status && <div className="status-succeed"><h5>Transaksi berhasil</h5></div> }
      </div>
    )
  }
}

export default Transfer;
