import React from 'react'
import BlogPost from './BlogPost'
import { useState,useEffect } from 'react'
import { CreateBlog, GetBlog, reset } from '../redux/reducer/Blogslice'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'

export default function Blog() {

 const dispatch = useDispatch();
 const {success ,error , pending , Blog} = useSelector(state => state.blog)

 const [blog,setblog] = useState({
   title:'',author:'',blog:''
 })

 const onchange = (e)=> {
      setblog(prev => ({...prev,[e.target.name]:e.target.value}))
 }

  const notifysuccess = () => toast('Blog Created SuccesFully')
  
  const handelSubmit = (e) =>{
    e.preventDefault()
    blog.title && blog.blog && blog.author && dispatch(CreateBlog(blog))
    dispatch(GetBlog())
   
   
  }

  //initial GetBLog 
  useEffect(()=>{
    dispatch(GetBlog())
  },[])

  //update Blog and rerender
  useEffect(()=> {
  },[Blog])

  // this code is for showing notification status about New Blog Post

  useEffect(()=>{
  success && notifysuccess()
  success && dispatch(reset())

},[success])

  return (
     <div className='container mx-auto h-screen py-6'>

      <div className='flex flex-col  px-6  py-8 shadow '>
         <span className='pb-2 font-bold text-gray-500'>Create Your Blog</span>


          <form 
          onSubmit={handelSubmit}
          className='flex flex-col space-y-2 '>
                <input 
                name='title'
                value={blog.title}
                onChange={onchange}
                className='p-2 outline-none border 'placeholder='Title' type="text" />

                <input 
                name='author'
                value={blog.author}
                onChange={onchange}
                className='p-2 outline-none border 'placeholder='Author' type="text" />

                <textarea 
                name='blog'
                value={blog.blog}
                onChange={onchange}
                className='outline-none border p-2'
                ame="" id="" cols="" rows="10"></textarea>
                <button className='bg-blue-400 px-6 py-2 rounded text-white'>SUBMIT</button>
          </form>


      </div>



   
            

            <div className="py-2 flex  flex-col pt-20  space-y-10 ">
             
              {Blog && Blog.map(e => {
                return <BlogPost details={e}/>
              })}

             
            </div>
       
     </div>
  )
}
