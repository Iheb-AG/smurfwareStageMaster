import { useEffect, useRef, useState } from "react"


export default function Timer(){
  const [houres,setHoures] = useState("00")
  const [minutes, setMinutes] = useState("00")
  const [seconds, setSeconds] = useState("00") 
  
  function handleInput(e){
    setHoures(e.target.value.substring(4,6) ? e.target.value.substring(4,6)  : "00" )
    setMinutes(e.target.value.substring(2,4) ? e.target.value.substring(2,4) : "00")
    setSeconds(e.target.value.substring(0,2) ? e.target.value.substring(0,2) : "00")
  }


  function handleTimerReset(e){
    setMinutes("00")
    setSeconds("00")
    setHoures("00")
  }

  function handleTimerStart(e){
    setInterval(() => {
      
    setSeconds(prevValue =>{
      return prevValue !="00" ? String((parseInt(prevValue)-1)%60) : "00" 
    })
    
    setHoures(prevValue =>{
      return prevValue !="00" ? String(parseInt(prevValue)-1) : "00" 
    })

    setMinutes(prevValue =>{
      return prevValue !="00" ? String(parseInt(prevValue)-1) : "00" 
    })

  }, 1000);
  }
  return (
    <div>
      {/* getting the time using input */}
      <label htmlFor="Timer">Timer : </label>
      <div className="timer_display" style={{display:"flex" ,justifyContent:"center"}}>
        <h1 id="houres">{houres}</h1>
        <h1 id="houres">:</h1>
        <h1 id="houres">{minutes}</h1>
        <h1 id="houres">:</h1>
        <h1 id="houres">{seconds}</h1>
      </div>
      <input type="text" name="timer" id="timer" onChange={handleInput} />
      <button className="start" onClick={handleTimerStart}>
        <h2>start</h2>
      </button>
      <button className="reset" onClick={handleTimerReset}>
        <h2>reset</h2>
      </button>
    </div>
  )
}