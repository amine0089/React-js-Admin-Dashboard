import React from 'react'
import './nav.scss'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';

function Nav() {
  return (
    <div className = 'navbar'>
        <div className="wraper">
            <div className="search">
                <input type="text" placeholder='Search...' />
                <SearchOutlinedIcon />
            </div>

            <div className="items">
                <div className="item">
                    <LanguageOutlinedIcon className = 'icon'/>
                    English
                </div>
                <div className="item">
                    <DarkModeOutlinedIcon className = 'icon'/>  
                </div>
                <div className="item">
                    <FullscreenExitOutlinedIcon className = 'icon'/>  
                </div>
                <div className="item">
                    <NotificationsNoneOutlinedIcon className = 'icon'/>
                    <div className="counter">1</div>
                </div>
                <div className="item">
                    <ChatBubbleOutlineOutlinedIcon className = 'icon'/>  
                    <div className="counter">2</div>
                </div>
                <div className="item">
                    <ListOutlinedIcon className = 'icon'/>  
                </div>
                <div className="item">
                    <img src="https://images.unsplash.com/photo-1582233479366-6d38bc390a08?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=883&q=80" alt="face" className='avatar'/> 
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Nav