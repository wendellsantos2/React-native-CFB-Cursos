import React from 'react'
 
import LedVerde from './imgs/led-verde.png'
import LedVermelho from './imgs/led-vermelho.png'
 
 
export default function Led(props){
 
      return(
        < >
        <img  style= {{width:'50px'}} src={props.ligado?LedVerde:LedVermelho}/>
        <button onClick={()=>props.setLigado(!props.ligado)}>
        {props.ligado ?' Desligar': 'Ligar'}
        </button>
        </>
      )
    }
 