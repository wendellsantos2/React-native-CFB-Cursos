/*
import Header from './componentes/header'
import Corpo from './componentes/Corpo'
import Dados from './componentes/Dados'
import Relogio from './componentes/Relogio'
import Numero from './componentes/Numero'
import Led from './componentes/Led'
import Resultado from './componentes/Resultado' 
import Nota from './componentes/Nota'
import Caixa from './Caixa';
import Globais from './componentes/Globais';
import Carro from './componentes/Carro';
import Info from './componentes/Info';
import Pagina1 from './componentes/Pagina1';
import Pagina2 from './componentes/Pagina2';
*/

import React, {useState,useEffect } from 'react'
import './App.css'
export default function App(){
 
  const tableImc=()=>{
    return(
      <table border='1' style={{borderCollapse:'collapse'}}>
        <thead>


          <tr>
            <td>
              Classificacao
            </td>
            <th>
              IMC
            </th>
          </tr>


        </thead>
        <tbody>

          <tr>
            <td> abaixo do peso</td>
            <td>abaixo de 18,5</td>
          </tr>

          <tr>
            <td> Peso Normal</td>
            <td>entre 18.5 e 24.9</td>
          </tr>


          <tr>
            <td>Sobrepeso</td>
            <td>entre 25 e 29.9</td>
          </tr>


          <tr>
            <td>Obesidade Grau 1</td>
            <td>entre 30 e 34,9</td>
          </tr>


          <tr>
            <td>Obesidade grau 2</td>
            <td>entre de 35</td>
          </tr> 


        </tbody>
      </table>
    )
  }
 
  const fpeso=(a,sp)=>{
    return(
      <div>
        <label>
          Peso
          <input type = 'text' value = {a} onChange={(e)=>{sp(e.target.value)}} />
        </label>
      </div>
    )
  }  

   
  const faltura=(p,sa)=>{

    return(
      <div>
        <label>
          Altura
          <input type = 'text' value = {p} onChange={(e)=>{sa(e.target.value)}} />
        </label>
      </div>
    )
  }

  const fcalcular=(p,a,sr)=>{
      const calc=()=>{
       sr(p/(a*a)) 
    }
   return(
    <div>
      <button onClick={calc}>Calcular</button>
    </div>
   )
  }

  const fresultado=(r)=>{
    return(
      <div>
        <p>Resultado: {r.toFixed(2)}</p>
      </div>
    )
  }
  
  const [peso,setPeso]=useState(0)
  const [altura,setAltura]=useState(0)
  const [resultado,setResultado]=useState(0)

  return(
    <>
    {fpeso(peso,setPeso)}
    {faltura(peso,setAltura)}
    {fcalcular(peso,altura,setResultado)}
    {tableImc()}
    </>
  )
}
 

     

    

    /*
    const cancelar=(obj)=>{
      return obj.preventDefault()
    }
      return(
        < >
        <Led ligado = {ligado} setLigado={setLigado}/>
        <a
        href='http://youtube.com'
        target='_blank'
        onClick={(e)=>cancelar(e)}>
          CFB cursos
        </a>
        </>





        -----



        export default function App(){

  const [log,setLog]=useState(false)

  const msglogin=()=>{
    return 'usuario logado'
  }
  const msglogoff=()=>{
    return 'favor logar'
  }

  const cumprimento=()=>{
    const hora=new Date().getHours()
    if(hora >0 && hora < 13  ){
      return <p>Bom dia </p>
    }else if(hora>=13 && hora < 18 ){
      return <p> Boa tarde </p>
    }else{
      return <p>boa noite</p>
    }
  }
      return(
        < >
     { cumprimento()}
     <p>{log?msglogin():msglogoff()}</p>
     <button onClick = {()=>setLog(!log)}>{log?'Logoff':'Login'}</button>
        </>
      )
    }


    ---


    const [cor,setCor]=useState(1)

  const vermelho={color:'#f00'}
  const verde={color:'#0f0'}
  const azul={color:'#00f'}

  const retCor=(c)=>{
  if(c==1){
    return vermelho 
  }else if(c==2){
    return verde
  }else{
    return azul
  }
}

  const mudarCor=()=>{
    setCor(cor+1)
      if(cor>2){
        setCor(1)
      }
  }

  setInterval(mudarCor,1000)
 return(
        <>
    <h1 style={retCor(cor)}>cfb cursos</h1>
     <button onClick={()=>mudarCor()}> Muda cor</button>
        </>
      )
    }

    ----- mappp 
    
  const carros= [
    {categoria : 'esporte',preco:'1000.00' ,modelo:'gof Gti'},
    {categoria : 'esporte',preco:'12000.00' ,modelo:'Camaro'},
    {categoria : 'SUV',preco:'85000.00' ,modelo:'HRV'},
    {categoria : 'SUV',preco:'83000.00' ,modelo:'T-Cross'},
    {categoria : 'Utilitario',preco:'120000.00' ,modelo:'Hillux'},
    {categoria : 'Utilitario',preco:'9000.00' ,modelo:'RANGE'},
    ]


  const listaCarros=carros.map(
    (c,i)=>
      <li key = {i}>{i} -  - {c.categoria} - {c.modelo} - R${c.preco}</li>
    
  )


  ---
    const [nome,setNome]=useState('')
  const [carro,setCarro]=useState('HRV')
 

 
 return(
        <>
        <label>Digite seu nome</label>
        <input type = 'text' name = 'fnome' onChange={(e)=>setNome(e.target.value)} value = {nome}/> 
        <p>Nome Digitado: {nome}</p>
        <label>selecione um carro </label>
        <select value={carro} onChange={(e)=>setCarro(e.target.value)}>
          <option value = 'HRV'> HRV</option>
          <option value = 'Golf'> Golf</option>
          <option value = 'Cruze'> Cruze</option>
          <option value = 'Argo'> Argo</option>
        </select>
        <p>carro selecionado: {carro}</p>
        </>
      );
    }  




    ------------  STATE 

    
const [notas,setNotas]=useState({'nota1':'0','nota2':'0','nota3':'0','nota4':'0'})
const handleSetNotas =(e)=>{

  if(e.target.getAttribute('name')==='nota1'){
    setNotas({'nota1':e.target.value,'nota2':notas.nota2,'nota3':notas.nota3,'nota4':notas.nota4})
  }else if(e.target.getAttribute('name')==='nota2'){
    setNotas({'nota1':notas.nota1,'nota2': e.target.value,'nota3':notas.nota3,'nota4':notas.nota4})
  }else if(e.target.getAttribute('name')==='nota3'){
    setNotas({'nota1':notas.nota1,'nota2':notas.nota2,'nota3':e.target.value,'nota4':notas.nota4})
  }else if (e.target.getAttribute('name')==='nota4'){
    setNotas({'nota1':notas.nota1,'nota2':notas.nota2,'nota3':notas.nota3,'nota4':e.target.value})
  }
}
 return(
        <>
        <Nota num={1} nome = {'nota1'} nota ={notas.nota1} setNota={handleSetNotas}/>
        <Nota num={2} nome = {'nota2'} nota ={notas.nota2} setNota={handleSetNotas}/>
        <Nota num={3} nome = {'nota3'} nota ={notas.nota3} setNota={handleSetNotas}/>
        <Nota num={4} nome = {'nota4'} nota ={notas.nota4} setNota={handleSetNotas}/>
        <Resultado somaNotas = {parseFloat(notas.nota1)+parseFloat(notas.nota2)+parseFloat(notas.nota3)+parseFloat(notas.nota4)}/>
  
        </>
      );
    }   


    ------------------- USEEFFECT

      
export default function App(){
  const[contagem,setContagem]=useState(0)

useEffect(
  ()=>console.log('Página carregada'),

  document.title='Contagem '+ contagem
) 
 return(
        <>
        <p>Contagem: { contagem  }</p>
        <button onClick = {()=>setContagem(contagem+1)}> contar</button>
        
        </>
      );
    }   


    ----- LOCAL STORAGE


import React, {useState } from 'react'
import './App.css'
export default function App(){
const[nome,setNome]=useState()

const armazenar=(chave,valor)=>{
  localStorage.setItem(chave,valor)
}

const consultar=(chave)=>{
  alert(localStorage.getItem(chave))

}

const apagar=(chave)=>{
  localStorage.removeItem(chave)
}
 return(
        <>
        <label>Digite um nome </label><br/>
        <input type='text' value={nome} onChange={(e)=>setNome(e.target.value)} /> <br/>
        <button onClick={()=>armazenar('ls_nome',nome)}> gravar nome</button>   
        <button onClick={()=>consultar('ls_nome')}> ver nome</button> 
        <button onClick={()=>apagar('ls_nome')}> remover nome</button> 
        </>
      );
    }   

    
================= STATE


import Carro from './componentes/Carro';
import React, {useState } from 'react'
import './App.css'
export default function App(){
 return(
        <>
        <h1>Componentes de Classe </h1> 
        <Carro canal = 'Cfb Cursos'/>
        </>
      );
    }   




    -------------------]


    
import Globais from './componentes/Globais';
import Carro from './componentes/Carro';
import Info from './componentes/Info';
import React, {useState } from 'react'
import './App.css'
export default function App(){
    const [resumo,setResumo]=useState(Globais.resumo)


    const gravarResumo=()=>{
      Globais.resumo=resumo;
    }

    const verResumo=()=>{
        alert(Globais.resumo)
    }

  return(
    <>
        <Info/>
        <hr/>
  <p>{'Canal : '+ Globais.canal} </p>
  <p>{'Curso : '+ Globais.curso} </p>
  <p>{'Ano : '+ Globais.ano} </p>
        <hr/>
        <input type = 'text' size='100' value={resumo} onChange={(e)=>setResumo(e.target.value)}/>
        <br/>
       <button onClick={()=>gravarResumo()}> gravar resumo</button>
       <button onClick={()=>verResumo()}> ver resumo</button>

    </>
  );
  }


  ----------------------------------------
  navegaçao 





  import Pagina1 from './componentes/Pagina1';
import Pagina2 from './componentes/Pagina2';
import React, {useState,useEffect } from 'react'
import './App.css'
export default function App(){
  const [pagina,setPagina]=useState(0)

  useEffect(
    ()=>{
      const url = window.location.href
      const res = url.split('?')
      setPagina(res[1])
    }
  )
  const LinksPagina=(p)=>{
      if(p==1){
        window.open('http://localhost:3000?1','_self')
      }else if (p==2){
        window.open('http://localhost:3000?2','_self')
      }
  }


  const retornarPagina=()=>{
    if(pagina==1){
      return <Pagina1/>
    }else if(pagina==2){
      return <Pagina2/>
    }else{  
        return  <div>
                <button onClick={()=>LinksPagina(1)} >Pagina1</button>
               <button onClick={()=>LinksPagina(2)} >Pagina2</button>
                </div>
      }
  }
  
   return(
    <>
        {retornarPagina()}
    </>
  );
  }


  -------------------
  filtro de pesquisar 


  import React, {useState,useEffect } from 'react'
import './App.css'
export default function App(){
const carros=[
  {categoria:'Esporte',preco:'110',modelo:'golf'},
  {categoria:'bmw',preco:'322',modelo:'bmw'},
  {categoria:'Esporte',preco:'222',modelo:'golf'},
  {categoria:'Esporte',preco:'322',modelo:'golf'},
  {categoria:'bmw',preco:'4334',modelo:'bmw'},
  {categoria:'range',preco:'5454',modelo:'range'},
  {categoria:'Esporte',preco:'5656',modelo:'golf'},
  
]


const linhas =(cat)=>{
  const li = []
  carros.forEach(
    (carro)=>{
      if(carro.categoria.toUpperCase()==cat.toUpperCase() || cat.toUpperCase()== ''){
      li.push(
        <tr>
          <td>
            {carro.categoria}
            {carro.preco}
            {carro.modelo}
          </td>
        </tr>
        
      )
    }
    }
  )
  return li
}
const TabelaCarros=(cat)=>{
  return(
    <table border='1' style =  {{borderCollapse:'collapse'}}>
      <thead>
        <tr>
          <th>Categoria</th>  <th>Preço</th>  <th>modelo</th>
        </tr>
      </thead>
      <tbody>
        {linhas(cat)}
      </tbody>
    </table>
  )
  
}

const pesquisaCategoria =(cat,scat)=>{
  return(
    <div>
      <label>digite uma categoria</label>
      <input type ='text' value = {cat} onChange={(e)=>scat(e.target.value)} />
    </div>
  )
}
const [categoria,setCategoria]=useState('')

   return(

    <>
    {pesquisaCategoria(categoria,setCategoria)}
    <br/>
       {TabelaCarros(categoria)}
    </>
  );
  }


     


        */