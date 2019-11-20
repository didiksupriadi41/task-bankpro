import React from 'react';
import './Transfer.css';
import Title from '../../Components/Title/Title';

class Transfer extends React.Component {
    render() {
        return (
            <div className="transfer">
                <Title title="Transfer"/>
                <form>
                    <input type="text" placeholder="No Rekening / Virtual Account" className="trf-no-rekening"/>
                    <input type="text" placeholder="Jumlah" className="trf-amount"/>
                    <button className="trf-button">Transfer</button>
                </form>

            </div>
        )
    }
}

export default Transfer;