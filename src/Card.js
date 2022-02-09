import React from "react";
import './Card.css';

const Card = ({name, email, id}) =>{
    return(
        <div className="CardStyle">  
            <img alt='robots' src ={'https://robohash.org/'+ id +'?200x200'}/>
            <div className="robotDesc">
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;