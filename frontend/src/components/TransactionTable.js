import React from "react";

function TransactionTable({ data }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Sender</th>
          <th>Receiver</th>
          <th>Amount</th>
          <th>Type</th>
          <th>Platform</th>
          <th>Date</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {data.map((tx, idx) => (
          <tr key={idx}>
            <td>{tx.Sender}</td>
            <td>{tx.Reciever}</td>
            <td>{tx.Amount}</td>
            <td>{tx.TransactionType}</td>
            <td>{tx.Platform}</td>
            <td>{tx.TimeStamp}</td>
            <td>{tx.Decription}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TransactionTable;