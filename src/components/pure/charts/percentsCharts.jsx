import React from 'react'

function PercentsCharts() {
  return (
    <div className="percentsChartContainer"> 
        <div>
           <p>Projects</p> 
        </div>
        <label>Project 1</label>
        <progress max="100" value="50">50%</progress>
        <label>Project 2</label>
        <progress max="100" value="70">70%</progress>
        <label>Project 3</label>
        <progress max="100" value="20">20%</progress>
        <label>Project 4</label>
        <progress max="100" value="10">10%</progress>
        <label>Project 5</label>
        <progress max="100" value="90">90%</progress>

    </div>
  )
}

export default PercentsCharts