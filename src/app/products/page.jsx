import React from 'react'

const Products = async() => {
    const res= await fetch("http://localhost:3000/api/items");
    const data = await res.json();

  return (
    <div>
        {
          data &&  data?.map(d=> <div key={d._id}>
                 <p>{d.name}</p>
                 <p>{d._id}</p>
            </div>)
        }
    </div>
  )
}

export default Products