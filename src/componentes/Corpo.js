import React from 'react'
import Dados from './Dados'
export default function Corpo() {
  const cnl=()=>{
    return 'cfb'
  }
 
  const yt='youtube.com'
  const crs ='react js '
  const somar=(v1,v2)=>{
    return v1+v2
  }
  return (
    <section>
        <h2>
            curso de react 
        </h2>
        
        <p>bem vindo </p>
        <Dados canal = {cnl} youtube={yt} curso ={crs} somar={somar}/>
        <p>bem vindo  ao curso </p>
    </section>
  )
}
