import { useState } from 'react'
import Input from './component/Input'
// import SelectColor from './component/SelectColor'
import './component/style.css'


function App() {
  const[charcount, setCharcount] = useState("")

  const charcountHandler = (e) =>{

      setCharcount(e.target.value)
  }

  return (
    <div className='bord'>
         <Input  charCounter = {charcountHandler} text = {charcount.length}/>
    </div>
  )
}

export default App
