import React from 'react';
import './TransactionList.css';

const TransactionList = (props) => {
    return (
        <div className="transaction-list">
            <span className="trs-waktu">{props.waktu}</span>
            <span className="trs-jenis">{props.jenis}</span>
            <span className="trs-jumlah">{props.jumlah}</span>
            <span className="trs-rekening">{props.rekening}</span>
        </div>
    )
}

export default TransactionList;