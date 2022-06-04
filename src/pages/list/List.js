import React from 'react'
import './list.scss'
import Nav from '../../components/navbar/Nav'
import SidBar from '../../components/sidbar/SidBar'
import DataTable from '../../components/datatable/DataTable'
function List() {
  return (
    <div className='list'>
        <SidBar />
        <div className='listContainer'>
            <Nav />
            <DataTable />
        </div>
    </div>
  )
}

export default List