import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../Assets/css/styles.css';

class Header extends Component {
    render(){
        return(
            <header>
                <Link to="/">Filmaria</Link>
            </header>
        );
    }
}

export default Header;