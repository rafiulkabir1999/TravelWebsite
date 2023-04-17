import React from 'react'

export default function BoxItem() {
  return (
    <div className='bg-white relative  w-20 h-20 rounded-full flex items-center justify-center flex-col shadow-xl 
     hover:animate-bounce cursor-pointer md:w-40 md:h-40 p-10'>
        <h2 className='font-bold   text-xs md:font-bold md:text-xl '>BLOG</h2>
        <p className='font-bold   text-xs md:font-bold md:text-xl text-green-400 '>300</p>
      
  </div>
  )
}
