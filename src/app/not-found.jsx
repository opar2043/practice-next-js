import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div>NotFound The Page 404
        <button className="btn ">
            <Link href={'/'}>Go Back</Link>
        </button>
    </div>
  )
}

export default NotFound