import React from 'react'
import PropTypes from 'prop-types'

function PetShop(props){

  const { dogs, cats, customers, customerName, onClick } = props

  return (
    <div>
      <h1>Dog: {dogs}</h1>
      <h2>Cats: {cats}</h2>
      <div>
        Quantidade de Clientes: {customers}
      </div>
      <div>
        Nome do cliente: {customerName}
      </div>
      <button onClick={onClick}> Iniciar banho </button>
    </div>
  )
}

PetShop.defaultProps = {
  dogs:1,
  cats:0,
  customers: []
}

  PetShop.propTypes = {
    dogs: PropTypes.number.isRequired,
    cats: PropTypes.number,
    customers: PropTypes.array,
    customerName: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
    // status: PropTypes.oneOf(["Completed", "Disabled"])
  }
export default PetShop