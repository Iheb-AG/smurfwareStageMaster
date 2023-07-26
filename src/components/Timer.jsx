import { useEffect, useRef, useState } from "react"


export default function Timer(){
  const [houres,setHoures] = useState("00")
  const [minutes, setMinutes] = useState("00")
  const [seconds, setSeconds] = useState("00") 

  const [reset,setReset] = useState(false)

  function handleInput(e){
    setHoures(e.target.value.substring(4,6) ? e.target.value.substring(4,6)  : "00")
    setMinutes(e.target.value.substring(2,4) ? e.target.value.substring(2,4) : "00")
    setSeconds(e.target.value.substring(0,2) ? e.target.value.substring(0,2) : "00")
  }

  function handleTimerReset(e){
    setMinutes("00")
    setSeconds("00")
    setHoures("00")
    setReset(true)
  }

  function handleTimerStart(e){
    e.preventDefault()
    let time = parseInt(seconds) + parseInt(minutes)*60 + parseInt(houres)*3600

    const timer = setInterval(() => {
    //String((parseInt(prevValue)-1)%60)
    // getting the full time in seconds

    console.log("total seconds : ",time)

    setSeconds(String(Math.floor(time%60)).length<2?"0"+String(Math.floor(time%60)) : String(Math.floor(time%60)) )
    setMinutes(String(Math.floor((time%3600)/60)).length<2?"0"+String(Math.floor((time%3600)/60)) : String(Math.floor((time%3600)/60)))
    setHoures(String(Math.floor(time/3600)).length<2?"0"+String(Math.floor(time/3600)):String(Math.floor(time/3600)))
    
    time = time-1
    
      if((time==-1)||(reset==true)){
        time = 0
        setHoures("00")
        setMinutes("00")
        setSeconds("00")
        clearInterval(timer)
      }

      setReset(false)
    }, 1000);
    
    // setReset(false)
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