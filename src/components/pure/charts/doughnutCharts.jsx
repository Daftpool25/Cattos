import React from 'react'
import Chart from "chart.js/auto";
import {Doughnut} from "react-chartjs-2"

function DoughnutCharts() {

    const data={
        labels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue'],
        datasets: [
          {
            label: 'Dataset 1',
            data: [65, 59, 80, 81, 56]
          }
        ]
    }
    
  return (
    <div>
        <Doughnut options={{responsive:true}} data={data}/>
    </div>
  )
}

export default DoughnutCharts