import React from "react";
import ArtImage from "./image/Art.png";
import SignupPage from "./SignupPage.css";
import { useState } from "react";
import axios from 'axios';
import {useNavigate} from 'react-router-dom'


export default function Signup() {
  const navigate=useNavigate();
  async function submitHandler(){
console.log(formValue);
try {
  let dataa ={fullName: formValue.name, email: formValue.email, password:formValue.password}
  const res = await axios.post('http://localhost:5400/api/v1/user/register',dataa)
  console.log(res);
  if(res.data.success==true){
    window.alert(res.data.message)
    navigate('/board')
  }

} catch (error) {
  window.alert(error.response.data.message)
  console.log(error);
  
}
  }
  const [formValue,setformvalue]=useState({name:'',email:'',password:''})
  return (
    <div className="signup">
      <div className="right">
        <img src={ArtImage} className="img" />
        <p className="para"> Welcome aboard my friend</p>
        <p className="para1"> just a couple of clicks and we start</p>
      </div>
      <div className="left">
        <div className="form">
          <h2> Register</h2>
          <div>
            <input type="text" placeholder="Name" className="input" value={formValue.name} onChange={(e)=>{
                setformvalue((prev)=>{
                  return {...prev,name:e.target.value}
                })
            }}/>
          </div>
          <div>
            {" "}
            <input type="email" placeholder="Email" className="input"  value={formValue.email} onChange={(e)=>{
                setformvalue((prev)=>{
                  return {...prev,email:e.target.value}
                })
            }}/>
          </div>
          <div>
            
            <input
              type="password"
              placeholder="password"
              className="input"
              value={formValue.password} onChange={(e)=>{
                setformvalue((prev)=>{
                  return {...prev,password:e.target.value}
                })
            }}
            />
          </div>
          <div>
            {" "}
            <input
              type="password"
              placeholder="Confirm Password"
              className="input"
             
            />
          </div>
          <button className="btn" onClick={submitHandler}> Register</button>
          <p>
        Have an account?
      </p>
        <button type="button" className='register' onClick={(e)=>{
            navigate('/Login')
        }}>Login</button>
        </div>
      </div>
    </div>
  );
}
