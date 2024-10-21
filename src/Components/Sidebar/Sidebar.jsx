import React from 'react'
import './Sidebar.css'
import { NavLink } from 'react-router-dom'
import add from '../../assets/notice add.jpeg' 
import show from '../../assets/show notice.jpeg'
import delete_img from '../../assets/DELETE_IMG.jpeg'

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
         {/* <NavLink to ='/Remove' className="option">
            <img src={delete_img} alt="remove" />
            <p>Remove Notice</p>
         </NavLink> */}
        </div>
  
  )
}

export default Sidebar;
