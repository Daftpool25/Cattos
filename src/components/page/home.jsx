import React  from 'react'
import TableContainer from '../container/tableContainer'
import Footer from '../pure/footer'


function Home({data, selectUser, onClickDelete}) {

  return (
    <div id="homeContainer">
        <TableContainer data={data} onClickDelete={onClickDelete} selectUser={selectUser}/>
        <Footer/>
    </div>
  )
}

export default Home