import React from 'react'
import BoxItem from './BoxItem'
import Tour from './Tour'
import { useSelector,useDispatch } from 'react-redux'
import { useEffect,useState } from 'react'
import {GetTour,searchtour} from '../redux/reducer/Tourslice'
import { toast } from 'react-toastify'


export default function Index() {

    const value = useSelector(state => state.tour.value)
    const createsuccess = useSelector(state => state.tour.createsuccess)
    const joinORnot = useSelector((state) => state.tour.joinsuccess)
    const joinRejectORnot = useSelector((state) => state.tour.joinreject)
    const event = useSelector(state => state.tour.tour)
    const [search,setSearch] = useState()
   
    //const reverse = event && event.slice().reverse()
    
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


     const handelSubmit = (e) => {
       e.preventDefault();
        console.log(search)
       try {
         dispatch(searchtour(search))
       } catch (error) {
        console.log(error)
       }
       
     }

  return (
    <>
     <div id='Tour' className='container mx-auto py-0 md:py-20'>
      <div className='flex justify-around items-center border-b'>
         <div >
         <h6 className='text-4xl px-0 font-bold pt-4 pb-2'>Tour Upcominng JOIN NOW !</h6>
              <p className="text-gray-400 py-2">here you can find all ther tour event happed in future</p>
         </div>

              <form onSubmit={handelSubmit} className=''>
                <input 
                onChange={(e)=>setSearch(state => state = e.target.value)}
                className='outline-none p-2  border-l border-t border-b rounded-l' 
                placeholder='Destination'
                type="text"></input>
                <button 
                className='bg-blue-500 p-2 px-4 rounded-r text-white border-r border-t border-b border-blue-500'
              
                >Search</button>
              </form >
              <div>
                <img
                onClick={()=>dispatch(GetTour())}
                className='w-10 h-10 cursor-pointer hover:border hover:border-orange-400 p-2 rounded'
                src="https://cdn0.iconfinder.com/data/icons/glyphpack/41/refresh-512.png" alt="" />
              </div>
      </div>
      <div id='tourcontainer'className='grid relative order-last grid-cols-2 gap-3 pt-20 px-5 gap-y-10 md:grid-cols-5 md:gap-6 md:px-0'>
        { event && event.map((e,index)=>{
          return <Tour details={e} key={index} id={index} size={event.length}/>
        })}
      </div>
     </div>
     

      </>
  )
}
