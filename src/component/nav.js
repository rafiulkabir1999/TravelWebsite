import React from 'react'
import Logo from '../logo.svg'
import { Link, useNavigate ,useLocation,  } from 'react-router-dom'
//import { useNavigate } from "react-router-dom";


export default function Nav() {

 const Navigate = useNavigate()
 const Location = useLocation()

 const navigatetoTour =() => {

      console.log(Location.pathname)
      const TOUR_ID = 'Tour'
      if (Location.pathname === '/')
      document.getElementById('Tour').scrollIntoView({ behavior: 'smooth', block: 'center' })
      else {  
            Navigate('/')
            setTimeout(()=>{document.getElementById('Tour').scrollIntoView({ behavior: 'smooth', block: 'center' })},100)
      }
    }
 

 const Toggle = () => {
  document.getElementById("MENU").classList.toggle('show')
 }

  return (
    <div className='bg-gradient-to-r from-indigo-500 from-10% via-purple-500 via-30% to-pink-500 to-90% w-full '>
    <div className='container mx-auto flex justify-between items-center py-2 relative '>
         <div className='brand'>
             <img className='w-12' src='./logo192.png'></img>
         </div>
         <div className='hidden md:flex items-center space-x-20 '>
            <div className='flex space-x-20   p-4 font-bold  text-base text-white list-none '>
                <Link to='/'>
                <div className='hover:text-orange-400 cursor-pointer'>Home</div>
                </Link>
                <Link to='/blog'>
                <div className='hover:text-orange-400 cursor-pointer'>Blog</div>
                </Link>
               <Link to='/photos'>
               <div className='hover:text-orange-400 cursor-pointer'>Photos</div>
               </Link>
                <div className='hover:text-orange-400 cursor-pointer'>Place</div>
            </div>
            <div>
                <button 
                onClick={navigatetoTour}
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
         
    </div></div>
  )
}
