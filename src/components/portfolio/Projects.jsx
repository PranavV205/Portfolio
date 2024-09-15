import React from 'react'
import Masonry from '@mui/lab/Masonry';
import Paper from '@mui/material/Paper';
import { Box, Stack, } from '@mui/material';

import {motion} from 'framer-motion'

import rrd from '../../assets/rrd.svg'
import mui from '../../assets/mui.png'

import bgimg from '../../assets/memegen.png'

function Projects() {


  return (
    <Box className='mt-4'>
        <Masonry columns={2} spacing={2}>
            <Paper key={1} sx={{ 'backgroundColor': '#c2e3ff' ,'height': 'auto', 'color': 'black' }} className='flex'>
                <a href='/#/projects/memegen' className='parent-ab'>
                    <div className='flex flex-col p-3'>
                        <div className='flex flex-row justify-between items-center'>
                            <b className=''>Meme Generator</b>
                            <Stack direction={'row'}>
                                <i className='bx bxl-javascript bx-sm' ></i>
                                <i className='bx bxl-react bx-sm' ></i>   
                                <i className='bx bxl-css3 bx-sm' ></i>  
                            </Stack> 
                        </div>
                        <img 
                            src={bgimg} 
                            className='w-full rounded-lg mt-3'
                        />
                        <ul className='mt-3 text-sm' >
                            <li>- Static website looping over a list of images to randomly showcase one and the option to add text at the top and bottom.</li>
                            <li>- Core React concepts used such as props, useState, useEffect, onChange attribute, etc.</li>
                        </ul>
                    </div>
                </a>
            </Paper>
            <Paper key={2} sx={{ 'backgroundColor': '#c2e3ff' ,'height': 'auto', 'color': 'black' }} className=''>
                <a href='https://github.com/PranavV205/DjangoPolls' className='parent-ab'>
                    <div className='p-3'>
                        <div className='flex flex-row justify-between items-center'>
                            <b className=''>DjangoPolls</b>
                            <Stack direction={'row'}>
                                <i className='bx bxl-python bx-sm' ></i>
                                <i className='bx bxl-django bx-sm' ></i>
                            </Stack> 
                        </div>
                        <ul className='mt-3 text-sm' >
                            <li>- A basic django project where a user can vote on choices to particular questions and display overall votes on specific choices.</li>
                            <li>- Showcasing core django concepts of working with urls, routing, models, views, templates and admin.</li>
                        </ul>
                    </div>
                </a>
            </Paper>
            <Paper key={3} sx={{ 'backgroundColor': '#c2e3ff' ,'height': 'auto', 'color': 'black' }} className=''>
                <a href='/#/profile' className='parent-a'>                   
                        <div className='flex flex-row justify-between items-center h-full p-5'>
                            <b className=''>Portfolio</b>
                            <Stack direction={'row'}>
                                <i className='bx bxl-react bx-sm' ></i>
                                <i className='bx bxl-tailwind-css bx-sm' ></i> 
                                <motion.img  style={{'width': '24px', 'height': '24px'}} src={rrd} className='mx-1'/>
                                <motion.img  style={{'width': '18px', 'height': '18px'}} src={mui} />
                            </Stack> 
                        </div>
                </a>
            </Paper>
        </Masonry>
    </Box>
  )
}

export default Projects