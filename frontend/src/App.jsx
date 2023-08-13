import './App.css'
import { Route , Routes } from 'react-router-dom'
import Dashboard from './Dashboard'
import Classroom from './components/Classroom'
import Assignments from './components/Assignments'
import ViewAssignment from './components/ViewAssignment'
import Modules from './components/Modules'
import Testpage from './components/Testpage'



function App() {
  
  return (
    <>
    <Routes>
      <Route path='/admin' element={<Dashboard />}>
        <Route index path='/admin/dashboard' element={<h1 className='h-screen'>Dashboard</h1>} />
        <Route path='classroom' element={<Classroom />} />
        <Route path='classroom/:id' element={<ViewAssignment />} >
          <Route index element={<Assignments />}/>
          <Route path='modules' element={<Modules />}/>
          <Route path='modules/:id/test' element={<Testpage />}/>
          <Route path='lab' element={<h1>lab practical</h1>}/>
        </Route>
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
