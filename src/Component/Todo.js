import React , {useState} from 'react'
import TodoStyle from './TodoStyle.css'
import CollapImage from './image/collap.png'
import plusImage from './image/Group 10.png'
import Modal from './Modal'
export default function Todo() {

  const [modalopen,setmodalopen]= useState(false)
   const handlechge = ()=>{
    setmodalopen(true);
   }
   const closemodal=()=>{
    setmodalopen(false);
   }
  
  return (
    <div className='todo'>
      
     <div> <h5 className='heading'>To      do</h5></div>
     <div className='plus'  onClick={handlechge}> <img src={plusImage}/></div>
     {modalopen &&<Modal  oncancel={closemodal}/> }
      <div className='collap' ><img  src={CollapImage}   /></div>
      
    </div>
  )
}
