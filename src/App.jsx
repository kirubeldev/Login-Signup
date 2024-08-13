import { useState } from 'react'


import { BrowserRouter as Router , Routes , Route, BrowserRouter } from 'react-router-dom'
import Signup from './Signup'
import Login from './Login'
import { ToastContainer } from 'react-toastify'
import Home from './Home'
import Admin from './Admin'
function App() {
  return (
   <div>
 <BrowserRouter>
<Routes>
  <Route path='/' element={<Login/>} >  </Route>
  <Route path='/signup' element={<Signup/>} >  </Route>
  <Route path='/home' element={<Home/>} >  </Route>
  <Route path='/admin' element={<Admin/>} >  </Route>
  <Route path='*' element={<div>
    page not found
  </div>} >  </Route>
</Routes>
 </BrowserRouter>
    

   </div>
  )
}

export default App
