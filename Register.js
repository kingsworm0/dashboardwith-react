import React from 'react'
import './login.css'
// import Header from "./Header.js"
import MailIcon from '@mui/icons-material/Mail';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import LockIcon from '@mui/icons-material/Lock';
import PersonIcon from '@mui/icons-material/Person';
function Login() {
  return (
	<div className='login'>
		<center>
		<h1> <LocalHospitalIcon/>Register HMS</h1>
			<form action="/auth" method="post">
			<label for="username">
			<PersonIcon />
				</label>
				<input type="text" name="Username" placeholder="Username" id="username" required />
				<label for="username">
			<MailIcon />
				</label>
				<input type="text" name="email" placeholder="Email" id="username" required />
				<label for="password">
					<LockIcon/>
				</label>
				<input type="password" name="password" placeholder="Password" id="password" required />
				<input type="submit"  value="Register" />
			</form>
		</center>
    </div>
  )
}

export default Login