import React from 'react'
import './singl.scss'
import SidBar from '../../components/sidbar/SidBar'
import Nav from '../../components/navbar/Nav'
import Chart from '../../components/chart/Chart'
function Singl() {
  return (
    <div className='single'>
        <SidBar />
        <div className='singleContainer'>
            <Nav />
            <div className='top'>
                <div className='left'>
                    <div className='editButton'>Edit</div>
                    <h1 className='title'>
                        Information
                    </h1>

                    <div className='item'>
                        <img src='https://images.unsplash.com/photo-1582233479366-6d38bc390a08?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=883&q=80' className='imageItem' alt='face' />

                        <div className='details'>
                            <h1 className='itemTitle'>Amine</h1>
                            <div className='detailsItem'>
                                <span className='itemKey'>Email:</span>
                                <span className='itemValue'>mohamedamine371@gmail.com</span>
                            </div>
                            <div className='detailsItem'>
                                <span className='itemKey'>Phone:</span>
                                <span className='itemValue'>+213 796000821</span>
                            </div>
                            <div className='detailsItem'>
                                <span className='itemKey'>Address:</span>
                                <span className='itemValue'>Meslak St, 16 Mascara</span>
                            </div>
                            <div className='detailsItem'>
                                <span className='itemKey'>Country:</span>
                                <span className='itemValue'>Algeria</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='right'>
                   <Chart aspect={3 / 1} title = "User Spending (Last 6 Months)"/>
                </div>
            </div>


            <div className='bottom'></div>
        </div>
    </div>
  )
}

export default Singl