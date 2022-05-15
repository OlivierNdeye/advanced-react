import React, { useRef, useEffect, useState } from "react"

function App() {
  
  const inputRef = useRef()
 const count = useRef(1)
  const [ , setValue ] = useState(false)

   const handleClick = () => {
     inputRef.current.focus()
    console.log('input.current.focus', inputRef.current)
   }

  useEffect(()=> {
    setTimeout(() =>{
      console.log('Esse ai passou')
      count.current = 2
      setValue(true)
    }, 3000)
  })

  return(
    <>
    <h1>Valor do contador: {count.current} </h1>
      Foco: <input ref={inputRef} />
      <br />
      <br />
      <br />
      <button onClick={handleClick}> Focar </button>
    </>
  )
 }
export default App