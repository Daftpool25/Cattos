import React  from 'react'
import TableContainer from '../container/tableContainer'
import Footer from '../pure/footer'


function Home({data}) {

  return (
    <div id="homeContainer">
        <TableContainer data={data} />
        <Footer/>
    </div>
  )
}

export default Home