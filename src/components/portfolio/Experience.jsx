import React from 'react'
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Paper } from '@mui/material';


function Experience() {
  return (

    <Paper sx={{ 'backgroundColor': '#c2e3ff' ,'height': 'auto', 'color': 'black' }} className='p-2 my-4'>
      <Timeline
        sx={{
          [`& .${timelineItemClasses.root}:before`]: {
            flex: 0,
            padding: 0,
          },
        }}
      >
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
              
                <b className=''>Google DSC, Pune</b>
                <span className='block'>Volunteer</span>
                <span className='text-md'>Feb 2024 - Present</span>
                <div className='text-sm mt-2'>
                    <p> - Co-hosted day-2 of a 3-day event ‘Everything Web’; demonstrated creating a responsive portfolio in
                    front of 40+ audience members</p>
                    <p> - Troubleshoot technical problems audience faced ranging from installation issues to error codes</p>
                </div>
             
              
          </TimelineContent>
        </TimelineItem>
        
      </Timeline>
    </Paper>
  )
}

export default Experience