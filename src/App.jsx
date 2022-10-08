
import { useState } from 'react';
import { useEffect } from 'react';
import './App.css'
import Card from './card'


function App() {
  const [cards,setCards] = useState([]);
  const onAddBtnClick = event => {
    const text = document.getElementById("toDoInput").value;
    console.log(text);
    console.log(cards);
    console.log(typeof cards);
    //setCards(cards.concat(<Card key={cards.length} text={text}/>));
  }
  return (
    <>
    <div className='form'>
      <h1>TO DO</h1>
      <input id="toDoInput"></input>
      <button onClick={onAddBtnClick}>GO</button>
    </div>
    <div className='cards-holder'>
      {cards}
    </div>
    </>
  )
}

export default App
