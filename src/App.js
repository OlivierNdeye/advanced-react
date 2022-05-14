import React, { Fragment } from "react";

const store =['', '', '']

function Column(){
  return(
 <>
 <tr>
  <td>
    "Chapéu
  </td>
  <td>
    Sapatos
  </td>
  <td>
    ou...roupa usada 
  </td>
  <td>
    quem tem(Seu madruga)"
  </td> 
 </tr>
 </>    
  )
}


function App() {

  const renderColumn = (element, key) => (
    <Fragment key={`column-${key}`}>
      <Column />
    </Fragment>
  )

  return (
      <table>
          { store.map(renderColumn) }
      </table>
  )
}

export default App