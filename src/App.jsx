import { useEffect, useState } from 'react'
import './App.css'
import { FaDiceFive } from "react-icons/fa";

function App() {
  const [count, setCount] = useState(true)
  const [num, setNum] = useState("")
  const [court, setCourt] = useState("")
  
  useEffect(()=>{
    const URL ="https://api.adviceslip.com/advice";
    const fetchData= async()=>{ 
    try{
      const response = await fetch(URL);
      const data = await response.json();
      // console.log(data.slip.advice)
      setNum(data.slip.id)
      setCourt(data.slip.advice)
    }catch(err){
      console.log(err.message)
    }
  }
  fetchData()
  },[count])
  // console.log(count);
  return (
    <>
    <div className="cointainer">
      <div className="cort">
     <center>
        <p className='advnum'>ADVICE#{num}</p>
        <p className='adv'>"{court}"</p>
        <div className='svg'></div>
        <button className='span' onClick={()=>setCount(!count)}><FaDiceFive /></button>
        </center>
      
      </div>
      
    </div>
    </>
  )
}

export default App
