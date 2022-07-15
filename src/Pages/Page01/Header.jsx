import React,{useState} from 'react'
import {Box,Typography,Stack,ButtonGroup,Button,TextField} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import imgs from '../../Images/PNG001.png'
import './Style/style.css'
const Header = () => {
const [search,setSearch] = useState(false)
  return (
    <>
     <img className='png01' src={imgs} alt="" />
   
    <Stack className='Header' > 
<Stack className='Header-top' sx={{alignItems:'center', justifyContent: 'space-around',zIndex: '1'}}direction='row'>

     <Typography className='Header-top-Htext' sx={{fontWeight: '800', color:'#e3f2fd',marginLeft:'-90px',fontSize: '1.6em'}} variant='h5'>JEREMY</Typography>

     <Stack spacing={6} direction='row'>
        <Typography className='Header-top-h7 animateunderline' sx={{boxShadow: '3',letterSpacing: '2px'}} color='#e3f2fd' variant='h7'>HOME</Typography>
        <Typography className='Header-top-h7 animateunderline' sx={{boxShadow: '2',letterSpacing: '2px'}}  color='#e3f2fd' variant='h7'>ABOUT</Typography>
        <Typography className='Header-top-h7 animateunderline' sx={{boxShadow: '2',letterSpacing: '2px'}}  color='#e3f2fd' variant='h7'>BLOG</Typography>
        <Typography className='Header-top-h7 animateunderline' sx={{boxShadow: '2',letterSpacing: '2px'}}  color='#e3f2fd' variant='h7'>PORTFOLIO</Typography>
        <Typography className='Header-top-h7 animateunderline' sx={{boxShadow: '2',letterSpacing: '2px'}}  color='#e3f2fd' variant='h7'>SHOP</Typography>
        <Typography className='Header-top-h7 animateunderline' sx={{boxShadow: '2',letterSpacing: '2px'}} color='#e3f2fd' variant='h7'>CONTACTS</Typography>
     </Stack>
     
   <ButtonGroup direction='row' end variant='contained' sx ={{marginRight:'-143px'}}>
    <Button sx={{backgroundColor: '#f44336',width: '65px',height:'65px'}} onClick={() => setSearch(!search)}>
        <SearchIcon/>
        </Button>
    <Button sx={{backgroundColor: '#4a148c',width: '65px',height:'65px'}}>
        <ShoppingCartIcon/>
        
        </Button>
   </ButtonGroup>
    </Stack>
    
     <Stack className='Header-mid'>
        <Stack className='Header-middle' direction='column' sx={{justifyContent:'center',zIndex:'1',position:'absolute',
     top:'175px',left:'293px'}}>
         <Typography className='Header-middle-text-p' variant='p' sx={{ color:'#e3f2fd' }} >
    WE LOVE DESIGN
               </Typography>
         <Typography className='Header-middle-text' variant='h1' sx={{letterSpacing:'4px',color:'#e3f2fd',fontWeight:'900' ,fontSize:'4.5rem',marginLeft:'-10px' }} >
    CREATIVE 
               </Typography>
         <Typography variant='h1' className='Header-middle-text-M' sx={{ color:'#e3f2fd',fontWeight:'900' ,fontSize:'4.5rem',marginLeft:'-10px' }}>
     MINDS
               </Typography>
            <Button variant='outlined' disableRipple 
             sx={{outline:'1.5px solid white',width: '125px',height:'45px',fontSize:'0.6rem',fontWeight:'300',color:'white',marginLeft:'-5px',marginTop:'15px'}} >
  GET IN TOUCH
              </Button>
         </Stack>
         {search && ( 
         <Stack className='Header-middle-right'  direction='row' sx={{marginRight:'-43px',alignItems:'center'}}>  
         <input className='Header-middle-right-TF' style={{width:'200px',height:'39px',outline:'none',padding:'0.7rem',letterSpacing:'2px',color:'white'}} placeholder= 'Search a Product...' />
         <Button className='Header-middle-right-searchIcon' sx={{backgroundColor: '#263238',
         width: '65px',height:'38px'}} >
        <SearchIcon />
         </Button>
    
     </Stack>)}
    </Stack>
    </Stack>
  
    </>
  )
}

export default Header