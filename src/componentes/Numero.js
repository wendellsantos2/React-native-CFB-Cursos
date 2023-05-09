import React from 'react'

export default function Numero(props) {
  return (
   <p>
    <p>Valor do state num em numero : {props.num}</p>
    <button onClick={()=>props.setNum(props.num+10)}>soma 10 </button>
   </p>
  )
}
