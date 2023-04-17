import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {Add,CreateTourapi} from '../redux/reducer/Tourslice'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function CreateTour() {

    const dispatch = useDispatch();
    const [form,setform] = useState()
    const [to,setto] = useState()
    const [traveller,settraveller] = useState(0)
    const [cost,setcost] = useState()
    const [date,setdate] = useState()



    const notify = () => toast("Created succesfully")

    const onSubmit = (e) => {
        e.preventDefault();
        
       const data = {
        form:form,
        to:to,
        max:traveller,
        cost:cost,
        date:date

       }
       //console.log(data)
      const res =  dispatch(CreateTourapi(data))
      if(res)
      {
        notify();
      }

    }
  return (
    <div className='' >
      <ToastContainer/>
      <form onSubmit={onSubmit} 
            className='flex flex-col   shadow-2xl p-4 space-x-2 rounded-md py-6 text-white w-full  bg-transparent  md:flex-row '  >
      <div className='flex flex-col justify-center '>
            <label 
            className='font-md text-base cursor-pointer md:p-2'
            htmlFor='form'>FROM</label>
            <input 
                id='form'
                className='outline-none p-2 border-b-2  text-md font-semibold bg-transparent '
                type='text'
                onChange={(e)=>setform(e.target.value)}
                required
                >
                
                </input>
        </div>

        <div className='flex flex-col justify-center '>
            <label 
            className='font-md text-base cursor-pointer md:p-2'
            htmlFor='to'>TO</label>
            <input 
                id='to'
                className='outline-none p-2  text-md font-semibold  border-b-2 bg-transparent'
                type='text'
                onChange={(e)=>setto(e.target.value)} required
                ></input>
        </div>

        <div className='flex flex-col   justify-center'>
            <label 
            className='font-md text-base cursor-pointer md:p-2'
            htmlFor='cost'>COST</label>
            <input 
                id='cost'
                className='outline-none p-2  border-b-2 text-md font-semibold  bg-transparent'
                type='number'
                onChange={(e)=>setcost(e.target.value)} required
                ></input>
        </div>


        <div className='flex flex-col justify-center'>
            <label 
            className='font-md text-base  cursor-pointer  md:p-2'
            htmlFor='travellers'>TRAVELLERS</label>
        {/* { <input 
              id='travellers'
              className='outline-none p-2 border-b-2 bg-transparent text-md  font-semibold '
              type='number'
              onChange={(e)=>settraveller(e.target.value)} required
              ></input>} */}

            <div className='flex p-2 space-x-2 justify-around text-orange-500 font-bold items-center justify-center'>
                  <button  
                  onClick={()=>settraveller(state => {if(state> 0)return state - 1 ; else return state})}
                  className=' bg-white rounded shadow w-8 h-8 items-center justify-center'> 
                      <span className='block bg-black w-3 h-[3px] mx-auto'></span>
                  </button>

                <div className='w-8 h-8 rounded bg-white flex items-center justify-center'>{traveller}</div>

                <button 
                onClick={()=>settraveller(state => {if(state< 50)return state + 1 ; else return state})}
                className='py-2 font-semibold bg-white rounded shadow w-8 h-8 relative'>
                      <span className='block bg-black w-3 h-[3px] absolute rotate-90  left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]'></span>
                      <span className='block bg-black w-3 h-[3px] absolute   left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]'></span>
                </button>
            </div>
        </div>

       

        <div className='flex  flex-col cursor-pointer '>
               <input 
                        id='date'
                        className='outline-none p-2  text-[15px] font-semibold bg-transparent rounded-md'
                        type='date'
                        onChange={(e)=>setdate(e.target.value)}
                        required></input>
        
           <button className=' px-8 py-2 mt-auto rounded-md text-white font-semibold text-md bg-transparent border-white border-2 hover:bg-indigo-500'
                  
                  >Create</button>
        </div>
      </form>
       
    </div>
  )
}
