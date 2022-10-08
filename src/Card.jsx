import './Card.css';
import React from "react";

export default function Card(text){
    return (
        <div className="card">
            <p>Card number </p>
            <p>{text}</p>
        </div>
    )
}