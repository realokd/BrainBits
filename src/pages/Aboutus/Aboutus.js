import React from 'react'
import Navbar from '../../components/Navbar/Navbar'

const Aboutus = () => {
  return (
    <div className='dark:bg-black h-screen'>
      <Navbar/>
        <div className='grid pt-10 mainfont lg:grid-cols-2 mx-10'>
        <div className='justify-center pt-8 lg:pl-32'>
        <h1 className='text-2xl font-semibold dark:text-white'>About us</h1>
        <p className='text-gray-900 pt-5 font-normal dark:text-white'>We are a group of enthusiastic people who work together for all around growth of an individual. We conduct workshops related to different tech domains and all encourage an individual to learn the things in the proper manner with expert understanding. We are the fastest growing community in Delhi NCR and mentors support from professional placed in elite companies..
</p>
<p className='dark:text-white'>Our members active on </p>
<div className='flex gap-4 pt-4'>
<img src='github.webp' alt='github ' className='h-10 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110   duration-300 ...'/>
<img src='gfg.webp' alt='gfg' className='h-10 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110   duration-300 ...'/>
<img src='codeshef.webp' alt='codeshef' className='h-10 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110   duration-300 ...'/>
<img src='codeforces.webp' alt='codeforces' className='h-10 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110   duration-300 ...'/>

    <img src='leetcode.webp' alt='leetcode' className='h-10 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110   duration-300 ...'/>
</div>
    </div>
    <div className=''>
      <img src='realabout.gif' alt='realabout' className='aboutimg'></img>
    </div>




</div>

    </div>
  )
}

export default Aboutus