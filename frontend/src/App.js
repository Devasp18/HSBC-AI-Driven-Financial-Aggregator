import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SummaryCards from './components/SummaryCards';

function App() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:5000/api/transactions')
      .then(res => {
        console.log("Fetched data:", res.data);  
        setTransactions(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch data:', err);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>📡 Bank Transactions Dashboard</h2>

      {!loading && <SummaryCards transactions={transactions} />}

      {loading ? (
        <p>Loading transactions...</p>
      ) : transactions.length === 0 ? (
        <p>No transactions found.</p>
      ) : (
        <table border="1" cellPadding="8" style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#f0f0f0' }}>
              <th>Sender</th>
              <th>Reciever</th>
              <th>Amount</th>
              <th>Type</th>
              <th>Transaction ID</th>
              <th>Date</th>
              <th>Status</th>
              <th>Platform</th>
              <th>Balance</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((txn, idx) => (
              <tr key={idx}>
                <td>{txn.Sender}</td>
                <td>{txn.Reciever}</td>
                <td>{txn.Amount}</td>
                <td>{txn.TransactionType}</td>
                <td>{txn.TransactionId}</td>
                <td>{txn.TimeStamp}</td>
                <td>{txn.Status}</td>
                <td>{txn.Platform}</td>
                <td>{txn.Balance}</td>
                <td>{txn.Description || txn.Decription}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;