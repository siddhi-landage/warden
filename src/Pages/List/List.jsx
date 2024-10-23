import React, { useState , useEffect} from 'react'
import './List.css'
import axios from 'axios';
import {toast} from 'react-toastify'

const List = () => {

  const url = "http://localhost:4000";
  const [list, setlist] = useState([]);

  const fetchlist = async() => {
    const responce = await axios.get( `${url}/api/notice/list`);
    console.log(responce.data);
    if( responce.data.success) {
      setlist(responce.data.data);
    }
    else {
      toast.error("Error in showing notices");
    }
  }

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const removeNotice = async( noticeId ) => {
    const responce = await axios.post(`${url}/api/notice/remove`, {id : noticeId});
    fetchlist();
   if (responce.data.success) {
    toast.success("Notice Removed");
   } else {
     toast.error("Error");
   }
  }

  useEffect ( () => {
    fetchlist()
  } , [])

  return (
    <div className=" list add flex-col">
        <div className="list-table">
            <div className="table-title">
                <b>Subject</b>
                <b>file</b>
                <b>Date</b>
                <b>Delete</b>
            </div>
          
    {list.map((item, index) => {
      return (
        <div key={index} className='table-title'>
         <p>{item.subject}</p>
         <img src={`${url}/Uploads/` + item.image} alt={item.subject}/>
         <p>{formatDate(item.Date)}</p>
          <p onClick = { () => removeNotice(item._id)} className="cursor">X</p> 
        </div>
      )
    })}
   </div>
  </div>
  )
}

export default List;
