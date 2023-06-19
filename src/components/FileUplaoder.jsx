import { useState, createContext, useRef } from 'react'
import AudioComponent from './AudioComponent'
// the file uploader will send it's urlPlaylist to audio component to complete making the track object
export default function FileUploader() {

  const [urlPlaylist, setUrlPlaylist] = useState([])
  const urltrackRef = useRef(null)


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

  return (
    <>
      <input type="file" ref={urltrackRef} accept='audio/*' onChange={(e) => handleUpload(e)} />
      {urlPlaylist.length > 0 ? <AudioComponent urlPlaylist={urlPlaylist} /> : <></>}
    </>
  )
} 
