import { useRef, useState, useEffect } from 'react'
import axios from 'axios'
import { Backdrop, Box, Divider, FormControl, OutlinedInput, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import Link from '../components/Link'
import '../myStyles/search.css'

function Search({handleClose}) {
  let navigate = useNavigate()
  const [suggestions, setSuggestions] = useState([])
  const [open, setOpen] = useState(false)
  // const searchBox = useRef()

  const fetchSearch = async (term) => {
    setOpen(true)
    if (term.length < 3) {
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
    // if (open) searchBox.current.focus()
  }, [open])

  return (
    <>
    
          <Box sx={{ margin: '0 auto', px: 2,py:3, bgcolor: 'white', borderRadius: '1rem', maxWidth: '40ch',width:'100%' }} onClick={(e) => e.stopPropagation()}>
            <FormControl sx={{ width:'100%' }}>
              <OutlinedInput placeholder="Enter Product Name..." onChange={handleChange} />
              {/* <MyFormHelperText /> */}
            </FormControl>
            <Box sx={{ minHeight: '400px', pt:2 }}>
              {suggestions && suggestions.map((item) => {
                let itemName=item.name.toLowerCase().replace(/ /g, '')
                return (
                <>
                  <Box display='flex' onClick={() => handleItemClick(item._id)} sx={{p:'-15px', alignItems: 'center',cursor:'pointer' }}>
                    <Box sx={{ width: '80px', aspectRatio: '1/1' }}>
                      <img className='image-fit-contain' src={`/images/products/${itemName}/${itemName}.jfif`} />
                    </Box>
                    <Typography variant='body1' sx={{ ml: 2 }}>
                      {item.name}
                    </Typography>
                  </Box>
                  <Divider />
                </>
              )})}
            </Box>
          </Box>
    </>

  );
}

export default Search;
