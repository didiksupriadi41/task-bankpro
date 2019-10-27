import React from 'react';
import './Home.css';

const Home = (props) => {
    return (
        <div className="Home">
            <h1>{props.name}</h1>
            <p>No Rekening</p>
            <p>Nama bank</p>
            <p>Saldo terakhir</p>
        </div>
    )
}

export default Home;