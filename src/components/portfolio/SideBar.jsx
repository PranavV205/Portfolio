import { Stack } from '@mui/material'
import { useEffect, useRef } from 'react'
import Typed from 'typed.js';


function SideBar() {

  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['a frontend enthusiast', 'an aspiring web developer'],
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
        <p className='mb-5'>in Artificial Intelligence and Data Science.</p>
        <div className='flex items-center'>
          <Stack direction={'row'} spacing={1}>
            <a className='cursor-pointer hover:animate-pulse' href='https://github.com/PranavV205'><i className='bx bxl-github bx-md' ></i></a>
            <a className='cursor-pointer hover:animate-pulse' href='https://www.linkedin.com/in/pranav-vaswani-885b1b28a/'><i className='bx bxl-linkedin bx-md' ></i></a>
          </Stack>
        </div>
    </div>
  )
}

export default SideBar