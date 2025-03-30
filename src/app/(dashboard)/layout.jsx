import React from 'react'

const Dashboard = ({children}) => {
  return (
    <div className='grid grid-cols-12'>
        <div className='col-span-3'>
            <li>Home</li>
            <li>List</li>
            <li>about</li>
        </div>
        <div className='col-span-9'>{children}</div>
     
    </div>
  )
} 

export default Dashboard