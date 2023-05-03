import React from 'react'
import { PhotoSlice, SearchPhoto } from '../redux/reducer/Photoslice'
import { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Photos() {

  const [search,setSearch] = useState()
  const dispatch = useDispatch()
  const { photos } = useSelector(state => state.photos)

  const handelsubmit =(e) => {
       e.preventDefault();
       console.log(search)
       search && dispatch(SearchPhoto(search))

  }

  const handelonchange = (e) => {
     setSearch(e.target.value)
  }
//  useEffect(() => {
//  console.log("photos")
//  },[photos])


  return (
    <div className='container mx-auto'>
      <div className='flex items-center py-6 space-x-10'>
            <form onSubmit={handelsubmit}>
                    <input
                    onChange={handelonchange} 
                    className='outline-none p-2 border'
                    placeholder='search photo here'
                    type='text'></input>

                    <button 
                    className='p-2 bg-blue-500 text-white'
                    type='submit'>Search</button>
            </form >

            <div className='flex font-bold font-xl space-x-5'>
        

                  

               
            </div>
      </div>

      <div className='border pt-5 p-2  grid grid-rows-2 grid-flow-col gap-4 '>
       { photos && photos.map(e => {
           return <img src={e.urls.small}></img>
       })}
     </div>
    </div>
  )
}
