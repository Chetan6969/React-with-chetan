import { useState } from 'react'// import hooks from react
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

let [counter,chetanCounter/* counter = 0th index value , It is a funtion setcounter */ ] = useState(0)

const addvalue = () =>{
  if(counter===20){
    chetanCounter(counter)
  }
  else{
    chetanCounter(counter+1)
  }
}

const removeValue = () => {
  if(counter === 0){
    chetanCounter(counter)
  }
  else{
  chetanCounter(counter - 1)
  }
}
  return (
    <>
    <h1>Tea and react</h1>
    <h2>Counter value : {counter}</h2>

    <button
    onClick={addvalue}>Add value {counter}</button>
    <br /><br />
    <button
    onClick={removeValue}>Remove Value {counter}</button>
    <p>Footer : {counter}</p>
    </>
  )
}

export default App
