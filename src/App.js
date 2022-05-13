import React from "react";
import { ThemeContext, themes } from './Theme'
import Card from './Card'

function App () {
  return(
    <div style={{color:"lightblue", fontSize:"40px"}}>
      Precione aqui !
      <ThemeContext.Provider value={themes.primary}>
      <Card />
      </ThemeContext.Provider>
    </div>
      
  )
}

export default App