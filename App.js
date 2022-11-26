import React from 'react'
import "./App.css"
import Header from "./Header"
import Sidebar from './Sidebar'
import Datagrid from './DataGrid'
// import Homepage from "./Homepage"
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom'
import "./container.css"

function  App() {
  return (
  // <Router>
     <div className='app'>



         <BrowserRouter>
      {/* <Navbar /> If actual page is Login/Register, do not display */}
        <div className="container">
          <Routes>
            <Route path="/" element={[<Header/>,<Sidebar/>]} />
            <Route path="/records" element={[<Header/>,<Sidebar/>,<Datagrid/>]} />
            <Route path="/test" element={<Datagrid />} />
            {/* <Route path="/register" element={<Register />} /> */}

          </Routes>
        </div>
      {/* <Footer /> */}
      </BrowserRouter>







      {/* <div className='Header'>
        <Header />
        </div>
       <div className='Container'>
            <div className='Sidebar'>
              <Sidebar />
            </div>
            <div className='Content'>
              <Datagrid/>
            </div>
            
      </div>         
          <Routes>
                 <Route exact path='/' element={[<Header />,<Sidebar />]}></Route>
                 <Route exact path='/records' element={[<Header />,<Sidebar />,< Datagrid />]}></Route>
  </Routes>*/}
         </div>
      //  </Router> 
   )
}

export default App