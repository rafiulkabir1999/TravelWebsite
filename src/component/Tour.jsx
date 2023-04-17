import React from 'react'
import { jointour } from '../redux/reducer/Tourslice'
import { useDispatch, useSelector } from 'react-redux'
import { useState,useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import jsPDF from 'jspdf';
import  autoTable from'jspdf-autotable';

export default function Tour(props) {
  
  //for pdf create doc
  //console
  const SavePDF = () => {
    const doc = new jsPDF()
    doc.text(props.details.form + " - " + props.details.to +"    Date :" + props.details.date, 20, 10);
    props.details.people && autoTable(doc, { 
      head: [['No', 'Name', 'Phone']],
    body: props.details.people.map((e ,index)=> {return  ([index + 1,e.name,e.phone])}) , })
    //doc.text("Hello world!", 10, 10);
    props.details.people.length>0 ?  doc.save("a4.pdf") :alert("file is empty")
  }

  const dispatch = useDispatch();
  const [name,setname] = useState();
  const [phone,setphone] =  useState();

  //taking data from redux tore
  const available = props.details.max - props.details.people.length;
  const joinORnot = useSelector((state) => state.tour.joinsuccess)

 const Showmodal = () => {
  document.getElementById(props.details._id).classList.toggle('hidden')
  document.getElementById(props.details._id +'more').classList.toggle('hidden')
  document.getElementById('cross' + props.details._id).classList.toggle('hidden')
  document.getElementById('Member' + props.details._id).classList.add('hidden')
  document.getElementById('this' + props.details._id).classList.toggle('AbsoluteCenter')
  document.getElementById('join' + props.details._id).classList.toggle('hidden')
  document.getElementById('submit' + props.details._id).classList.toggle('hidden')
  document.getElementById('this' + props.details._id).scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });

 }

 const notify = () => toast('Join succesfully')
 const joinTeam = (id) => {
  name && phone && dispatch(jointour({tour:id,name,phone}))
 }
 useEffect(()=>{
 
 },[])
console.log(props.details.people)
  return (
    <div id={'this'+props.details._id} className='relative shadow-md overflow-hidden     hover:shadow-xl'>
      <span  id={'cross'+ props.details._id} className='absolute right-0 top-0 hidden p-4 cursor-pointer z-50 '>
        <img 
        onClick={()=> Showmodal()}
        className='w-5 h-5'
        src="./cross.png" alt="" />
      </span>



      <table id={'Member'+props.details._id} 
      className='hidden absolute block table-auto block px-5 h-full shadow-md bg-white right-0  text-gray-600 overflow-scroll z-40 pb-20 pt-5 '>
           
           <tbody className='mt-4 border-t' id='table'>
            <tr className='bg-blue-400 text-sm px-10 font-bold text-white'>
              <td className='p-2'>No</td>
              <td className='p-2'>Name</td>
              <td className='p-2'>Phone</td>
            </tr>
          
            {props.details.people.map((member,index)=>{
              return(<>
               <tr className=' text-xs items-left font-medium justify-around text-left px-10 border-b border-l border-r p-1 '>
                        <td className='grow  p-2'>{index + 1}</td>
                      <td className='grow  p-2'>{member.name}</td>
                      <td className='grow  p-2'>{member.phone}</td>
               </tr>
              </>)
            })}
            <tr
            onClick={()=>SavePDF()} 
            className='bg-gray-200 p-2 block fixed right-10  rounded  bottom-0 text-center w-13 h-13 font-bold bottom-5 text-white cursor-pointer  bg-orange-500 hover:bg-blue-500'>
              SAVE PDF</tr>
           </tbody>
      </table>




        <img className='transition duration-150 ease-out md:ease-in  overflow-hidden hover:scale-105 '
        src='https://avada.website/tour-operator/wp-content/uploads/sites/169/2022/06/tour-operator-hero-1.jpg'></img>
        
        <div 
        className='bg-white overflow-hidden  px-4 pb-4'>
            
            <div className='pt-4'>
                  <span className='bg-orange-400 px-2  text-white rounded-full font-bold'>  {props.details.cost} tk</span>
            </div>

            <h3 className='text-xl pt-2 font-semibold text-green-500 text-left'>{props.details.form} to {props.details.to}</h3>
            <div className='flex justify-between pt-2'>
            <div className='flex flex-col text-gray-400 justify-between  font-medium  grow pb-2'> 
              
                 
                 <div className='flex space-x-5  py-1 text-sm'>
                 <div>{props.details.people.length}/{props.details.max}</div>
                 <div className='flex space-x-4 items-center'> FREE { available > 0 ?  <div className='font-bold text-green-600 text-[13px] text-center px-1 rounded-full'> {available}</div> : <span className='text-red-600 font-bold px-2'>{available}</span> }</div>
                 <div>{props.details.date}</div>
                 <div 
                 id={props.details._id + 'more'}
                 onClick={ ()=> {document.getElementById('Member'+props.details._id).classList.toggle('hidden')}}
                 className='hidden cursor-pointer hover:text-orange-400'
                 
                 >Members</div>
                 </div>
                

                  <div id={props.details._id} className='felx flex-col text-sm hidden grow'>
                      <div className='flex flex-col py-1 justify-around'>
                          <label htmlFor="NAME">Name</label>
                          <input id='NAME'
                          onChange={(event)=>setname(event.target.value)}
                          className='p-1 text-gray-00  outline-none border-b ' required type="text" />
                      </div>
                      <div className='flex flex-col py-1 justify-around'>
                              <label htmlFor="PHONE">Phone</label>
                              <input id='PHONE'
                              onChange={(event)=>setphone(event.target.value)}
                              className='p-1 text-gray-00  outline-none border-b ' required type="text" />
                      </div>
                 </div>

                 <button 
                 id={'join' + props.details._id}
                 onClick={() => Showmodal(props.details._id)}
                 className='bg-green-300 px-6  text-white p-1 float-right rounded-sm mt-6'>Join</button>

                 <button 
                 id={'submit' + props.details._id}
                 onClick={() =>joinTeam(props.details._id)}
                 className=' hidden bg-green-300 px-6  text-white p-1 float-right rounded-sm mt-6'>Submit</button>
               
            </div>
           
          
            </div>

        </div>
    </div>
  )
}
