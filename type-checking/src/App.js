import React from "react"
import PropTypes from 'prop-types'
import PetShop from "./PetShop"

function App () {
  const handleClick = () =>{
   console.log('iniciando banho...') 
  }

  return(
    <div>
      <PetShop 
        dogs={2}
        customerName="Jucelino"
        onClick={handleClick}
        // status= "done"
        />
    </div>
  )
}
export default App