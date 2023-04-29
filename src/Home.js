import React from 'react'
import Nav from './component/nav'
import CreateTour from './component/createTour'
import BoxItem from './component/BoxItem'
import Tour from './component/Tour'
import { useSelector,useDispatch } from 'react-redux'
import { useEffect } from 'react'
import {GetTour} from './redux/reducer/Tourslice'


export default function Home() {

 const value = useSelector(state => state.tour.value)
 const createsuccess = useSelector(state => state.tour.createsuccess)
 const event = useSelector(state => state.tour.tour)

 const reverse = event.slice().reverse()
 const dispatch = useDispatch();

  useEffect(()=>{
    const res = dispatch(GetTour()) 
    console.log("hi")
  },[createsuccess])
  

  return (
    <>
   <div className=' w-[100%] bg-cover  bg-no-repeat  bg-gradient-to-r from-indigo-500 from-10% via-purple-500 via-30% to-pink-500 to-90%  bg-[url(https://imges.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8&w=1000&q=80)]'>
     
     <div className='container h-[80%] mx-auto flex align-center items-center justify-center flex-col  space-y-20'>

            <div className='continer'>
              <div className='text-white text-6xl  font-bold w-1/2 hidden md:block'>Wellcome To Traverller Heaven {value}</div>
              <div className='text-white text-base py-4 w-1/2 hidden md:block'>
                this is something about out website in detsila you can find more information and more knowledge about aour businss over 
                here.this is something about out website in detsila you can find more information and more knowledge about aour businss over 
                here.
              </div>
            </div>
              <div className='flex justify-center  py-20  w-[90%] md:w-auto '>
           
                  <CreateTour/>
              </div>
     </div>

   

     </div>


</>
  )
}
