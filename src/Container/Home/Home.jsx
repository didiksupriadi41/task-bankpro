import React from 'react';
import './Home.css';
import Title from '../../Components/Title/Title';
import ProfileList from '../../Components/ProfileList/ProfileList';

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
                <Title title="Welcome"/>
                <ProfileList category="No Rekening" data={this.state.noRekening} />
                <ProfileList category="Nama Bank" data={this.state.namaBank} />
                <ProfileList category="Saldo" data={this.state.saldo} />
            </div>
        )
    }
}

export default Home;