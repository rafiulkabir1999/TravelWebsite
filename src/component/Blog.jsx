import React from 'react'
import BlogPost from './BlogPost'

export default function Blog() {

  const handelSubmit = () =>{
    
  }
  return (
     <div className='container mx-auto h-screen py-6'>

      <div className='flex flex-col  px-6  pt-10'>
          <form 
          onSubmit={handelSubmit}
          className='flex flex-col space-y-2'>
                <input className='p-2 outline-none border 'placeholder='Title' type="text" />
                <input className='p-2 outline-none border 'placeholder='Author' type="text" />
                <textarea 
                className='outline-none border'
                ame="" id="" cols="" rows="10"></textarea>
                <button className='bg-blue-400 px-6 py-2 rounded text-white'>SUBMIT</button>
          </form>
      </div>



        <div className="flex  pt-16">
            <div className=" shadow-md mr-4 md:w-[20%]">
               <div className='p-4 list-none text-sm font-medium cursor-pointer  '>
                 <li className=' p-2 rounded hover:shadow-md hover:text-blue-600'>Name Of the storey of yours</li>
                 <li className=' p-2 rounded hover:shadow-md hover:text-blue-600'>Name Of the storey of yours</li>
                 <li className=' p-2 rounded hover:shadow-md hover:text-blue-600'>Name Of the storey of yours</li>
                 <li className=' p-2 rounded hover:shadow-md hover:text-blue-600'>Name Of the storey of yours sdfa  this tis some ting big </li>
                 <li className='py-1 p-2 rounded hover:shadow-md hover:text-blue-600'>Name Of the storey of yours</li>
                 <li className=' p-2 rounded hover:shadow-md hover:text-blue-600'>Name Of the storey of yours</li>
               </div>
            </div>

            <div className="py-2 flex  flex-col  space-y-10 md:w-[80%]">
              <BlogPost/>
              <BlogPost/>
              <BlogPost/>
              <BlogPost/>

             
            </div>
        </div>
     </div>
  )
}
