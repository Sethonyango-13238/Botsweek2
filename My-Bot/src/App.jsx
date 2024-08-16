import React,{useState, useEffect} from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";
import './App.css';


function App() {
  const[bots, setBots]=useState([]);
  const [army, setArmy]=useState([]);
  useEffect(()=>{
    fetch('http://localhost:3000/bots')
    .then((response)=>response.json())
    .then((data)=> setBots(data));
  },[]);
  const addToArmy=(bot)=>{
    if(!army.find((b)=>b.id===bot.id)){
      setArmy([...army,bot]);
    }
  };
  const removeFromArmy =(bot)=>{
    setArmy(army.filter((b)=>b.id !== bot.id));
  };
const dischargeBot=(bot)=>{
  fetch(`http://localhost:3000/bots`,{
    method:'DELETE',
  })
  .then(()=>{
    setArmy(army.filter((b)=> b.id !==bot.id));
    setBots(bots.filter((b)=> b.id !== bot.id));
  });
};

  return (
 <>
 <h1>Bot Battlr</h1>
 <BotCollection bots={bots}/>
 <YourBotArmy army={army} removeFromArmy={removeFromArmy} dischargeBot={dischargeBot}/>
 </>
  );
}

export default App;