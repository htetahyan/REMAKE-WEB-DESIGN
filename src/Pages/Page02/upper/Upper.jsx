import React from 'react'
import {Stack,Box,Typography,Shadows} from '@mui/material'
import './Style/Style.css'
const Upper = () => {
  return (
    <div className='UpperP2'> 
    <Stack className='UpperP2-Linear-gradient' 
    spacing={10}direction='row' sx={{justifyContent: 'center',height:'50vh',color: '#fff',alignItems:'center'}}>
     <Stack className='UpperP2-Stack' spacing={3} sx={{width:'180px'}}>
     <Typography variant='h6' sx={{fontWeight:'1000'}}>
      PRODUCT ENGINEERING
     </Typography>
     <Typography size="small" variant='p'>PRODUCT DEVELOPMENT</Typography>
     <Typography variant='p'>PRODUCT CONSULTATION</Typography>
     <Typography variant='p'>ARCHITECTURE DESIGN</Typography>
     </Stack>

     <Stack className='UpperP2-Stack'  spacing={3} sx={{width:'180px'}}>
     <Typography  variant='h6' sx={{fontWeight:'1000'}}>
      UI/UX STRATEGY
     </Typography>
     <Typography variant='p'>BRAND DEVELOPMENT</Typography>
     <Typography variant='p'>TECHNOLOGY PROTOTYPING</Typography>
     <Typography variant='p'>BRAND INTEGRATION</Typography>
     </Stack>

     <Stack className='UpperP2-Stack'  spacing={3} sx={{width:'180px'}}>
     <Typography variant='h6' sx={{fontWeight:'1000'}}>
      BIG DATA & ANALYTICS
     </Typography>
     <Typography variant='p'>ELT/DATA MANAGEMENT</Typography>
     <Typography variant='p'>ANALYTICAL DEVELOPMENT</Typography>
     <Typography variant='p'>STREAM PROCESSING</Typography>
     </Stack>

    </Stack>
    </div>
  )
}

export default Upper