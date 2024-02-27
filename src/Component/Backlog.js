import React from 'react'
import Backlogstyle from './Backlogstyle.css'
import CollapImage from './image/collap.png'


export default function Backlog() {
  return (
    <div className='backlog'>
      <h5 className='heading2'> Backlog</h5>
      <div className='collap2'> <img  src={CollapImage}/></div>
    </div>
  )
}
