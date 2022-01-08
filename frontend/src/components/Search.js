import { useRef, useState, useEffect } from 'react'
import axios from 'axios'
import { Backdrop, Box, Divider, FormControl, OutlinedInput, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import Link from '../components/Link'
import '../myStyles/search.css'

function Search() {
  let navigate = useNavigate()
  const [suggestions, setSuggestions] = useState([])
  const [open, setOpen] = useState(false)
  const searchBox = useRef()

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

  const handleOpen = (e) => {
    e.target.blur()
    setOpen(true)
    // navigate(`// console.log(name)
    // searchBox.current.value = String(name)/products/${id}`)
  }

  const handleClose = () => {
    setOpen(false)
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
      <div >
        <input className='search-input' placeholder='search' onClick={handleOpen} ></input>
        <Backdrop
          sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
          onClick={handleClose}
        >
          <Box sx={{ margin: '0 auto', p: 4, bgcolor: 'white', borderRadius: '1rem', maxWidth: '40ch',width:'100%' }} onClick={(e) => e.stopPropagation()}>
            <FormControl sx={{ width:'100%' }}>
              <OutlinedInput placeholder="Please enter text" onChange={handleChange} />
              {/* <MyFormHelperText /> */}
            </FormControl>
            <Box sx={{ minHeight: '500px', pt:2 }}>
              {suggestions && suggestions.map((item) => {
                let itemName=item.name.toLowerCase().replace(/ /g, '')
                return (
                <>
                  <Box display='flex' onClick={() => handleItemClick(item._id)} sx={{p:'-15px', alignItems: 'center' }}>
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
        </Backdrop>
      </div>
    </>

  );
}

export default Search;
