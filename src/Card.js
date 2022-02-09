import React from "react";
import './Card.css';



const Card = (props) =>{
    return(
        <div className="CardStyle">  
            <img alt='robots' src ={'https://robohash.org/'+ props.name +'?200x200'}/>
            <div className="robotDesc">
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>
        </div>
    );
}

export default Card;