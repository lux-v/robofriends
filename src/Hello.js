import React, {Component} from 'react';
import './Hello.css';


class Hello extends Component{
    render(){
        return(
            <div className='header'>

                <h1 className='h1'>Hello World</h1>


                <h2>Hello2</h2>
                <p>Welcome to react</p>
            </div>
        );
    }
}

export default Hello;