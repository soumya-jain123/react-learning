import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)
  // let counter = 15
  
  const addValue = () => {
    counter = counter + 1
    setCounter(counter)
    console.log("Value added", Math.random())
  }

  const removeValue = () => {
    counter = counter - 1
    setCounter(counter)
    console.log("Value removed", Math.random())
  }
  
  return (


    <>
      <h1>Chai aur reat</h1>
      <h2>Counter value: {counter} </h2>

      <button
      onClick={addValue}
      >Add value</button>
      <br/>
      <button
      onClick={removeValue}
      >Decrease value</button>

    </>
  )
}
 
export default App
