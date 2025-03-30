'use client'
import Link from 'next/link';
import React, { use, useEffect, useState } from 'react'

const ServiceDetails = ({params}) => {
    const resolvedParams = use(params); // Unwrap the promise
    const id = resolvedParams?.id;

      const [user , setUser] = useState()
      useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => {
          setUser(data)
        })
      },[])


      const one = user?.find(u => u.id == id);

  return (
    <div className='flex justify-center my-5'>
        {
            one &&  <div className='border p-6 w-1/2'>
                 <h1>{one.name}</h1>
            <h1>{one.email}</h1>
            <h1>{one?.address?.city}</h1>
            <h1>{one?.address?.zipcode}</h1>
            <h1>{one?.address?.street}</h1>
           <p>Details Here for No. {id}</p>
           <Link href={'/service'}>
           <button className="btn p-3 border-2">Go Back</button>
           </Link>
            </div>
        }
    </div>
  )
}

export default ServiceDetails