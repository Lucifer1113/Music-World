import React from "react";
import './Card.css'

const Card = (props) => {
  return (
    <div className='card'>
      <div className='icon-box'>
        <ion-icon  name={props.icon}></ion-icon>
      </div>
      <h2 className='title'>{props.title}</h2>
      <p className='text'>{props.text}</p>
    </div>
  );
};

export default Card;
