import React , {useState,} from 'react'
import { useEffect } from 'react';
import TodoStyle from './TodoStyle.css'
import CollapImage from './image/collap.png'
import plusImage from './image/Group 10.png'
import Modal from './Modal'
import './Divstyle/Divstyle.css'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

export default function Todo() {
  const [data,setdata]=useState([])
  const navigate =useNavigate();
//   useEffect(async()=>{
//     try {
//       let res=await axios.get('http://localhost:5400/api/v1/taskroutes/todo').then((res)=>{
// }).catch(err=>{
//   console.log(err);
// })
      
//     } catch (error) {
//       console.log(error);
      
//     }
//   },[])
// useEffect(async function (){},[])


useEffect(() => {
  async function todo(){
  console.log('useffecgjsdlkfjalskjflk');
  try {
    let res= axios.get('http://localhost:5400/api/v1/taskroutes/todo', { withCredentials: true }).then((res)=>{
      console.log(res);
      setdata(res.data.data)
}).catch(err=>{
console.log(err);
})
    
  } catch (error) {
    console.log(error);
    
  }
 
}
todo();
}, []);
// let arr=data.data.data;
console.log(data);
  const [modalopen,setmodalopen]= useState(false)
   const handlechge = ()=>{
    setmodalopen(true);
   }
   const closemodal=()=>{
    setmodalopen(false);
   }
  
  return (
    <>
    <div className='todo' style={{display:'flex',flexDirection:'column'}} >
      <div style={{display:'flex'}}>
        
     <div> <h5 className='heading'>To      do</h5></div>
     <div className='plus'  onClick={handlechge}> <img src={plusImage}/></div>
     {modalopen &&<Modal  oncancel={closemodal}/> }
      <div className='collap' ><img  src={CollapImage}   /></div>
      <div>
      
       
      </div>
      </div>
      {/* <TodoCard></TodoCard> */}
    
      <div style={{display:'flex',flexDirection:'column'}}>
    {data.map((ele,index)=>{
      console.log();
      return (<>
      <div className='todoo'>
      <p>
          {`${ele.priority}`}
        </p>
        <h3>
        {`${ele.taskTittle}`}
        </h3>
        <p>
          {`checklist :${ele.checklist}`}
        </p>
        <p>
          {`date : ${ele.date}`}
        </p>
        
      </div>
      </>)
    })}
    </div>
    </div>
    
    </>
  )
}
