import { useState , createContext , useContext , useRef } from 'react'
import './App.css'
import FileUploader from './components/FileUplaoder'
import AudioComponent from './components/AudioComponent'
import Timer from './components/Timer'
import Scene from './components/Scene'


// TODO : STYLE THE APP ACCORDING TO GITHUB'S IMAGE
// TODO : REPLACE FLEX WITH GRID

function App() {
  return (
    <div id='app'>
    {/* file uploader will send the url playlist to audio Component */}
      <FileUploader >
        <AudioComponent/>
      </FileUploader>
        <Timer/>
        <Scene/>
    </div>
  )
}

export default App
