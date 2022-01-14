import React, { useState, useEffect } from 'react'
import { FormControlLabel, FormGroup, Checkbox, Paper, Typography, Collapse, Button } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { changeCategory } from '../redux/actions/productActions'
const SearchFilter = () => {
    const [pads, setPads] = useState(false)
    const [stands, setStands] = useState(false)
    const [tools, setTools] = useState(false)
    const [keyboard, setKeyboard] = useState(false)
    const [wallmount, setWallmount] = useState(false)
    const [open, setOpen] = useState(true)

    const { category } = useSelector(state => state.productList)
    const dispatch = useDispatch()
    const handleChange = () => {
        console.log('CHANGING CATEGORY')
        let ar = []
        if (pads) ar.push('pads')
        if (stands) ar.push('stands')
        if (tools) ar.push('tools')
        if (keyboard) ar.push('keyboard')
        if (wallmount) ar.push('wallmount')
        if (category) dispatch(changeCategory(ar))
    }
    useEffect(() => {
        handleChange()
    }, [pads, stands, tools, keyboard, wallmount])
    return (
        <Paper sx={{ position: 'sticky', top: '20px', py: 2, px: 2 }}>
            <Button
                variant='contained'
                fullWidth
                endIcon={open ? <i className="fas fa-chevron-up" /> : <i className="fas fa-chevron-down" />}
                onClick={() => setOpen(state => !state)}
                sx={{ justifyContent: 'space-between' }}
                disableRipple>
                CATEGORY
            </Button>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <FormGroup sx={{ pl: 2, pt: 1 }}>
                    <FormControlLabel control={<Checkbox checked={pads} onChange={(e) => { setPads(e.target.checked) }} />} label="MOUSE/DESK PADS" />
                    <FormControlLabel control={<Checkbox checked={stands} onChange={(e) => { setStands(e.target.checked) }} />} label="STANDS" />
                    <FormControlLabel control={<Checkbox checked={tools} onChange={(e) => { setTools(e.target.checked) }} />} label="TOOLS" />
                    <FormControlLabel control={<Checkbox checked={keyboard} onChange={(e) => { setKeyboard(e.target.checked) }} />} label="KEYBOARD" />
                    <FormControlLabel control={<Checkbox checked={wallmount} onChange={(e) => { setWallmount(e.target.checked) }} />} label="WALL MOUNTED" />
                </FormGroup>
            </Collapse>
        </Paper>
    )
}

export default SearchFilter
