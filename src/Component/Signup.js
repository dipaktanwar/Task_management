import React from 'react' ;
import ArtImage from './image/Art.png';
import SignupPage from './SignupPage.css'

export default function Signup() {
  return (
    <div  className='signup'>
      <div className='right'> 
        <img src={ArtImage}   className='img'/>
        <p  className='para'> Welcome aboard my friend</p>
         <p  className='para1'> just a couple of clicks and we start</p>
      </div>
      <div className='left'>
          
          
        <div  className='form'>
            <h2> Register</h2>
       <div>< input type='text'  placeholder='Name'   className='input' /> </div> 
        <div> < input type='email'  placeholder='Email'  className='input' /> </div> 
       <div> < input type='password'  placeholder='Conform password'  className='input' /> </div> 
       <div> < input type='password'  placeholder='Password'  className='input' /> </div> 
                    <button  className='btn'> Register</button>
      
     </div>
      </div>

    </div>
  )
}
