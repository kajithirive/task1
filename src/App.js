import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Child from './Message.js';

export default function App() {
  const [index, setIndex] = useState("");
  const [count, setcount] = useState(0);
  async function kaji() {
    const res = await  fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    console.log(data);
    setIndex(data.slip.advice);
    setcount(()=>count+1);
    
  }
  useEffect (function(){kaji()},[])

  return (
    <><h1>{index}</h1>
    <button onClick={kaji}>Kaji</button>
    <Child cont = {count}></Child></>
  );
}


