import React from 'react'
import Navbar from '../src/Components/Navbar/Navbar.jsx'
import Sidebar from '../src/Components/Sidebar/Sidebar.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Add from '../src/Pages/Add/Add.jsx';
import List from '../src/Pages/List/List.jsx';
import { ToastContainer , toast  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ListComp from './Pages/ListComp/ListComp.jsx';

const App = () => {
  return (
    <div className='App'>
       <ToastContainer/>
        <Navbar />
        <hr />
        <div className="app-components" style={{ display: 'flex' }}>
          <Sidebar />
          <div style={{ flex: 1 }}>
            <Routes>
              <Route path="/add" element={<Add/>} />
              <Route path="/list" element={<List />} />
              <Route path='/listcomp' element={<ListComp/>} />
            </Routes>
          </div>
        </div>
  </div>
  )
}

export default App
