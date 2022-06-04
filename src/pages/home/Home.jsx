import React from 'react'
import './home.scss'
import SidBar from '../../components/sidbar/SidBar'
import Nav from '../../components/navbar/Nav'
import Widjet from '../../components/widjets/Widjet'
import Chart from '../../components/chart/Chart'
import SpincerChart from '../../components/spinerchart/SpincerChart'
import List from '../../components/table/Table'
function Home() {
  return (
    <div className='home'>
        <SidBar />
        <div className="homeContainer">
            <Nav />
            <div className="widjets">
                <Widjet type = "user"/>
                <Widjet type = "order"/>
                <Widjet type = "earn"/>
                <Widjet type = "balance"/>
            </div>

            <div className="charts">
                <SpincerChart />
                <Chart aspect={2 / 1} title = "Last 6 Months (Revenue)"/>
            </div>
            <div className="listContainer">
                <div className="listTitle">
                    Last Transactions
                </div>
                <List />
            </div>
        </div>
    </div>
  )
}

export default Home