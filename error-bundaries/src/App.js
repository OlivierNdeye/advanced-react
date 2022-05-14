import { type } from "@testing-library/user-event/dist/type";
import React, { Fragment } from "react";

const store =[{
  type: 'Roupas'
}, {
  type: 'Calçados'
},{
  type:'Camisetas'
}]

function Column({ type }){
  return(
 <>
 <tr>
  <td>
    { type }
  </td>    
 </tr>
 </>    
  )
}


function App() {

  const renderColumn = (element, key) => (
    <Fragment key={`column-${key}`}>
      <Column type={element.type} />
    </Fragment>
  )

  return (
      <table>
          { store.map(renderColumn) }
      </table>
  )
}

export default App