import React from 'react'
import { IoIosContact } from "react-icons/io";
const NotFoundContact = () => {
  return (
    <div className='flex justify-center items-center gap-3 '>
       <IoIosContact className='text-blue-700 size-9  ' />
        <h1 className=' text-2xl text-white '> Contact Not Found</h1>
    </div>
  )
}

export default NotFoundContact