import React from 'react'

import SideBar from './SideBar'
import Content from './Content'


function Portfolio() {
  return (
    <>
        <div className="flex flex-row justify-center items-center w-full h-screen magicpattern">
            <SideBar/>
            <Content/>
        </div>
    </>
  )
}

export default Portfolio