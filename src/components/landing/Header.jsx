import React from 'react'
import {Breadcrumbs, Link} from '@mui/material';





function Header() {
  return (
      <div className='flex items-center justify-between'>
        <div>hi</div>
        <Breadcrumbs className='flex justify-center'>
          <Link className='cursor-pointer'>
            <i className='text-bistre bx bxl-linkedin bx-flashing-hover bx-border-circle' ></i>
          </Link>
          <Link className='cursor-pointer'>
            <i className='text-bistre bx bxl-github bx-flashing-hover bx-border-circle' ></i>
          </Link>
          <Link className='cursor-pointer'>
            <i className='text-bistre bx bxs-envelope bx-flashing-hover bx-border-circle' ></i>
          </Link>
        </Breadcrumbs>
        <div></div>
      </div>
  )
}

export default Header