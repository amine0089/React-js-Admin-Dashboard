import React from 'react'
import './spiner.scss'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {CircularProgressbar} from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function SpincerChart() {
  return (
    <div className='featerd'>
        <div className="top">
            <h1 className='title'>Total Revenue</h1>
            <MoreVertIcon fontSize='small'/>
        </div>
        <div className="bottom">
            <div className="feauterdchart">
                <CircularProgressbar value={70} text='70%' strokeWidth={5}/>
            </div>
            <p className="title">Total sales made today</p>
            <p className="amount">$420</p>
            <p className="description">
                Previous transactions processing. Last payments may not be included.
            </p>

            <div className="summery">
                <div className="item">
                    <div className="itemtitle">Target</div>
                    <div className="itemresault positiv">
                        <KeyboardArrowUpIcon fontSize='small' />
                        <div className="resaultAmout">
                            $8k
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="itemtitle">Last Week</div>
                    <div className="itemresault negativ">
                        <KeyboardArrowDownIcon fontSize='small' />
                        <div className="resaultAmout">
                            $12.5k
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="itemtitle">Last Month</div>
                    <div className="itemresault negativ">
                        <KeyboardArrowDownIcon fontSize='small' />
                        <div className="resaultAmout">
                            $10.5k
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SpincerChart