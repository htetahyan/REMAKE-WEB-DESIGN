import React from 'react'
import {Box,FormControlLabel,Checkbox,Typography} from '@mui/material'
import { useState } from 'react'
const CheckBoxs = () => {
    const [checked,setChecked]= useState(false)
  return (
    
        <Box>
        <FormControlLabel label="I accept the terms and conditions of the form" control={<Checkbox checked={checked} 
        onChange={e => setChecked(e.target.checked)}/>}/>
          {checked ? (
            <Typography variant='h1'>
             You Agreee!
            </Typography>
         ) : null }

        </Box>
      
  )
}

export default CheckBoxs