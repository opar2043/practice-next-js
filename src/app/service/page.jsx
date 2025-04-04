'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Roboto} from "next/font/google";
import { redirect } from 'next/navigation';

export const roboto = Roboto({
  weight: ['400' ],
  subsets: ['latin']
})

const Service = () => {

  const [user , setUser] = useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {
      setUser(data)
    })
  },[]);


  // if(data.length > 3){
  //   redirect('/')
  // }

  return (
    <div  className={`grid grid-cols-1 md:grid-cols-3 gap-4 p-4 ${roboto.className}`}>
      {
        user?.map(us => <div key={us.id} className='border border-white rounded-md p-4' >
          <p>     
          {us.name}
          </p>
          <p>{us.email}</p>
          <p>{us.adress?.city}</p>
          <Link href={`service/${us?.id}`}>
             <button className="btn bg-white text-black px-4 py-1 btn-xs text-xs rounded">Details</button>
          </Link>
        </div>)
      }
    </div>
  )
}

export default Service