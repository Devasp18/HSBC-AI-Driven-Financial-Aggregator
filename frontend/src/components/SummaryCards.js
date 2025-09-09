import React from 'react';

function SummaryCards({ transactions }) {
  const totalAmount = transactions.reduce((sum, txn) => sum + txn.Amount, 0);
  return (
    <div style={{ display: 'flex', gap: '2rem', marginBottom: '2rem' }}>
      <div>Total Transactions: {transactions.length}</div>
      <div>Total Amount: ₹{totalAmount}</div>
    </div>
  );
}
export default SummaryCards;

