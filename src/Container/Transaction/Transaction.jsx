import React from 'react';
import './Transaction.css';
// import Title from '../../Components/Title/Title';
import TransactionList from '../../Components/TransactionList/TransactionList';

class Transaction extends React.Component {
    render() {
        return (
            <div className="transaction">
                {/* <Title title="Transaction"/> */}
                <div className="judul-transaksi">
                    <h1>Riwayat Transaksi</h1>
                </div>
                <div className="riwayat-transaksi">
                    <TransactionList waktu="Waktu" jenis="Jenis" jumlah="Jumlah" rekening="Rekening"/>
                    <TransactionList waktu="19-10-2019 17:04:29" jenis="debit" jumlah="300000" rekening="01234567"/>
                    <TransactionList waktu="19-10-2019 17:04:29" jenis="debit" jumlah="300000" rekening="01234567"/>
                    <TransactionList waktu="19-10-2019 17:04:29" jenis="debit" jumlah="300000" rekening="01234567"/>
                    <TransactionList waktu="19-10-2019 17:04:29" jenis="debit" jumlah="300000" rekening="01234567"/>
                    <TransactionList waktu="19-10-2019 17:04:29" jenis="debit" jumlah="300000" rekening="01234567"/>
                    <TransactionList waktu="19-10-2019 17:04:29" jenis="debit" jumlah="300000" rekening="01234567"/>
                    <TransactionList waktu="19-10-2019 17:04:29" jenis="debit" jumlah="300000" rekening="01234567"/>
                    <TransactionList waktu="19-10-2019 17:04:29" jenis="debit" jumlah="300000" rekening="01234567"/>
                    {/* <TransactionList waktu="19-10-2019 17:04:29" jenis="debit" jumlah="300000" rekening="01234567"/>
                    <TransactionList waktu="19-10-2019 17:04:29" jenis="debit" jumlah="300000" rekening="01234567"/>
                    <TransactionList waktu="19-10-2019 17:04:29" jenis="debit" jumlah="300000" rekening="01234567"/>
                    <TransactionList waktu="19-10-2019 17:04:29" jenis="debit" jumlah="300000" rekening="01234567"/>
                    <TransactionList waktu="19-10-2019 17:04:29" jenis="debit" jumlah="300000" rekening="01234567"/>
                    <TransactionList waktu="19-10-2019 17:04:29" jenis="debit" jumlah="300000" rekening="01234567"/>
                    <TransactionList waktu="19-10-2019 17:04:29" jenis="debit" jumlah="300000" rekening="01234567"/>
                    <TransactionList waktu="19-10-2019 17:04:29" jenis="debit" jumlah="300000" rekening="01234567"/>
                    <TransactionList waktu="19-10-2019 17:04:29" jenis="debit" jumlah="300000" rekening="01234567"/>
                    <TransactionList waktu="19-10-2019 17:04:29" jenis="debit" jumlah="300000" rekening="01234567"/>
                    <TransactionList waktu="19-10-2019 17:04:29" jenis="debit" jumlah="300000" rekening="01234567"/> */}
                    <TransactionList waktu="19-10-2019 17:04:29" jenis="debit" jumlah="300000" rekening="01234567"/>
                </div>
            </div>
        )
    }
}

export default Transaction;