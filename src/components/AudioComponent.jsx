import { useEffect, useState , useRef } from "react";
import {BiPause, BiPlay, BiSkipNext, BiSkipPrevious} from 'react-icons/bi'

export default function AudioComponent(props){
  //creating player refrence
  const AudioRef = useRef(null)
  const urlPlaylist = props.urlPlaylist
  const [trackstate,setTrackState] = useState("play")
  const [currentTrackUrl,setCurrectTrackUrl] = useState(props.urlPlaylist[0] ? props.urlPlaylist[0] : null)
  const [duration,setDuration] = useState(0)
  const [currentTime,setcurrentTime] = useState(0)

  // console.log("current Track url : ",currentTrackUrl)
  function togglePlay(e){
    if(trackstate=="play"){
      setTrackState("pause")
      AudioRef.current.play()
    }else{
      setTrackState("play")
      AudioRef.current.pause()
      console.log(AudioRef)
    }
  }

  
  //getting the next/previous track from url list depending on the step provided (previous track : step = -1 , next track : step = +1)
  function handleNext(){
    AudioRef.current.pause()
    setCurrectTrackUrl(urlPlaylist[(urlPlaylist.indexOf(currentTrackUrl)+1)%urlPlaylist.length])   
    setTrackState("play")  
  }

  function handlePrevious(){
    AudioRef.current.pause()
    setCurrectTrackUrl(urlPlaylist[Math.abs((urlPlaylist.indexOf(currentTrackUrl)-1))%urlPlaylist.length])
    setTrackState("play")
  }

  // useEffect(()=>{
  //   setDuration(AudioRef.current.duration)

  // },[AudioRef.current.currentTime])

  return (
    <div>
        <audio src={currentTrackUrl} ref={AudioRef} onTimeUpdate={(e)=>{setcurrentTime(e.currentTarget.currentTime)}} onDurationChange={(e)=>{setDuration(e.currentTarget.duration)}}/> 
        
        {/* <input type="button" value="previous" onClick={handlePrevious} /> */}
        <button onClick={handlePrevious}>
          <BiSkipPrevious/>
        </button>
        
        {/* <input type="button" value={trackstate} onClick={togglePlay} /> */}
        <button onClick={togglePlay}>
          {trackstate=="play"? <BiPlay/> : currentTime==duration ? <BiPlay/> : <BiPause/>}
        </button>
        
        {/* <input type="button" value="next" onClick={handleNext} /> */}
        <button onClick={handleNext}>
          <BiSkipNext/>
        </button>
        
        <h1>duration : {duration}</h1>
        <h1>current position : {Math.floor(currentTime)} seconds</h1>

    </div>
  )
}