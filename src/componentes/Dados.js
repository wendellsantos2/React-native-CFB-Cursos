import React from 'react'

export default function Dados(props) {

    const n1=10
    const n2 = 32
  return (
   <section>
    <p>CANAL: {props.canal()}</p>
    <p>YOUTUBE:{props.youtube} </p>
    <p>CURSO: {props.curso}</p>
    <p>{'A soma de ' + n1 + ' com' +n2 + 'é igual ' + props.somar(n1,n2)}</p>
   </section>
  )
}
