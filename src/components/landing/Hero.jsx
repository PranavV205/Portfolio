import React from 'react'
import Box from '@mui/material/Box';

import background from '../../assets/batman-bg.jpeg'

function Hero() {
  return (
    <div style={{
      backgroundImage: `url(${background})`, 
      'backgroundSize': 'cover',
      'backgroundRepeat': 'no-repeat'
    }} 
      className="h-[100%] w-[100%] flex flex-col">
      <div className='grid-cols-2 grid h-full'>
          <div className='grid-span-1'></div>
          <Box component="section" className='flex justify-center items-center flex-col'>
            <span className='batman '>Pranav Vaswani</span>
            <a className='batman cursor-pointer hover:underline text-4xl' href='/#/profile'>Visit Profile</a>
          </Box>
      </div>
    </div>
  )
}

export default Hero