
import React from 'react';
import { Link } from 'react-router-dom';
import ArtImage from './image/Group 3.png'
import AnalyticsImage from './image/Group 4.png'
import SettingImage from './image/Group 5.png'
import Image from './image/Group 1.png'
import './Dashboardstyle.css'


export default function Dashboard() {
  return (
    <div  className='dashboard'>
     <div  className='image'> < img src={Image}/> </div>
     <ul>
       <li  ><Link  to ='/board'>< img src={ArtImage}   className='hero'/></Link></li>
       <li><Link  to ='/analytics'>< img  src={ AnalyticsImage}/></Link></li>
       <li> <Link  to ='/setting'>< img  src={ SettingImage}/></Link></li>
       <li>  <Link  to='/'>  </Link></li>
     </ul>
    </div>
  );
}
 
