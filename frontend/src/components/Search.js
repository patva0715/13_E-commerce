import { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import { Box, Divider, FormControl, OutlinedInput, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import '../myStyles/search.css'

function Search({ handleClose,open }) {
  let navigate = useNavigate()
  const [suggestions, setSuggestions] = useState([])
  const searchBox = useRef(null)

  const fetchSearch = async (term) => {
    if (term.length < 2) {
      setSuggestions([])
      return
    }
    const { data } = await axios.get(`/api/products/search?term=${term}`)
    console.log(data)
    setSuggestions(data)
  }

  const handleChange = (e) => {
    fetchSearch(e.target.value)
  }

  const handleItemClick = (id) => {
    handleClose()
    navigate(`/products/${id}`)
  }
  useEffect(() => {
    if(open)searchBox.current.focus()
    else searchBox.current.blur()
  }, [open])

  return (
    <>

      <Box sx={{ margin: '0 auto', px: 2, py: 3, bgcolor: 'white', borderRadius: '1rem', maxWidth: '40ch', width: '100%' }} onClick={(e) => {e.stopPropagation()
      searchBox.current.focus()}}>
        <FormControl sx={{ width: '100%' }}>
          <OutlinedInput placeholder="Enter Product Name..." onChange={handleChange} inputRef={searchBox} />
          {/* <MyFormHelperText /> */}
        </FormControl>
        <Box sx={{ minHeight: '400px', pt: 2 }}>
          {suggestions && suggestions.map((item) => {
            let itemName = item.name.toLowerCase().replace(/ /g, '')
            return (
              <>
                <Box display='flex' className='suggestion-card' onClick={() => handleItemClick(item._id)} sx={{ p: '-15px', alignItems: 'center', cursor: 'pointer', bgcolor:'#fafafa' }}>
                  <Box sx={{ width: '80px', aspectRatio: '1/1' }}>
                    <img className='image-fit-contain image-blend' src={`/images/products/${itemName}/${itemName}med.jfif`} alt='search-item' />
                  </Box>
                  <Typography variant='body1' sx={{ ml: 2 }}>
                    {item.name}
                  </Typography>
                </Box>
                <Divider />
              </>
            )
          })}
        </Box>
      </Box>
    </>

  );
}

export default Search;
