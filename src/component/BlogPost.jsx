import React from 'react'

export default function BlogPost(props) {
 const Show = () => {
    document.getElementById(props.details._id).classList.toggle('max-h-28')
 }

  return (
    <div className='border-5 border-gray-500 relative pb-10 shadow rounded'>
       <span 
       onClick={Show}
       className='absolute bottom-2 right-3 text-orange-600 font-bold cursor-pointer'>
        Continue Reading
       </span>
    <div className='flex justify-between items-center'>
    <div className="flex flex-col ">
     <p className='font-bold text-md  px-6 pt-4 text-xl'>  {props.details.title}</p>
      <span className='text-blue-300 text-sm px-6 '>
          by {props.details.author}
      </span>
      </div>
      <div className='p-2 px-4 text-gray-600 font-semibold text-sm  flex flex-col juftity-center items-center '>
         <p>{props.details.created_at.split('T')[0]}</p> 
         <p> {props.details.created_at.split('T')[1].split('.')[0]}</p>
         
      </div>
    </div>
      <p id={props.details._id} className='p-6  leading-8 overflow-hidden max-h-28 pb-10 '>
         {props.details.blog}
      </p>
  </div>
  )
}
