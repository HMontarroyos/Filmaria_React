import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../Assets/css/styles.css';

class Home extends Component {

    constructor(props){
        super(props);
        this.state ={
            filmes:[]
            
        };
    }
    componentDidMount(){
        let url = 'https://sujeitoprogramador.com/r-api/?api=filmes/';
        fetch(url)
        .then((res)=>res.json())
        .then((json)=>{
            let state = this.state;
            state.filmes = json;
            this.setState(state);
            console.log(json);
        })
    }
    render(){
        return(
            <div className="container">
                <div className="lista-filmes">
                    {this.state.filmes.map((filme)=>{
                        return(
                            <article key={filme.id} className="filme"> 
                                <strong>{filme.nome}</strong>
                                <img src={filme.foto} alt="capa_de_filme"/>
                                <Link to={`/filme/${filme.id}`}>Acessar</Link>
                            </article>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default Home;

