import React, { useEffect, useState } from 'react'
import './Add.css'
import axios from "axios";
import { toast } from 'react-toastify';
import up_img from '../../assets/upload_area.png'

const Add = () => {
  const url ="http://localhost:4000"; 
  const [image , setImage] = useState(null);
  const [data , setdata ] = useState({
    name:"", 
    description:"",
    Room:"",
    person:" ",
    category:"Clean"
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
    formData.append ( "name" , data.name);
    formData.append ( "description" , data.description);
    formData.append ( "Room" , Number(data.Room));
    formData.append ( "person" , data.person);
    formData.append ( "category" , data.category);
    formData.append ( "image" , image);

    const responce = await axios.post(`${url}/api/complaint/add` , formData);
     if ( responce.data.success) {
      setdata({
            name:"", 
            description:"",
            Room:"",
            person:"",
            category:"Clean",
      })
      setImage(null);
      toast.success(responce.data.message)
    } else {
      console.error('Failed to add complain item:', responce.data.message);
    }
  }

  useEffect(() => {
    console.log(data);
  } , [data])

  return (
    <div className='add'>
     <form className="flex-col" onSubmit={onSubmit}>
        <div className="add-img-upload flex-col">
            <p>Upload image</p>
            <label htmlFor='image'>
                <img src={ image ? URL.createObjectURL(image) : up_img } alt="" />
            </label>
            <input onChange={ (event) => {setImage(event.target.files[0])} }type="file" id="image" hidden required></input>
        </div>

         <div className="add-your-name flex-col">
           <p> Your name</p>
           <input onChange = {handlerOnchange} value={data.name} type="text"  name='name' placeholder="Type here"/>
         </div>
         
         <div className="add-Room flex-col">
            <p>Your Room </p>
            <input onChange = {handlerOnchange} value={data.Room} type="Number" name="Room" placeholder="Type here"/>
           </div>

         <div className="pro-desc flex-col">
              <p>Please give a description</p>
              <textarea onChange = {handlerOnchange} value={data.description}  name="description" rows="7" placeholder='write here'/>
        </div>

         <div className="add-category-price">
            <div className="cate">
                <p> category</p>
                <select onChange = {handlerOnchange}  name="category" >
                    <option value="Clean"> Clean </option>
                    <option value="Electrical">Electrical </option>
                    <option value="Plumbing">Plumbing</option>
                    <option value="Any Damages">Any Damages</option>
                    <option value="Other">Other</option>
                </select>
            </div>

        <div className="add-your-pos flex-col">
           <p> Position </p>
           <input onChange = {handlerOnchange} value={data.person} type="text"  name='person' placeholder="Type here"/>
         </div>

        </div>
         
         <button type="submit" className='add-btn'> ADD </button>

        </form>
    </div>
  )
}

export default Add
