import React from 'react'
import Chart from "chart.js/auto"
import {Bar} from "react-chartjs-2"

function BarCharts() {
  const labels=["January","February", "March", "April","May","June","July","August","september","October","November","December"]
  
  const data={
    labels: labels,
    datasets:[ 
      {
        label: 'Dataset 1',
        data: [200,455,665,345,767,186,436,99,276,100,456,729]
      }
    ]
  }

  return (
    <div>
        <Bar data={data} property={{Response:true}}/>
    </div>
  )
}

export default BarCharts