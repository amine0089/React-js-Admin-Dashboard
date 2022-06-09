import React from 'react'
import './sidBar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsIcon from '@mui/icons-material/Notifications';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import {Link} from 'react-router-dom'

import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";

function SidBar() {
  const {dispatch} = useContext(DarkModeContext)
  return (
    <div className='sidbar'>
          <div className="top">
            <Link to="/" style = {{textDecoration:'none'}}>
              <span className='logo'>AmineAdmin</span>
            </Link>
          </div>
          <hr />
          <div className="center">
              <ul>
                <p className="title">MAIN</p>           
                  <li>
                    <DashboardIcon className='icon'/>
                    <span>Dashboard</span>
                  </li>
                <p className="title">LISTS</p>
                <Link to="/users" style = {{textDecoration:'none'}}>
                    <li>
                        <PeopleAltOutlinedIcon className='icon'/>
                      <span>Users</span>
                    </li>
                  </Link>
                  
                  <li>
                    <AddBusinessIcon className='icon'/>
                    <span>Products</span>
                  </li>
                  <li>
                      <CreditCardIcon className='icon'/>
                    <span>Orders</span>
                  </li>
                  <li>
                    <LocalShippingIcon className='icon'/>
                    <span>Delivery</span>
                  </li>
                  <p className="title">USEFULL</p>
                  <li>
                    <QueryStatsIcon className='icon'/>
                    <span>Stats</span>
                  </li>
                  <li>
                    <NotificationsIcon className='icon'/>
                    <span>Notifications</span>
                  </li>
                  <li>
                    <FitnessCenterIcon className='icon'/>
                    <span>System Health</span>
                  </li>
                  <li>
                    <PsychologyIcon className='icon'/>
                    <span>Logs</span>
                  </li>
                  <li>
                    <SettingsIcon className='icon'/>
                    <span>Settings</span>
                  </li>
                  <p className="title">USER</p>
                  <li>
                    <AccountCircleOutlinedIcon className='icon'/>
                    <span>Profile</span>
                  </li>
                  <li>
                    <ExitToAppOutlinedIcon className='icon'/>
                    <span>Logout</span>
                  </li>
              </ul>
          </div>
          <div className="bottom">
              <div className="colorOption" onClick={() => dispatch({type: "LIGHT"})}></div>
              <div className="colorOption" onClick={() => dispatch({type: "DARK"})}></div>
              
          </div>
    </div>
  )
}

export default SidBar