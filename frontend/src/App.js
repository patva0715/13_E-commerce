import './App.css';
import { useRef, useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [suggestions,setSuggestions]=useState([])

  const fetchSearch = async(e) => {
    if(e.target.value.length<3)return
    const {data}= await axios.get(`/search?term=${e.target.value}`)
    console.log(data)
    setSuggestions(data)
  }

  return (
    <>
      <h1>MOVIE</h1>
      <input onChange={fetchSearch} ></input>
      <ul>
        {suggestions.map((item)=>(
          <li>{item.title}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
