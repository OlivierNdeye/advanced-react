import React, { useState, useEffect } from "react";
import { ThemeContext, themes } from './Theme'
import Card from './Card'

function App () {
  const [token, setToken] = useState()

  useEffect(() => {
    setTimeout(() => {
      setToken('34q44km56ou788k4k4')
    }, 4000)
  }, [setToken])
  return(
    <div style={{color:"lightblue", fontSize:"40px"}}>
        Formulário de Funcionário
      <ThemeContext.Provider value={{ ...themes.primary, token }}>
      <Card />
      </ThemeContext.Provider>
    </div>
      
  )
}

export default App