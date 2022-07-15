import React from 'react'
import "./Styles/style.css"
import {useRef,useEffect,useState} from 'react'
import {motion} from 'framer-motion'
import images from './Images'

import {Stack,Typography} from '@mui/material'
const Bottom = () => {
const [width,setWidth] = useState(0)
const carousel = useRef();
 useEffect(() => {
  setWidth(carousel.current.scrollWidth-carousel.current.offsetWidth)
 },[])

  return (
    <Stack className="bottom">
      <Stack sx={{backdropFilter:'blur(0.2rem)'}}> 
        <Stack spacing={2} sx={{height:'30vh',alignItems:'center', justifyContent:'center'}}> 
        <Typography sx={{fontFamily:'Roboto Mono',fontWeight:'900',fontSize:'2rem'}} variant='h3'>
         ENJOY OUR
        </Typography>
        <Typography sx={{fontFamily:'Roboto Mono',fontWeight:'900',fontSize:'2rem'}} variant='h3'>
        LATEST CASE STUDIES
        </Typography>
        <Stack direction='row' spacing={2} sx={{alignItems:'center'}}>
            <Typography sx={{backgroundColor:'orange',width:'60px',height:'2px'}}></Typography>
            <Typography variant='p' sx={{fontFamily:'Roboto Mono',fontWeight:'700',color:'orange'}}>
                  Our Works
            </Typography>
            <Typography sx={{backgroundColor:'orange',width:'60px',height:'2px'}}></Typography>
        </Stack>
    </Stack>
    <Stack sx={{margin:'1rem 10rem'}}> 
    <motion.div ref={carousel} className='bottom-carousel'>
      <motion.div drag='x' dragConstraints={{right:0,left: -width}} className='bottom-carousel-inner'>
        {images.map(img => {
          return(
            <motion.div key={img}   className='bottom-bottom-imgCarousel'>
              <img src={img} alt="" />
            </motion.div>
          )
        })}
      </motion.div>
    </motion.div>
    </Stack>
    </Stack>
    </Stack>
  )
}

export default Bottom