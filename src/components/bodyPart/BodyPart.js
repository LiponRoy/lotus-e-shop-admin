
import React from 'react'
import SideBar from './sidebar/SideBar'
import PageContent from './pageContent/PageContent'

const index = () => {
  return (
    <div className=' h-screen w-full flex justify-start items-center'>
        
       <SideBar></SideBar>
       <PageContent></PageContent>
      
    </div>
  )
}

export default index
