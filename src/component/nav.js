import React from 'react'
import Logo from '../logo.svg'

export default function Nav() {

 const Toggle = () => {
  document.getElementById("MENU").classList.toggle('show')
 }

  return (
    <div className='container mx-auto flex justify-between items-center py-2 relative'>
         <div className='brand'>
             <img className='w-12' src='./logo192.png'></img>
         </div>
         <div className='hidden md:flex items-center space-x-20 '>
            <div className='flex space-x-20   p-4 font-bold  text-base text-white list-none '>
                <div className='hover:text-orange-400 cursor-pointer'>About</div>
                <div className='hover:text-orange-400 cursor-pointer'>Blog</div>
                <div className='hover:text-orange-400 cursor-pointer'>Photos</div>
                <div className='hover:text-orange-400 cursor-pointer'>Place</div>
            </div>
            <div>
                <button 
                onClick={()=>{document.getElementById('Tour').scrollIntoView({ behavior: 'smooth', block: 'center' })}}
                className='  bg-green-200 text-black rounded-full text-base p-2   font-bold px-8'>Join</button>
            </div>
         </div>
         <div className='space-y-1 p-1 md:hidden '>
             <div className='w-8 h-1 block bg-black '> </div>
             <div className='w-8 h-1 block bg-black '> </div>
             <div className='w-8 h-1 block bg-black '> </div>
         </div>
 

         <div id='MENU' className='flex flex-col   absolute  p-4 top-0 transparent-xl h-screen z-10 text-black bg-white w-full  font-bold  text-base py-10 list-none md:hidden '>
                <span className='text-right'
                onClick={Toggle}
                >X</span>
                <div className='hover:text-orange-400 cursor-pointer'>About</div>
                <div className='hover:text-orange-400 cursor-pointer'>Blog</div>
                <div className='hover:text-orange-400 cursor-pointer'>Photos</div>
                <div className='hover:text-orange-400 cursor-pointer'>Place</div>
            </div>
         
    </div>
  )
}