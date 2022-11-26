import React from 'react'
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import MedicationIcon from '@mui/icons-material/Medication';
import CandlestickChartIcon from '@mui/icons-material/CandlestickChart';
import AssessmentIcon from '@mui/icons-material/Assessment';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import ReportIcon from '@mui/icons-material/Report';
import TimelineIcon from '@mui/icons-material/Timeline';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import './container.css'
function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidenav">
               <ul className='sidebarlist'>
                <li><HomeWorkIcon className='TopIcon'/>Dashboard</li>
                <li>
                  <Link to='/records'>
                    <AssignmentIndIcon className='SideBarIcon' /> 
                    Records
                    </Link>
                </li>
                <li href="/pharmacy"><MedicationIcon className='SideBarIcon'/>Pharmacy</li>
                <li href="/appointments"><BookOnlineIcon className='SideBarIcon'/> Appointment</li>
                <li href="/Accounts"><CandlestickChartIcon className='SideBarIcon'/>Finances</li>
                <li href="/Accounts"><TimelineIcon className='SideBarIcon'/>Trend</li>
                <li href="/hr"><SupervisorAccountIcon className='SideBarIcon'/>Human Resource</li>
                <li href="/hr"><ReportIcon className='SideBarIcon'/>Reports</li>
                <li href="/settings"><SettingsIcon className='SideBarIcon' />Settings</li>
                <li href="/logout"><LogoutIcon className='SideBarIcon'/>Logout</li>
               </ul>
        </div>
    </div>
  )
}

export default Sidebar