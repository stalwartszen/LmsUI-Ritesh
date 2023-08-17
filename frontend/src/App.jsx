import './App.css'
import { Route , Routes } from 'react-router-dom'
import Layout from './Layout'
import Classroom from './components/Classroom'
import Assignments from './components/Assignments'
import ViewAssignment from './components/ViewAssignment'
import Modules from './components/Modules'
import Testpage from './components/Testpage'
import Table from './components/Table'



function App() {
  
  return (
    <>
    <Routes>
      <Route path='/admin' element={<Layout />}>
        <Route index  element={<h1 className='h-screen'>Dashboard</h1>} />
        <Route path='classroom' element={<Classroom />} />
        <Route path='classroom/:id' element={<ViewAssignment />} >
          <Route index element={<Assignments />}/>
          <Route path='modules' element={<Modules />}/>
          <Route path='modules/:id/test' element={<Testpage />}/>
          {/* <Route path='abc' element={<Testpage />}/> */}
          <Route path='lab' element={<h1>lab practical</h1>}/>
        </Route>
        <Route path='chatroom' element={<div>chatroom</div>} />
        <Route path='notice' element={<div>notice</div>} />
        <Route path='activity' element={<div>activity</div>} />
        <Route path='elibrary' element={<div>elibrary</div>} />
        <Route path='tpo' element={<div><Table /></div>} />
      </Route>
    </Routes> 


    
    </>
  )
}

export default App
