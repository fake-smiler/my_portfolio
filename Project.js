import React from 'react'
import {useState} from 'react';
import './Project.css';

const Project = ({img,title,link}) => {
    const[show,setShow] = useState(false);
    
  return (
  
     <a href = {link}>
         <div className='project'
         onMouseEnter={()=>setShow(true)} 
         onMouseLeave={()=>setShow(false)}>
             {
                 show ? (
                     <div className='project__content'>
                         <h4>{title}</h4>
                         </div>
                 ) : (
                     <img src = {img} alt = ""/>

                 )
             }
         </div>
     </a>  
       
     
  )
}

export default Project