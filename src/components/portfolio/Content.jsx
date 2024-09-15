import React from 'react'
import Divider from '@mui/material/Divider';
import { Box } from '@mui/material';

import Experience from './Experience'
import Projects from './Projects'
import TechStack from './TechStack';


function Content() {
  return (
    <Box className='w-full h-screen overflow-y-scroll pt-16 px-7'>
        <Divider variant="middle">EXPERIENCE</Divider>
        <Box>
            <Experience />
        </Box>
        <Divider variant="middle">TECHSTACK</Divider>
        <Box>
            <TechStack />
        </Box>
        <Divider variant="middle">PROJECTS</Divider>
        <Box>
            <Projects />
        </Box>
    </Box>
    
  )
}

export default Content