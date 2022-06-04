import React from 'react'
import './widjet.scss'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonIcon from '@mui/icons-material/Person';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';

function Widjet({ type }) {
    let data;
    const amount = 220;
    const diff = 23;
    switch(type){
        case "user":
            data = {
                title: 'USERS',
                isMoney: false,
                link: 'See all users',
                icon: <PersonIcon className = "icon" style = {{color:'crimson', backgroundColor:'rgba(255,0,0,0.2)'}}/>
            };
            break;
        
        case 'order':
            data = {
                title: 'ORDERS',
                isMoney: false,
                link: 'See all orders',
                icon: <ShoppingCartOutlinedIcon className = "icon" style = {{color:'goldenrod', backgroundColor:'rgba(216,165,32,0.2)'}}/>
            };
            break;
        
        case 'earn':
            data = {
                title: 'EARNING',
                isMoney: true,
                link: 'View net earnings',
                icon: <MonetizationOnOutlinedIcon className = "icon" style = {{color:'green', backgroundColor:'rgba(0,128,0,0.2)'}}/>
            };
            break;
        case 'balance':
            data = {
                title: 'BALANCE',
                isMoney: true,
                link: 'See details',
                icon: <AccountBalanceWalletIcon className = "icon" style = {{color:'purple', backgroundColor:'rgba(128,0,127,0.2)'}}/>
            };
            break;
        default:
            break;
    }

  return (
    <div className='widj'>
            <div className="left">
                    <span className="title">{data.title}</span>
                    <span className="counter">{data.isMoney && "$"} {amount}</span>
                    <span className="link">{data.link}</span>
            </div>
            <div className="right">
                    <div className="percentage positiv">
                        <KeyboardArrowUpIcon />
                        {diff} %
                    </div>
                    {data.icon}
            </div>
    </div>
  )
}

export default Widjet