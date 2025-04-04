// "use client"
// import React, { useState } from 'react'

// const Products = async() => {
//     const res= await fetch("http://localhost:3000/api/items");
//     const data = await res.json();

//     const [item , setItem] = useState(data)

//   return (
//     <div>
//         {
//           item &&  item?.map(d=> <div key={d._id} 
//             className='border border-white py-4'>
//                  <p>{d.name}</p>
//                  <p>{d._id}</p>
//             </div>)
//         }
//     </div>
//   )
// }

// export default Products








"use client";
import React, { useState, useEffect } from "react";

const Products = () => {
  const [item, setItem] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/items");
        const data = await res.json();
        
        // Ensure data is an array before setting state
        setItem(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Failed to fetch data:", error);
        setItem([]); // Set an empty array on error
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {item.length > 0 ? (
        item.map((d) => (
          <div key={d._id} className="border border-white py-4">
            <p>{d.name}</p>
            <p>{d._id}</p>
          </div>
        ))
      ) : (
        <p>No products found</p>
      )}
    </div>
  );
};

export default Products;
