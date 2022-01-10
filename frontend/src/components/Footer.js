import { Container } from '@mui/material'
import React from 'react'

const Footer = () => {
    return (
        <Container component='footer' maxWidth='lg' sx={{py:3,textAlign:'center',lineHeight:'20px'}}>
            Built by Patrick Valera.<br/>
            MongoDB hackathon - E-commerce submission. <br/>
            UI design inspired by <a href='https://grovemade.com/'>Grovemade's</a> official site.<br/>
            All data and image rights belong to Grovemade.<br/>
            
        </Container>
    )
}

export default Footer
