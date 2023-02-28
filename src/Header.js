import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SmsIcon from '@mui/icons-material/Sms';

function Header() {
  return (
    <div className='header'>

        <div className="header__left">
            <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="" />

            <div className="header__search">
                <SearchIcon/>
                <input type="text" />
            </div>
        </div>        

        <div className="header__right">
          <HeaderOption Icon={HomeIcon} title='Home'/>
          <HeaderOption Icon={GroupIcon} title='Network'/>
          <HeaderOption Icon={BusinessCenterIcon} title='Jobs'/>
          <HeaderOption Icon={SmsIcon} title='Messages'/>
          <HeaderOption Icon={NotificationsIcon} title='Notifications'/>
          <HeaderOption avatar="https://media.licdn.com/dms/image/D5603AQHyiAUrY7EXbQ/profile-displayphoto-shrink_100_100/0/1667287701962?e=1683158400&v=beta&t=uvVG9FuP27ezGAd3KFZXqD5NkP8-bxiSysZARq5NY7A" title='me'/>

        </div>



    </div>
  )
}

export default Header
