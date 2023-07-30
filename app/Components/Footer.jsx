import { Box, Container } from '@mui/material'
import { blue } from '@mui/material/colors'
import React from 'react'

const Footer = () => {
  return (
    <Box sx={{backgroundColor: blue[800] , color: "#fff" , mt: "50px"}}>
        <Container sx={{p: "20px" , textAlign: "center"}}>All Copyright &#169;received</Container>
    </Box>
  )
}

export default Footer