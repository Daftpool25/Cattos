import React from 'react'
import MainTable from '../pure/mainTable'
import TableFilter from '../pure/tableFilter'


function TableContainer({data}) {
  return (
    <div id='tableContainer'>

        <MainTable data={data} />
        <TableFilter/>
    </div>
  )
}

export default TableContainer