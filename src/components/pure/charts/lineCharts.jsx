import React from 'react'
import Chart from 'chart.js/auto';
import { Line } from 'react-chartjs-2';

function LineCharts() {

    const labels = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'];
    const data = {
    labels: labels,
    datasets: [{
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
    }]
    };

  return (
    <>
        <Line data={data} />
    </>
  )
}

export default LineCharts