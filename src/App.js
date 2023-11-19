import { useState } from 'react';
import { useEffect } from 'react';
function App() {

let [length , setLength] = useState(8)
let [charAllowed , setCharAllowed] = useState(false)
let [numberAllowed , setNumberAllowed] = useState(false)
let [password ,setPassword] = useState("")

useEffect(()=>{
  let pass = ""
  let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

  if(numberAllowed) str += "0123456789";
  if(charAllowed) str += "@#$&_";

  for (let i = 0; i <=length; i++) {
    let char = Math.floor(Math.random()* str.length +1)
    pass += str.charAt(char)
  }
  setPassword(pass)
},[length,charAllowed,numberAllowed])

  return (
   <>
   <h1 className='text-center text-7xl'>Password Generator</h1>
   <div className='w-full  max-w-md mx-auto rounded my-8 p-4 py-9 bg-slate-300 text-xl' >
    <div className="passView text-center my-3">
      <input type="text"
      className=' px-2 py-1 rounded-l w-9/12'
      readOnly 
      value={password}/>
      <button 
      className='bg-slate-500 rounded-r text-white px-2 py-1'
      onClick={(e)=>{
        window.navigator.clipboard.writeText(password)
        
      }}
      >Copy</button>
    </div>
    
    <div className="numView text-center my-4">
      <input type="range" 
      min={8} max={26} 
      step={2}
      value={length}
      onChange={(e)=>{setLength(e.target.value)}} 
      />

      <label htmlFor="" className='px-1'>Value : {length}</label>
      <input type="checkbox"
      id='number'
      className='cursor-pointer'
      onChange={(e)=>{setNumberAllowed(!numberAllowed)}}/>
      <label htmlFor="number">Number</label>
      <input type="checkbox"
      id='char' 
      className='cursor-pointer'
      onChange={(e)=>{setCharAllowed(!charAllowed)}}/>
      <label htmlFor="char" className='px-1'>Character</label>
    </div>
   
   </div>
   </>
  );
}

export default App;
