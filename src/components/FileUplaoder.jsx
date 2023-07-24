import { useState, createContext, useRef, useEffect } from 'react'
import AudioComponent from './AudioComponent'
import { BiPlus } from 'react-icons/bi'
// the file uploader will send it's urlPlaylist to audio component to complete making the track object
export default function FileUploader() {

  const [urlPlaylist, setUrlPlaylist] = useState([])
  const urltrackRef = useRef(null)


  function handlehiddenInput(e){
    urltrackRef.current.click()
  }

  function handleUpload(e) {
    //no errors are handled 
    const track = {
      url: URL.createObjectURL(e.target.files[0]),
      name: e.target.files[0].name.slice(0, e.target.files[0].name.lastIndexOf("."))
    }
    setUrlPlaylist(prevUrls => {
      console.log([...prevUrls, track])
      return [...prevUrls, track.url]
    })
  }

  useEffect(()=>{
    document.getElementById("upload_button").addEventListener("click",()=>{
      document.getElementById("instructions").style.display="none"
    })
  },[])


  return (
    <div>
      <h3 id='instructions'>click the "+" icon to upload songs</h3>
      <input style={{display:"none"}} type="file" ref={urltrackRef} accept='audio/*' onChange={(e) => handleUpload(e)} />
      <button id='upload_button' onClick={handlehiddenInput}>
        <BiPlus />
      </button>
      {urlPlaylist.length > 0 ? <AudioComponent urlPlaylist={urlPlaylist} /> : <></>}
    </div>
  )
} 
