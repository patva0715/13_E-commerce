import { useRef, useState, useEffect } from 'react'
import axios from 'axios'
import { Box } from '@mui/material'
import '../myStyles/search.css'

function Search() {
  const [suggestions,setSuggestions]=useState([])

  const fetchSearch = async(e) => {
    if(e.target.value.length<3){
      setSuggestions([])
      return
    }
    const {data}= await axios.get(`/api/products/search?term=${e.target.value}`)
    console.log(data)
    setSuggestions(data)
  }

  return (
    <>
    <div className='search-box'>
      <input className='search-input' placeholder='search' onChange={fetchSearch} ></input>
      <ul className='suggestions-container'>
        {suggestions.map((item,index)=>(
          <li className='list-container' key={index}>{item.name}</li>
        ))}
      </ul>
      </div>
    </>
    
  );
}

export default Search;
