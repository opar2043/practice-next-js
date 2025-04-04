"use client"
import { useRouter } from 'next/navigation';
import React from 'react'

const Addpage = () => {

  const router = useRouter();

   async function handleAdd(e){
      e.preventDefault();
      const from = e.target;
      const name = from.name.value;
      const item = {
        name
      }
      const res = await fetch("http://localhost:3000/api/items", {
        method: "POST",
        body: JSON.stringify(item),
        headers: {
            "content-Type" : "application/json"
        },
      })

      const result = await res.json(); 
      console.log(result);
      router.push('/products')
    }

  return (
    <div className='flex justify-center my-7'>
       <form action="" onSubmit={handleAdd}>
          <input type="text" placeholder='Add Your data' name='name' className='p-2' /><br />
          <button className='btn btn-primary border border-white py-1 px-5'>Add</button>
        </form>
    </div>
  )
}

export default Addpage