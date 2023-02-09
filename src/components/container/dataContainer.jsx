import React from 'react';
import DoughnutCharts from '../pure/charts/doughnutCharts';
import LineCharts from '../pure/charts/lineCharts';
import PercentsCharts from '../pure/charts/percentsCharts';
import BarCharts from '../pure/charts/barCharts';


function DataContainer() {

  return (
    <div className="chartsContainer">
        <LineCharts/>
        <div className="chartsInRowsContainer">
            <PercentsCharts/>
            <BarCharts/>
            <DoughnutCharts/>
        </div>
    </div>
  )
}

export default DataContainer