
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
  function deleteCard(index){
    if(window.confirm(`Are you sure you want to delete the card with index ${index+1}?`)){
      const copy = cards.filter((_, i) => i !== index);
      setCards(copy);
    }
    
  }
  useEffect(()=>{
    console.log(cards)
  },[cards]);
  return (
    <>
    <div className='form'>
      <h1>TO DO</h1>
      <input id="toDoInput"></input>
      <button type="button" onClick={onAddBtnClick}>GO</button>
    </div>
    <div className='cards-holder'>
      {cards.map((item,i) => 
      (<Card key={i}  
        onClick={(e) =>{
        deleteCard(i);
      }} 
        number={i+1} 
        text={item} 
        />))
        }
    </div>
    </>
  )
}

export default App
