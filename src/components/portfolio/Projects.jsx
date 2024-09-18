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
                <a href='/Portfolio/#/projects/memegen' className='parent-ab'>
                    <div className='flex flex-col p-3'>
                        <div className='flex flex-row justify-between items-center'>
                            <b className=''>Meme Hub</b>
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
                            <li>- Developed a dynamic website that integrates an API to retrieve and display memes based on subreddit categories</li>
                            <li>- Created a feature allowing users to generate random images (API) and create custom memes</li>
                            <li>- Utilized web development techniques including custom hooks, Fetch API, React Router, Tailwind CSS and state management with React(props, state and useEffect)</li>
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
                            <li>- Constructed an interactive polling app where users can vote on specific questions with vote tallies displayed for each option</li>
                            <li>- Demonstrate core Django functionality including URL routing, models, views, templates the Django admin interface</li>
                        </ul>
                    </div>
                </a>
            </Paper>
            <Paper key={3} sx={{ 'backgroundColor': '#c2e3ff' ,'height': 'auto', 'color': 'black' }} className=''>
                <a href='/Portfolio/#/profile' className='parent-a'>                   
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