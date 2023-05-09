import React from 'react'

export default class BaseClasse extends React.Component {
   // instruçoes do construtor
  constructor(props){
      super(props)
      this.state={
        canal:'CFB CURSOS',
        curso:'React',
        ativo:true,
        nome:this.props.nomeAluno

      }   
      this.status = this.props.status
      let ad = this.ativarDesativar.bind(this)
  }

  //ativarDesativar(){
   // this.setState(
   //   state=>({
   //       ativo=!state.ativo
   //   })
  //  )
 // }

  componentDidMount(){
    console.log('O component foi criado')
  }

  componentDidUpdate(){
    console.log('O componente foi atualizado')
  }

  componentWillUnmount(){
    console.log('O Componente foi removido')
  }

render(){

  return(
    <>
    <h1>Componente de Classe</h1>
    <button onClick={this.ad}> Ativar Desativar</button>
    <button onClick={()=> this.ativarDesativar()}> Ativar Desativar</button>
    </>
  )
}
}
