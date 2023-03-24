import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [tempvalue, setTempvalue] = useState(20);
  const [tempcolor, setTempcolor] = useState('hot');
  const increstemp=() =>{

    const newtemp = tempvalue+1

    if (newtemp>=15){
      setTempcolor('hot')
    }

    if (newtemp<=30) {
      setTempvalue(newtemp)
    }
  
  }
  const decrestemp =() =>{
    const newtemp = tempvalue-1

    if (newtemp<=15) {
      setTempcolor('cold')
    }
    
    if (newtemp>=0) {
      setTempvalue(newtemp);
    }
    
  }
  return (
    <div className="App">
     <div className='tempbox'>
      <div className= {`displaytemp ${tempcolor}`}>{tempvalue}</div>
      <div className='button'>
        <button onClick={() => increstemp()} className='button1'>+</button>
        
        <button onClick={() => decrestemp()} className='button2'>-</button>
      </div>
     </div>
    </div>
  );
}

export default App;
