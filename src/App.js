
import React, { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const imgs1 = [
    {id : 0 , "Source" : './imgs/rock.png'},
    {id : 1 , "Source" : './imgs/paper.png'},
    {id : 2 , "Source" : './imgs/scissors.png'}
]

  const imgs2 = [
    {id : 0 , "Source" : './imgs/rock.png'},
    {id : 1 , "Source" : './imgs/paper.png'},
    {id : 2 , "Source" : './imgs/scissors.png'}
  ]

const [choosing , setChoosing] = useState()
const [randomId , setrandomId] = useState(0)
const [clicking , setClicking] = useState(true)
const [result , setResult] = useState('')
//const [playerScore , setPlayerscore] = useState(0)
//const [botScore , setBotscore] = useState(0)

  const botchoose = useRef()

  function click (id) {
    if(clicking ===true) {
      setChoosing(imgs1[id].id)
      setrandomId(Math.floor(Math.random() * 3))
      setClicking(false)
      console.log(randomId);
    }

  }

  useEffect (() => {
    if(choosing !== undefined) {
      if(choosing === 0 && randomId === 2 || choosing === 1 && randomId === 0 || choosing === 2 && randomId === 1) {
        setResult('You Win!!')
      }else if(choosing === 0 && randomId === 1 || choosing === 1 && randomId === 2 || choosing ===2 && randomId === 0) {
        setResult('You Loose!!')
      }else (
        setResult('You Tied')
      )
      //if(result === 'You Win!!') {
      //  setPlayerscore( playerScore + 1)
      //}else if (result === 'You Loose!!') {
      //  setBotscore(botScore + 1)
      //}
    }
  },[click])

  function again() {
    window.location.reload()
  }
  
  return (
    <div className="App">
      <div id='link'>
        <a href='https://github.com/youssefamerzag'><img width="50" height="50" src="https://img.icons8.com/glyph-neue/64/github.png"   alt="github"/></a>
        <a href='https://linkedin.com/in/youssefamerzag'><img width="50" height="50" src="https://img.icons8.com/ios-filled/50/linkedin.png" alt="linkedin"/></a>
      </div>

      <p id='title'>Rock Paper Scissors </p>
      {/* <p>Player :  {playerScore} |  Computer : {botScore} </p> */}
      <div id='imgs'>
      {imgs1.map((img) => 
        <img onClick={() => click(img.id)} src={img.Source} key={img.id}></img>
      )}
      </div>
      <p id='result'>{result}</p>
      <div id='botchoosing'>
        {result ?  <img className='botchoose' ref={botchoose} src={imgs2[randomId].Source}></img>: ''}
      </div>
      

      {result ? <button onClick={again}>Try Again</button> : ''}
    </div>
  );
}

export default App;
