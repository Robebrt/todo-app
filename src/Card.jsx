import './Card.css';
import React from "react";

const Card = (props) => {
    return (
        <div>
            <p>{props.text}</p>
        </div>
    );
};
export {Card};