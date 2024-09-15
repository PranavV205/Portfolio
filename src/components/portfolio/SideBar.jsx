import { Stack } from '@mui/material'
import { useEffect, useRef } from 'react'
import Typed from 'typed.js';


function SideBar() {

  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['a frontend enthusiast', 'an aspiring web developer'],
      typeSpeed: 50,
      showCursor: false,
      backDelay: 300,
      backSpeed: 75,
      typeSpeed: 75,
      smartBackspace: true
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  },[])
  


  return (
    <div className='sticky top-0 flex flex-col h-full w-full justify-center pl-8 open-sans'>
        <h1 className='text-6xl mb-1'>Pranav Vaswani</h1>
        <span className='text-4xl mb-5' ref={el}></span>
        <p>I am a sophomore pursuing a degree</p>
        <p className='mb-16'>in Artificial Intelligence and Data Science.</p>
        <ul className='mb-16'>
            <li className='mb-1'><a href=''><i class='bx bxs-label bx-flashing' ></i> Experience</a></li>
            <li className='mb-1'><a href=''><i class='bx bxs-label bx-flashing' ></i> TechStack</a></li>
            <li><a href=''><i class='bx bxs-label bx-flashing' ></i> Projects</a></li>
        </ul>
        <div className='flex justify-center items-center'>
          <Stack direction={'row'} spacing={1}>
            <a className='cursor-pointer hover:animate-pulse' href=''><i className='bx bxl-github bx-md' ></i></a>
            <a className='cursor-pointer hover:animate-pulse' href=''><i className='bx bxl-linkedin bx-md' ></i></a>
          </Stack>
        </div>
    </div>
  )
}

export default SideBar