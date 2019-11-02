import React from 'react';
import './Home.css';

class Home extends React.Component {
    render() {
        return(
            <div className="Home">
                <h1>Home</h1>
                <p>No Rekening</p>
                <p>Nama bank</p>
                <p>Saldo terakhir</p>
            </div>
        )
    }
}

export default Home;