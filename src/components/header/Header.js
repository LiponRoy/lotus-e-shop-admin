import { Typography } from 'antd';
import React from 'react'

const index = () => {
  return (
    <div className=' h-20 w-full bg-gray-700 flex justify-between items-center px-4'>
      <Typography.Link href='https://www.google.com' style={{fontSize:'18px',color:"white"}}>Lipon D</Typography.Link>
     <div className=" flex justify-center items-center gap-x-2">
      <Typography.Link>Go</Typography.Link>
      <Typography.Link>Went</Typography.Link>
      <Typography.Link>Gone</Typography.Link>
     </div>
      
    </div>
  )
}

export default index
