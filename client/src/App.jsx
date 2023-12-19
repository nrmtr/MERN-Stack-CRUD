import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import NewUsers from './New'
import Users from './Users'
import UpdateUsers from './Update'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Users />}></Route>
          <Route path='/new' element={<NewUsers />}></Route>
          <Route path='/update/:id' element={<UpdateUsers />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
