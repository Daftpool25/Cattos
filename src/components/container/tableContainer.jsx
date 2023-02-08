import React from 'react'
import MainTable from '../pure/mainTable'
import TableFilter from '../pure/tableFilter'


function TableContainer({data,onClickDelete,selectUser}) {
  return (
    <div id='tableContainer'>

        <MainTable data={data} onClickDelete={onClickDelete} selectUser={selectUser} />
        <TableFilter/>
    </div>
  )
}

export default TableContainer