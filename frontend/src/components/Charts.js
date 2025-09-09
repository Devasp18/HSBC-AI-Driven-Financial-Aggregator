import React from "react";
// import { Bar, Pie } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   BarElement,
//   ArcElement,
//   CategoryScale,
//   LinearScale
// } from "chart.js";

// ChartJS.register(BarElement, ArcElement, CategoryScale, LinearScale);

// function Charts({ data }) {
//   const platformTotals = {};
//   const senderTotals = {};

//   data.forEach(tx => {
//     platformTotals[tx.Platform] = (platformTotals[tx.Platform] || 0) + tx.Amount;
//     senderTotals[tx.Sender] = (senderTotals[tx.Sender] || 0) + tx.Amount;
//   });

//   return (
//     <div className="chart-wrapper">
//       <Bar
//         data={{
//           labels: Object.keys(platformTotals),
//           datasets: [{
//             label: "Amount by Platform",
//             data: Object.values(platformTotals),
//             backgroundColor: "teal"
//           }]
//         }}
//       />
//       <Pie
//         data={{
//           labels: Object.keys(senderTotals),
//           datasets: [{
//             label: "Sender Distribution",
//             data: Object.values(senderTotals),
//             backgroundColor: ["orange", "blue", "green", "purple", "pink"]
//           }]
//         }}
//       />
//     </div>
//   );
// }

// export default Charts;


import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from 'chart.js';
ChartJS.register(BarElement, CategoryScale, LinearScale);

function Charts({ transactions }) {
  const senders = [...new Set(transactions.map(txn => txn.Sender))];
  const senderTotals = senders.map(sender =>
    transactions
      .filter(txn => txn.Sender === sender)
      .reduce((sum, txn) => sum + txn.Amount, 0)
  );

  const chartData = {
    labels: senders,
    datasets: [{ label: 'Amount by Sender', data: senderTotals, backgroundColor: 'royalblue' }],
  };

  return <Bar data={chartData} />;
}
export default Charts;