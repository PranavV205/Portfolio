import React from 'react'
import Avatar from '@mui/material/Avatar';
import { Stack, Box, Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import rrd from '../../assets/rrd.svg'
import mui from '../../assets/mui.png'
import mysql from '../../assets/mysql.svg'

function TechStack() {

    const sx = {
        'height': '56px',
        'width': '56px',
        'color': 'black',
        'bgcolor': '#c2e3ff'
    }

    const styles = {
        'width': '100%',
        'color': 'black',
        'bgcolor': '#c2e3ff'
    }

  return (
    
        <Stack direction='column' spacing={2} className='my-4'>

        <Accordion sx={styles}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            >
                <b>Programming Languages</b>
            </AccordionSummary>
            <AccordionDetails>
                <div className='flex flex-row justify-center'>
                    <Avatar sx={sx}><i className='bx bxl-python bx-flashing bx-lg' ></i></Avatar>
                    <Avatar sx={sx}><i className='bx bxl-javascript bx-flashing bx-lg' ></i></Avatar>
                    <Avatar sx={sx}><i className='bx bxl-c-plus-plus bx-flashing bx-lg' ></i></Avatar>
                </div>
            </AccordionDetails>
        </Accordion>
        <Accordion sx={styles}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            >
                <b>Frameworks and Libraries</b>
            </AccordionSummary>
            <AccordionDetails>
                <div className='flex flex-row justify-center'>
                    <Avatar sx={sx}><i className='bx bxl-react bx-flashing bx-lg' ></i></Avatar>
                    <Avatar sx={sx}><i className='bx bxl-angular bx-flashing bx-lg' ></i></Avatar>
                    <Avatar sx={sx}><i className='bx bxl-django bx-flashing bx-lg' ></i></Avatar>
                    <Avatar sx={sx}><i className='bx bxl-tailwind-css bx-flashing bx-lg' ></i></Avatar>
                </div>
            </AccordionDetails>
        </Accordion>
        <Accordion sx={styles}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            >
                <b>Packages and Component Libraries</b>
            </AccordionSummary>
            <AccordionDetails>
                <div className='flex flex-row justify-center'>
                    <Avatar sx={sx}><img style={{'width': '44px', 'height': '44px'}} src={rrd} /></Avatar>
                    <Avatar sx={sx}><img style={{'width': '36px', 'height': '36px'}} src={mui} /></Avatar>
                </div>
            </AccordionDetails>
        </Accordion>
        <Accordion sx={styles}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            >
                <b>Tools</b>
            </AccordionSummary>
            <AccordionDetails>
                <div className='flex flex-row justify-center'>
                    <Avatar sx={sx}><i className='bx bxl-git bx-flashing bx-lg' ></i></Avatar>
                    <Avatar sx={sx}><img style={{'width': '80px', 'height': '80px'}} src={mysql} /></Avatar>
                    <Avatar sx={sx}><i className='bx bxl-html5 bx-flashing bx-lg' ></i></Avatar>
                    <Avatar sx={sx}><i className='bx bxl-css3 bx-flashing bx-lg' ></i></Avatar>
                </div>
            </AccordionDetails>
        </Accordion>


        </Stack>
  )
}

export default TechStack