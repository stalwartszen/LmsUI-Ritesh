import './App.css'
import { Route , Routes } from 'react-router-dom'
import Dashboard from './Dashboard'
import Assignments from './components/Assignments'
import Assignmentcard from './components/assignmentcard'
import Header from './components/Header'


function App() {
  
  return (
    <>
    <Routes>
      <Route path='/admin' element={<Dashboard />}>
        <Route path='assignment' element={<Assignments />}></Route>
        <Route path='assignment/:id' element={<Assignments />}></Route>
      </Route>
    </Routes> 
    </>
  )
}

export default App
