import { useEffect, useState , useRef } from "react";

export default function AudioComponent(props){
  //creating player refrence
  const AudioRef = useRef(null)
  const urlPlaylist = props.urlPlaylist
  const [trackstate,setTrackState] = useState("play")
  const [currentTrackUrl,setCurrectTrackUrl] = useState(props.urlPlaylist[0] ? props.urlPlaylist[0] : null)

  console.log("current Track url : ",currentTrackUrl)
  function togglePlay(e){
    if(trackstate=="play"){
      setTrackState("pause")
      AudioRef.current.play()
    }else{
      setTrackState("play")
      AudioRef.current.pause()
    }
  }

  //getting the next/previous track from url list depending on the step provided (previous track : step = -1 , next track : step = +1)
  function handleNext(){
    setCurrectTrackUrl(urlPlaylist[(urlPlaylist.indexOf(currentTrackUrl)+1)%urlPlaylist.length])     
  }

  function handlePrevious(){
    setCurrectTrackUrl(urlPlaylist[Math.abs((urlPlaylist.indexOf(currentTrackUrl)-1))%urlPlaylist.length])
  }

  return (
    <div>
        <audio src={currentTrackUrl} controls ref={AudioRef} /> 
        <input type="button" value={trackstate} onClick={togglePlay} /> 
        <input type="button" value="next" onClick={handleNext} />
        <input type="button" value="previous" onClick={handlePrevious} />
    </div>
  )
}