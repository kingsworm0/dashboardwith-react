import React from 'react'
import './header.css'
import "./container.css"
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import MailIcon from '@mui/icons-material/Mail';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
function Header() {
  return (
    <div className='header'>
        	<a href="/" class="logo">
				<LocalHospitalIcon className="Logo_Icon"/>
				HMCIS
				</a>
		<div class="header-right">
			<a classname="active" href='/search'>
				<SearchSharpIcon  className="Header_Icon"/>
			</a>
			<a class="active" href="/alerts">
				<NotificationsActiveIcon  className="Header_Icon" />
				</a>
			<a href="/patient">
				<ContactSupportIcon className="Header_Icon" />
			</a>
			<a href="/learn">
				<LightbulbIcon className="Header_Icon"/>
			</a>
			<a href="/available">
				
				<EventAvailableIcon className="Header_Icon"/>
			</a>
			<a class="userprofile">
			<MailIcon  className="Header_Icon"/>
			</a>
		</div>
    </div>
  )
}

export default Header