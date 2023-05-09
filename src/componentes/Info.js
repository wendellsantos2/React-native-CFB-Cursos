import Globais from './Globais';
import React  from 'react'
 


export default function Info(){
  return(
    <>
<p>{'Canal : '+ Globais.canal} </p>
<p>{'Curso : '+ Globais.curso} </p>
<p>{'Ano : '+ Globais.ano} </p>

    </>
  );
  }
