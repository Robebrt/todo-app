
import { useState } from 'react';
import { useEffect } from 'react';
import './App.css'
import {Card} from './Card'


function App() {
  const [cards,setCards] = useState([]);
  const onAddBtnClick = event => {
    const text = document.getElementById("toDoInput").value;
    setCards([...cards,text]);
  }
  return (
    <>
    <div className='form'>
      <h1>TO DO</h1>
      <input id="toDoInput"></input>
      <button onClick={onAddBtnClick}>GO</button>
    </div>
    <div className='cards-holder'>
      {cards.map((item,i) => (<Card text={item}/>))}
    </div>
    </>
  )
}

export default App
