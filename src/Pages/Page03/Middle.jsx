import React from 'react'
import './Styles/style.css'
import {Stack,Typography,Button,Box} from '@mui/material'
import HiveOutlinedIcon from '@mui/icons-material/HiveOutlined';
import { FaMaxcdn } from "react-icons/fa";
import ChangeHistoryIcon from '@mui/icons-material/ChangeHistory';

const Middle = () => {
  return (
    <Stack sx={{height:'100vh'}}> 
   <Stack direction='row' sx={{justifyContent: 'space-between',height: '78vh',alignItems: 'center'}}>
    <Stack className='Middle-Head-Text' sx={{marginLeft:'10rem',marginTop:'1rem'}}> 
     <Typography  variant='h1' sx={{fontWeight:'bold',fontSize:'16rem',fontFamily:'monospace'}}>
        25 
     </Typography>
     <Typography  variant='h1' sx={{fontWeight:'800',fontSize:'14rem',marginTop:'-8rem',marginLeft:'15px'}}>
        YRS
     </Typography>
     </Stack>
     <Stack spacing='1.6rem' sx={{width:'29.46vw',marginRight:'13rem'}}>
        <Typography variant='h3' sx={{fontWeight:'900',fontSize:'2rem'}}>
            WE BRING YOUR IDEAS TO LIFE
        </Typography>
        <Typography className='Middle-p-head P' variant='p'>
           we love creating
        </Typography>
        <Typography className='Middle-p-mid P' variant='p' sx={{color:'grey'}}>
          Since 2007 we have been a visionary and a reliable software engineering partner for world-class brands. We are a boutique digital transformation consultancy and software development company that provides cutting edge engineering solutions. We are a boutique digital transformation.

        </Typography>
        <Button   variant='standard' disableRipple className='Middle-Btn'
             sx={{border: 'none',outline:'4px solid orange',width: '125px'
             ,height:'45px',fontSize:'0.6rem',fontWeight:'300',marginLeft:'-5px',marginTop:'9rem'}} >
  Read More
              </Button>
     </Stack>
   </Stack>
<Stack direction='row' sx={{height:'22vh'}}>

<Stack className='Middle-Bottom-Logos' sx={{alignItems:'center',justifyContent:'center',border:'1px solid grey',color:'grey'}}> 
   <Typography sx={{fontFamily:'monospace',color:'gray',letterSpacing:'-2px'}} variant='h5'>
      DETERS
   </Typography>
   <Typography  sx={{fontFamily: ' monospace',letterSpacing:'-1px',color:'gray',fontSize:'0.6rem'}} variant='h9'>
      consulting group
   </Typography>
</Stack>
<Stack direction='row' className='Middle-Bottom-Logos' sx={{alignItems:'center',justifyContent:'center',border:'1px solid grey',color:'grey'}}> 
  <HiveOutlinedIcon sx={{color:'gray',fontSize:'3rem'}}/>
   <Typography  sx={{fontFamily: 'monospace',textTransform:'uppercase',color:'gray',width:'80px',lineHeight:'16px',letterSpacing:'-1px',fontWeight:'400',fontSize:'1rem'}} variant='h6'>
     Honey Hosting
   </Typography>
</Stack>
<Stack  spacing={2} direction='row' className='Middle-Bottom-Logos' sx={{alignItems:'center',justifyContent:'center',border:'1px solid grey',color:'grey'}}> 
<FaMaxcdn color='gray'/>
<Stack sx={{paddingTop:'0.6rem'}}> 
<Typography variant="h7"
 sx={{fontFamily:"'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif",fontSize:'1rem',color:'gray'}}>
Max Paper
</Typography>
<Typography variant='p3' sx={{color:'gray'}}>
   DIGITAL MARKET
</Typography>
</Stack>
</Stack>
<Stack direction='row' spacing={0.5} className='Middle-Bottom-Logos' sx={{alignItems:'center',justifyContent:'center',border:'1px solid grey',color:'grey'}}> 
   <ChangeHistoryIcon sx={{color:'gray' ,fontSize:'3rem'}} />
   <Typography  sx={{fontFamily: 'cursive',letterSpacing:'0px'}} variant='h8' color='gray'>
      laborator
   </Typography>
</Stack>
<Stack direction='row' className='Middle-Bottom-Logos' sx={{alignItems:'center',justifyContent:'center',border:'1px solid grey',color:'grey'}}> 
  <HiveOutlinedIcon sx={{color:'gray',fontSize:'3rem'}}/>
   <Typography  sx={{fontFamily: 'monospace',textTransform:'uppercase',color:'gray',width:'80px',lineHeight:'16px',letterSpacing:'-1px',fontWeight:'400',fontSize:'1rem'}} variant='h6'>
     Honey Hosting
   </Typography>
</Stack>
<Stack className='Middle-Bottom-Logos' sx={{alignItems:'center',justifyContent:'center',border:'1px solid grey',color:'grey'}}> 
   <Typography sx={{fontFamily:'monospace',color:'gray',letterSpacing:'-2px'}} variant='h5'>
      DETERS
   </Typography>
   <Typography  sx={{fontFamily: ' monospace',letterSpacing:'-1px',color:'gray',fontSize:'0.6rem'}} variant='h9'>
      consulting group
   </Typography>
</Stack>
</Stack>

   </Stack>
  )
}

export default Middle