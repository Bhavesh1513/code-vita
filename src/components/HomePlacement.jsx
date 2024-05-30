import React from 'react'
import adobe from '../assets/companiesimages/adobe.svg'
import amazon from '../assets/companiesimages/amazon.svg'
import expedia from '../assets/companiesimages/expedia.svg'
import facebook from '../assets/companiesimages/facebook.svg'
import google from '../assets/companiesimages/google.svg'
import microsoft from '../assets/companiesimages/microsoft.svg'
import morganstanley from '../assets/companiesimages/morganstanley.svg'
import oyo from '../assets/companiesimages/oyo.svg'
import samsung from '../assets/companiesimages/samsung.svg'
import walmart from '../assets/companiesimages/walmart.svg'
import flipkart from '../assets/companiesimages/flipkart.svg'



const HomePlacement = () => {
  return (
    <div className='w-[100%] bg-[#F5F5F4] flex flex-col'>
      <div className="flex justify-center items-center mt-10">
        <p className='text-blue-rgba text-3xl'>Our students are placed at</p>
      </div>
  
  <div className='flex flex-col gap-5 mb-10'>

      <div  className='flex flex-row gap-16 justify-center  mt-16 items-baseline'>

         <div className='w-[120px] h-[60px]'>
            <img className='w-[100%] h-[100%]' src={google} alt="" />
         </div>

         <div className='w-[120px] h-[60px]'>
            <img className='w-[100%] h-[100%]' src={microsoft} alt="" />
         </div>

         <div className='w-[120px] h-[60px]'>
            <img className='w-[100%] h-[100%]'  src={adobe} alt="" />
         </div>

         <div className='w-[120px] h-[60px]'>
            <img className='w-[100%] h-[100%]' src={walmart} alt="" />
         </div>

         <div className='w-[120px] h-[60px]'>
            <img className='w-[100%] h-[100%]' src={amazon} alt="" />
         </div>

         <div className='w-[120px] h-[60px]'>
            <img className='w-[100%] h-[100%]' src={oyo} alt="" />
         </div>

      </div>

      <div className='flex flex-row justify-center items-baseline gap-14'>

     <div className='w-[120px] h-[60px] '>
        <img className='w-[100%] h-[100%]' src={flipkart} alt="" />
     </div>

     <div className='w-[120px] h-[60px]'>
        <img className='w-[100%] h-[100%]' src={morganstanley} alt="" />
     </div>

     <div className='w-[120px] h-[60px]'>
        <img className='w-[100%] h-[100%]' src={samsung} alt="" />
     </div>

     <div className='w-[120px] h-[60px]'>
        <img className='w-[100%] h-[100%]' src={expedia} alt="" />
     </div>

     <div className='w-[120px] h-[60px]'>
        <img className='w-[100%] h-[100%]' src={facebook} alt="" />
     </div>


      </div>

      </div>


    </div>
  )
}

export default HomePlacement
