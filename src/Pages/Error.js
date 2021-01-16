import React,{Component} from 'react';
import Img from '../Assets/img/svgs/error.svg';
import '../Assets/css/styles.css';

class Error extends Component {
    render(){
        return(
            <div className="container">
                <h1>Pagina Não Encontrada</h1>
                <img src={Img} alt="404_not-found"/>

            </div>
        );
    }
}

export default Error;