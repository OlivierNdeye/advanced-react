import React from  'react'
import PropType from 'prop-types'

function Calc(props){
  const { min, max, onChange } = props

  return(
    <div>
      <p>
      Valor Minimo: {min}      
      </p>
      <br />
      <p>
      Valor Maximo: {max}
      </p>
      <input type="text" onChange={onChange} />
    </div>
  )  
}

Calc.propTypes = {
  min: PropType.number.isRequired,
  max: PropType.number.isRequired,
  onChange: PropType.func.isRequired
}

export default Calc