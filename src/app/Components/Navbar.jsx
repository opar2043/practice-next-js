'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Navbar = () => {
  const pathName = usePathname();
  console.log(pathName , pathName.includes('admin'));
  const dash = pathName.includes('admin');
  return (
    <div>
      {
        !dash ?         <nav>
        <ul className='flex justify-around mt-4 w-2/5 mx-auto'>
            <Link href={'/home'}><li>Home</li> </Link>
            <Link href={'/about'}><li>About</li> </Link>
            <Link href={'/service'}><li>Service</li> </Link>
            <Link href={'/products'}><li>Products</li> </Link>
            <Link href={'/addProducts'}><li>Add items</li> </Link>
        </ul>
    </nav> : ''
      }
    </div>
  )
}

export default Navbar