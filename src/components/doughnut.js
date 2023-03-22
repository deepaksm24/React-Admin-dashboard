
import { Doughnut } from 'react-chartjs-2';
import React from "react";
import Chart from "chart.js/auto";

const DoughnutChart = () => {
    const labels = ['Social', 'Direct', 'Referral'];
    const data = {
      labels: labels,
      datasets: [
        {
          label: "Revenue",
          borderColor: "Black",
          data: [10000,40000,2000],
          backgroundColor:
          [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
          ],
          borderWidth: 2,
        },
      ],
    };
    return (
      <div id="doughnut">
        <Doughnut data={data} />
      </div>
    );
  };
  
  export default DoughnutChart;