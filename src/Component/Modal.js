import React,{useState} from 'react'
import './Modalstyle.css'
import Highimage from './image/Frame 6.png'
import Midimage from './image/Frame 5.png'
import Lowimage from './image/Frame 7.png'
import Addimage from './image/add.png'
import  Deleteimage from './image/Delete.png'

export default function Modal({oncancel}) {
    const priorities = ['HiGH', 'MODRATE', 'LOW'];

  const handlePriorityChange = (priority) => {
    console.log(`${priority} PRIORITY`);
    
  };
  const [inputs, setInputs] = useState([]);
  const [Count ,setCount] = useState(0);
  const [isChecked, setIsChecked] = useState(false);

  const handleInputChange = (index, value) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
  };

  const handleAddInput = () => {
    setInputs([...inputs, '']);
    console.log(inputs);
    setCount(Count + 1);
    
  };
  const handleDeleteInput = (index) => {
    const newInputs = [...inputs];
    newInputs.splice(index, 1);
    setInputs(newInputs);
    setCount(Count-1);
  };
  const handleCheckboxChange = () => {
   
    setIsChecked(!isChecked)
   
  };
  
  
  return (
    <div className='modal'>
         <div  className='container'>
         <div>
            <h5 className='title'> Title*</h5>
            <input  type='text' placeholder='Enter Task Title'  className ='inputfiald'/>
         </div>
         <div className='priority'>
            <h4> Select priority *</h4>
           
      <div onClick={() => handlePriorityChange('HIGH')}  className ='imgdiv'>< img src={Highimage}  /> </div>
      <div onClick={() => handlePriorityChange('MODRATE')}  className ='imgdiv' > < img src={Midimage}  />  </div>
      <div onClick={() => handlePriorityChange('LOW')}  className ='imgdiv'> < img src={Lowimage }  />  </div>
    </div>
      <div className='checklist'>
         <h5> Checklist( /{Count} )</h5>
         <div className='div2'>
        {inputs.map((inputValue, index) => (
            
                
        <div className="div1">
          <div key={index}>
             <input
          type="checkbox"
          
          
        />
            <input
              type="text"
              value={inputValue}
              onChange={(e) => handleInputChange(index, e.target.value)}
              className="input"
              placeholder='Add Task Here'
            />
             <button className="delete-btn" onClick={() => handleDeleteInput(index)}>
             <img src={Deleteimage}/>
            </button>
           
          </div>
          </div>
        
        ))}
        
          </div>
          </div> 
           <div onClick={handleAddInput}  className='addbtn'> < img src={Addimage }/>  </div>

           <div className='footerbtn'>    
           <button  className='select'> Select Due Date</button>
           <button className='cancel'  onClick={()=>{oncancel()}}> Cancel</button>
           <button className='save'> Save</button>

           </div>
           </div>
    
    </div>
  )
}
