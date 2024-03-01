import React, { useEffect, useState } from 'react'
import BoardStyle from './BoardStyle.css'
import Backlog from './Backlog'
import Todo from './Todo'
import Progres from './Progres'
import Done from './Done'
import Dashboard from './Dashboard'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
export default function Board() {
  let [user,setuser]=useState();
 
  return (
    <>
  <Dashboard></Dashboard>
  
    <div className='Board'>
      <h3>welcome {user}</h3>
       <h2> Board </ h2>
       <div  className='herosection'>
       <Backlog/>
       <Todo/>
       <Progres/>
       <Done/>
       </div>
    </div>
    </>
  )
}

