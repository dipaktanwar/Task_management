import React from 'react'
import BoardStyle from './BoardStyle.css'
import Backlog from './Backlog'
import Todo from './Todo'
import Progres from './Progres'
import Done from './Done'

export default function Board() {
  return (
    <div className='Board'>
       <h2> Board </ h2>
       <div  className='herosection'>
       <Backlog/>
       <Todo/>
       <Progres/>
       <Done/>
       </div>
    </div>
  )
}

