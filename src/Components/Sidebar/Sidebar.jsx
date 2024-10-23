import React from 'react'
import './Sidebar.css'
import { NavLink } from 'react-router-dom'
import add from '../../assets/notice add.jpeg' 
import show from '../../assets/show notice.jpeg'
import list from '../../assets/list.jpeg'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <NavLink to= '/add' className="option">
            <img src={add} alt="" />
            <p>Add Notice </p>
         </NavLink>
         <NavLink  to ='/list' className="option">
            <img src={show} alt="" />
            <p>List Notices</p>
         </NavLink>
         <NavLink to ='/listcomp' className="option">
            <img src={list} alt=""/>
            <p>See Complains</p>
         </NavLink>
        </div>
  
  )
}

export default Sidebar;
