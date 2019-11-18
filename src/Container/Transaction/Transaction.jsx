import React from 'react';
import Title from '../../Components/Title/Title';
import TransactionList from '../../Components/TransactionList/TransactionList';

class Transaction extends React.Component {
    render() {
        return (
            <div className="Transaction">
                <Title title="Transaction"/>
                
                <TransactionList waktu="19-10-2019 17:04:29" jenis="debit" jumlah="300000" rekening="01234567"/>
                <TransactionList waktu="19-10-2019 17:04:29" jenis="debit" jumlah="300000" rekening="01234567"/>
                <TransactionList waktu="19-10-2019 17:04:29" jenis="debit" jumlah="300000" rekening="01234567"/>
            </div>
        )
    }
}

export default Transaction;