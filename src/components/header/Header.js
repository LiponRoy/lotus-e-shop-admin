import { Button, Checkbox, ConfigProvider, Input, Radio, Typography } from 'antd';
import React from 'react'

const index = () => {
  return (
    <div className=' h-20 w-full bg-gray-700 flex justify-between items-center px-4'>
      <Typography.Link href='https://www.google.com' style={{fontSize:'18px',color:"white"}}>Lipon D</Typography.Link>
     <div className=" flex justify-center items-center gap-x-2">
     <ConfigProvider
    theme={{
      token: {
        colorPrimary: '#00b96b',
        colorBorder:'#B71C1C',
        colorTextLightSolid:'#ffffff'
        
      },
    }}
  >
    <div className=" flex  justify-center items-center gap-x-2">
    <Input placeholder="Here to me"></Input>
    <Button type="primary" style={{backgroundColor:'#00b96b'}}>Primary Button</Button>
    <Radio>Radio</Radio>
    <Checkbox>Checkbox</Checkbox>
    </div>
  </ConfigProvider>
     </div>
      
    </div>
  )
}

export default index
