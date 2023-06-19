import { useState , createContext , useContext , useRef } from 'react'
import './App.css'
import FileUploader from './components/FileUplaoder'
import AudioComponent from './components/AudioComponent'

function App() {
  return (
    <>
    {/* file uploader will send the url playlist to audio Component */}
      <FileUploader >
        <AudioComponent/>
      </FileUploader>
    </>
  )
}

export default App
