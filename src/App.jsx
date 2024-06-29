import { useEffect, useState } from 'react'
import Background from "./Components/Background/Background"
import Header from "./Components/Header/Header"
import Hero from './Components/Hero/Hero'
import './App.css'

function App() {

  let bmwData = [
    { text1 : "Dive into " , text2 : "What you love"},
    { text1 : "Indulge ", text2 : "your passion"},
    { text1 : "Dive in to ", text2 : "Your Passions"},
]

  const[bmwCount, setbmwCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(true);
  useEffect ( () => {
     setInterval( () => {
      setbmwCount((count) =>{ return count === 2 ?0 : count +1});
     
    }, 3000);
  },[])
  return (
    <>
    <Background playStatus = {playStatus} bmwCount = {bmwCount} />
    <Header />
    <Hero 
    setPlayStatus = {setPlayStatus} 
    bmwData = {bmwData [bmwCount]}
    bmwCount = {bmwCount}
    setbmwCount = {setbmwCount}
    playStatus = {playStatus}
    />
    
    </>
  )
}

export default App
