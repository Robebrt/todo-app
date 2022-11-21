import './Card.css';
import React from "react";

const Card = (props) => {
    return (
        <div className='card'>
            <div className='card-header'>
                <p className='card-number'>{props.number}</p>
                <button type="button" onClick={props.onClick} className='delete-card-button'>X</button>
            </div>
            <p className='card-text'>{props.text}</p>
        </div>
    );
};
export {Card};