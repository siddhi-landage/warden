import React , { useEffect , useState} from 'react'
import './ListComp.css'
import axios from 'axios';
import {toast} from 'react-toastify'

const ListComp = () => {
  const url = "http://localhost:4000";
  const [lists, setlists] = useState([]);
  const [listw , setlistw] = useState([]);

  const fetchcomps = async() => {
    const responce = await axios.get( `${url}/api/complaint/student`);
    console.log(responce.data);
    if( responce.data.success) {
      setlists(responce.data.data);
    }
    else {
      toast.error("Error in showing student complaints");
    }
  }

  const fetchcompw = async() => {
     const responce = await axios.get(`${url}/api/complaint/worker`);
     console.log("workers data :" , responce.data.data);
     if( responce.data.success) {
      setlistw( responce.data.data);
     } else {
      toast.error(" Error in showing comp. worker");
     }
  }

const removeNotices = async( complainId ) => {
    const responce = await axios.post(`${url}/api/complaint/remove`, {id : complainId});
    fetchcomps();
   if (responce.data.success) {
    toast.success("Notice Removed");
   } else {
     toast.error("Error");
   }
  }

  const removeNoticew = async( noticeId ) => {
    const responce = await axios.post(`${url}/api/complaint/remove`, {id : noticeId});
    fetchcompw();
   if (responce.data.success) {
    toast.success("Notice Removed");
   } else {
     toast.error("Error");
   }
  }

  
  useEffect ( () => {
    fetchcomps()
  } , [])

  useEffect ( () => {
    fetchcompw()
  } , [])


  return (
    <div className='compl'>
      <div className='box'>
        <h2> Worker Complaints</h2>
         <div className="list-table">
            <div className="table-title">
              <b>Name</b>
              <b>description</b>
              <b>Room</b>
              <b>category</b>
              <b>image</b>
              <b>Clear</b>
            </div>    
          {listw.map((item, index) => {
           return (
              <div key={index} className='table-title'>
                <p>{item.name}</p>
                <p>{item.description}</p>
                <p>{item.Room}</p>
                <p>{item.category}</p>
                <img src={`${url}/images/` + item.image} alt={item.subject}/>
                <p onClick = { () => removeNotices(item._id)} className="cursor">X</p>
              </div>
             )
         })}
       </div>
    </div>
    <div className='box'>
      <h2> Student Complaints</h2>
        <div className="list-table">
            <div className="table-title">
            <b>Name</b>
            <b>description</b>
            <b>Room</b>
            <b>category</b>
            <b>image</b>
            <b>Clear</b>
        </div>    
        {lists.map((item, index) => {
         return (
            <div key={index} className='table-title'>
                <p>{item.name}</p>
                <p>{item.description}</p>
                <p>{item.Room}</p>
                <p>{item.category}</p>
                <img src={`${url}/uploads/` + item.image} alt={item.subject}/>
                <p onClick = { () => removeNoticew(item._id)} className="cursor">X</p>
            </div>
          )
       })}
   </div>
    </div>
    </div>
  )
}

export default ListComp
