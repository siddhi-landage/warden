import React, { useEffect, useState , useMemo} from 'react'
import './Add.css'
import axios from "axios";
import { toast } from 'react-toastify';
import up_img from '../../assets/upload_area.png'

const Add = () => {
  const url ="http://localhost:4000"; 
  const [image, setimage] = useState(null);
  const [data , setdata ] = useState({
    subject:"", 
    Date:""
  } )

  const handlerOnchange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setdata((data => ( {...data , [name] : value})))
  }


  const onSubmit = async (event) => {
    // prevent the default refreshing of the page 
    event.preventDefault();
    const formData = new FormData();
    formData.append ( "subject" , data.subject);
    formData.append ( "Date" , data.Date);
    formData.append ( "image" , image);

    const responce = await axios.post(`${url}/api/notice/add` , formData);
     if ( responce.data.success) {
      setdata({
            subject:"", 
            Date:"",
      })
      setimage(null);
      toast.success(responce.data.message)
    } else {
      console.error('Failed to add Notice:', responce.data.message);
    }
  }


  useEffect(() => {
    console.log(data);
  } , [data])


  return (
    <div className='add'>
     <form className="flex-col" onSubmit={onSubmit}>
        <div className="add-pdf-upload flex-col">
            <p>Upload Image</p>
            <label htmlFor='image'>
                <img src={ image ? URL.createObjectURL(image) : up_img} alt="" />
            </label>
            <input onChange={ (event) => {setimage(event.target.files[0])} } type="file" id="image" hidden required></input>
        </div>

         <div className="add-sub flex-col">
           <p> Subject</p>
           <input onChange = {handlerOnchange} value={data.subject} type="text"  name='subject' placeholder="Type here"/>
         </div>
         
         <div className="add-Date flex-col">
            <p>Date </p>
            <input onChange = {handlerOnchange} value={data.Room} type="Date" name="Date" placeholder="Type here"/>
           </div>
           
         <button type="submit" className='add-btn'> ADD </button>

        </form>
    </div>
  )
}

export default Add;
