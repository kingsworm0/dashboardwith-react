<Router>
      <div className="App">
          <Routes>
              <Route exact path='/' element={<Header/>}>
                  {/* <Sidebar /> */}
              </Route>
              <Route exact path='/records' element={< Datagrid />}></Route>
              <Route exact path='/contact' element={< Sidebar/>}></Route>
          </Routes>
      </div>
    </Router>