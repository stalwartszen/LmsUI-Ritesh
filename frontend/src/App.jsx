import './App.css'
import { Route , Routes } from 'react-router-dom'
import Dashboard from './Dashboard'
import Assignments from './components/Classroom'



function App() {
  
  return (
    <>
    <Routes>
      <Route path='/admin' element={<Dashboard />}>
        <Route index path='/admin/dashboard' element={<h1 className='h-screen'>Dashboard</h1>} />
        <Route path='classroom' element={<Assignments />} />
        <Route path='chatroom' element={<div>chatroom</div>} />
        <Route path='notice' element={<div>notice</div>} />
        <Route path='activity' element={<div>activity</div>} />
        <Route path='elibrary' element={<div>elibrary</div>} />
        <Route path='tpo' element={<div>tpo</div>} />
      </Route>
    </Routes> 
    </>
  )
}

export default App
