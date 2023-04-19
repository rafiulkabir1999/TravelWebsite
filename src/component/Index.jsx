import React from 'react'
import BoxItem from './BoxItem'
import Tour from './Tour'
import { useSelector,useDispatch } from 'react-redux'
import { useEffect } from 'react'
import {GetTour} from '../redux/reducer/Tourslice'
import { toast } from 'react-toastify'


export default function Index() {

    const value = useSelector(state => state.tour.value)
    const createsuccess = useSelector(state => state.tour.createsuccess)
    const joinORnot = useSelector((state) => state.tour.joinsuccess)
    const joinRejectORnot = useSelector((state) => state.tour.joinreject)
    const event = useSelector(state => state.tour.tour)
   
    const reverse = event.slice().reverse()
    const dispatch = useDispatch();
    //const Tour = useSelector(state=>state.Tour.Tour)
    
    //const nofity = () => toast("Succesfully done")
    const joinSuccess = () => toast("SuccessFully Join")
    const joinReject = () => toast("You canot join at this monent")
     useEffect(()=>{
       const res = dispatch(GetTour()) 
       //nofity();
      // console.log("hi")
     },[createsuccess])
   
    useEffect(()=>{
     joinORnot && joinSuccess()
   
    },[joinORnot])

    useEffect(()=>{
      joinRejectORnot && joinReject()
    
     },[joinRejectORnot])

  return (
    <>
      <div className='container mx-auto  pt-20 md:pt-20 z-10'>
       <div className='w-full mx-auto flex  justify-around md:justify-between md:w-2/3'>
       <BoxItem/>
      <BoxItem/>
      <BoxItem/>
    <BoxItem/>
       </div>
     </div>


     <div id='Tour' className='container mx-auto py-0 md:py-20'>
      <h6 className='text-4xl px-0 font-bold py-4'>Tour Upcominng JOIN NOW !</h6>
      <span className="text-gray-400 py-5">here you can find all ther tour event happed in future</span>
      <div id='tourcontainer'className='grid relative order-last grid-cols-2 gap-3 pt-20 px-5 gap-y-10 md:grid-cols-5 md:gap-6 md:px-0'>
        {reverse.map((e,index)=>{
          return <Tour details={e} key={index} id={index} size={reverse.length}/>
        })}
      </div>
     </div>
     

      </>
  )
}
