import React from 'react'
import {NavLink} from 'react-router-dom'
import './Footer.css';

import {IoLocationSharp} from 'react-icons/io5';
import {GrMail} from 'react-icons/gr';
import {BsFacebook} from 'react-icons/bs'
import {FaInstagram} from 'react-icons/fa'
import {FaYoutube} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'




function Footer() {

  return (
    <div className='flex flex-row justify-center items-center h-[50vh] bg-[#1b2265]'>
        
         <div className=' flex flex-row gap-10 w-[100%] justify-center  mt-6 '>

          <div className="box1  w-[25%] flex flex-col gap-3">
            <p className='text-[#ffffff] text-xl font-semibold'>Get In Touch</p>
            <p className='text-white text-xl flex flex-row'> <IoLocationSharp/> Nyati Estate Road,Pune-60,Maharashtra,India</p>
            <p className='text-white text-xl'> <GrMail/> studentconnect@codevita.live</p>

            <div className='flex flex-row gap-10 mt-5 '>
 
            <div className='icon' >
            <NavLink  className='text-white text-xl ' to="https://www.facebook.com/codevitalive" > <BsFacebook/>  </NavLink>
          </div>
 
            <div className='icon'>
            <NavLink className='text-white text-xl' to="https://www.youtube.com/channel/UCi2AzaYuWFF5doDCoT2iWvA/featured" > <FaYoutube/> </NavLink>
          </div>
 
            <div className='icon'>
            <NavLink  className='text-white text-xl' to="https://www.instagram.com/codevitalive/" > <FaInstagram/> </NavLink>
          </div>
 
            <div className='icon'>
            <NavLink  className='text-white text-xl' to="https://www.linkedin.com/school/codevita-live/" > <FaLinkedin/> </NavLink>
          </div>

      
            </div>




          </div>


          <div className="box2 h-[100%] w-[30%] flex flex-col gap-4">

            <p className='text-white text-xl font-semibold'>Popular Links</p>

            <div className='w-[100%]'>
              <nav className='text-white text-lg flex flex-col gap-2'>
                <li className='text-white list-none footer-links' >&gt;  <NavLink  className='text-white ' to="/" > Home</NavLink> </li>
                <li className='text-white list-none footer-links' >&gt; <NavLink  className='text-white ' to="/skillbrewry" > Skill-Brewery</NavLink>  </li>
                <li className='text-white list-none footer-links' >&gt; <NavLink  className='text-white ' to="/datascience" >dsf</NavLink></li>
                <li className='text-white list-none footer-links' >&gt; <NavLink  className='text-white ' to="/cybersecurity" >cel</NavLink></li>
              </nav>
            </div>

          </div>

          <div className="box3 text-[#f67f23] text-5xl w-[18%] font-semibold ">

            
Never stop learning, because life never stops teaching!

          </div>

         </div>
      
    </div>
  )
}

export default Footer

