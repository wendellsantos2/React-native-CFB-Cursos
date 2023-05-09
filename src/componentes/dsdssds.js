import React from 'react'
export default class BaseClasse extends React.Component{
    constructor(props){
        super(props)
        this.state={
            canal:'CFB cursos',
            curso:'React',
            ativo:truez
            
        }
    }

    ativarDesativa(){
        this.setState(
            state=>({
                ativo =!state.ativo
            })
        )
    }

    render(){
        return(
            <>
            <h1>

            </h1>
            </>
        )
    } 
}


