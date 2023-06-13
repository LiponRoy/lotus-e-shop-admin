import { Typography } from 'antd';
import React from 'react'

const index = () => {
  return (
    <div className=' h-20 w-full bg-gray-700 flex justify-center items-center'>
      <Typography.Link href='www.google.com' style={{fontSize:'18px',color:"white"}}>Footer@ components</Typography.Link>
      
    </div>
  )
}

export default index
