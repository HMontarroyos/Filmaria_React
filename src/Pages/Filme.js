import React,{Component} from 'react';
import '../Assets/css/styles.css';

class Filme extends Component {
    constructor(props){
        super(props);
        this.state ={
            filme: []
            
        };
    }

    componentDidMount(){
    const{id} = this.props.match.params;
    let url = `https://sujeitoprogramador.com/r-api/?api=filmes/${id}`;
    fetch(url)
    .then((res)=>res.json())
    .then((json)=>{
        this.setState({filme: json});
        console.log(json);
    })
    }

    render(){
        return(
            <div className="filme-info">
                <h1>{this.state.filme.nome}</h1>
                {this.state.filme != 0 && 
                    <img src={this.state.filme.foto} alt="capa_de_filme"/> 
                }
                {this.state.filme.length != 0 &&
                    <h3>Sinopse</h3>
                }
                {this.state.filme.sinopse}
            </div>
        );
    }
}

export default Filme;