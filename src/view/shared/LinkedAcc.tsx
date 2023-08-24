import React, { FC } from 'react'
import Link from 'next/link'


interface LinkedAcc {
    url: string;
    children: React.ReactNode
}

const LinkedAcc: FC<LinkedAcc> = ({ url, children}) => {
  return (
    <div className='rounded-full shadow-lg shadow-orange-600 p-4 cursor-pointer hover:scale-125 ease-in duration-300 hover:bg-gray-100'>
      <Link href={url}>{children}
      </Link>
    </div>
  )
}

export default LinkedAcc;
