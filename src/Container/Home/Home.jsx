import React from 'react';
import './Home.css';
import Title from '../../Components/Title/Title';

class Home extends React.Component {
    constructor(){
        super();
        this.state = {
            noRekening: sessionStorage.getItem('noRek'),
            namaBank: 'Bank Pro',
            saldo: 10000
        }
    }
    
    render() {
        return(
            <div className="home">
                <Title title="Home"/>
                <p>No Rekening : {this.state.noRekening}</p>
                <p>Nama bank : {this.state.namaBank}</p>
                <p>Saldo terakhir : {this.state.saldo}</p>
            </div>
        )
    }
}

export default Home;