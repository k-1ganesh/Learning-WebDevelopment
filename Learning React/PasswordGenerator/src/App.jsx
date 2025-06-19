import { useState , useEffect} from 'react'
import './App.css'

function App() {
  const [password , setPassword] = useState("") 
  const [length , setLength] = useState(6) 
  const [isNumber , setIsNumber] = useState(false)
  const [isCharacter , setIsCharacter] = useState(false) 

  const getPassword = () => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz" 
    if (isNumber) {
      str += "0123456789";
    }
    if (isCharacter) {
      str += "!@#$%^&*()_"
    }
    let pass = ""
    for (let i = 1 ; i <= length ; i++) {
      let index = Math.floor(Math.random()*str.length) 
      pass += str[index]
    }
    setPassword(pass)
  }

  useEffect(getPassword , [length , isNumber , isCharacter])

  return (
    <>
      <div className="outer">
        <div className="inner">
          <h1>Password Generator</h1> 
          <input id='pass' type="text" value={password} placeholder='Password' readOnly /> 
          <button onClick={()=>{
            window.navigator.clipboard.writeText(password)
          }}>Copy</button>

          <input id='range' type="range" min={6} max={100} value={length} onChange={(e)=>{setLength(e.target.value)}}/> 
          <label >Length: {length}</label>
          <br></br>
          <div className="innermost">
              <input type="checkbox" onClick={()=>{setIsNumber(prv => !prv)}}/> 
          <label htmlFor="">Number</label> 
          <input type="checkbox" onClick={()=>{setIsCharacter(prv => !prv)}}/>
          <label htmlFor="">Character</label>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default App
