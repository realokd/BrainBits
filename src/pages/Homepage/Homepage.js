import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer';
import Card from '../../components/Domains/Card';
import './Homepages.css';
const Homepage = (props) => {
  return (
    <div className='dark:bg-[#000000]'>
      <Navbar mode={props.mode} toggleMode = {props.toggleMode}/>
<section className=" sm:pt-6 sm:mx-10 leading-3 dark:text-white lg:px-32  body-font">
    {/* guhihi */}
  <div className="container mt-10 mx-auto flex px-5  md:flex-row flex-col items-center">
    <div className="lg:flex-grow  lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left  md:mb-0 items-center text-center">
      <h1 className="title-font dark:text-white text-2xl letterspacemy mainfont  mb  letterspacemy   "><span className=" frontheadcol text-2xl ">BrainBits </span> <span className='mainfont dark:text-white'>A Community with Competetive  Programers , Developers and Mentors .</span> <br></br> <span className='font-bold ' >KIET Group of Institutions</span> 
        {/* <br className="hidden lg:inline-block">readymadWe gluten</br> */}
      </h1>
      {/* <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p> */}
      
      <div className="flex justify-center mainfont">
        <a href='https://forms.gle/cjCWWXFrfLhUq7oD9'>
        <button className="  inline-flex   font-bold text-white dark:bg-[#8E05C2] bg-violet-500 border-0 py-2 px-6 focus:outline-none backgroundcard mt-5 hover:bg-indigo-600 rounded text-lg">Join our community</button>
        </a>
        {/* <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button> */}
      </div>
      <div className='flex mt-7 gap-3 cursor-pointer '>
        <a href="https://www.linkedin.com/company/brainbitsapp/?lipi=urn%3Ali%3Apage%3Ad_flagship3_messaging%3BX2B3316eSZqWOZZelPIppQ%3D%3D&original_referer=" target="_blanck "><i class="fa-brands fa-linkedin fa-2x tele"></i></a>
    
      <a href="https://instagram.com/thebrainbits?igshid=YmMyMTA2M2Y="><i class="fa-brands fa-instagram fa-2x  insta"></i></a>
      <a href="https://t.me/+GQr07DpdkIozZWY9" target="_blanck"> <i class="fa-brands fa-telegram fa-2x tele"></i></a>
      <a href="https://discord.gg/jekmFhnVFU" target="_blanck"><i className="fa-brands fa-discord fa-2x disc hover:text-[#8E05C2]"></i></a>
      <i class="fa-brands fa-twitter fa-2x twit"></i>
    
      </div>
    </div>

    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img className="object-cover object-center rounded w-96" alt="hero" src="aboutusm.gif"/>
    </div>
  </div>
</section>
<section>
<Card/>

<div className='grid pt-10 mainfont lg:grid-cols-2 mx-10'>
    <div className='justify-center pt-8 lg:pl-32'>
        <h1 className='text-2xl dark:text-white font-semibold'>About us</h1>
        <p className='text-gray-900 dark:text-white pt-5 font-normal'>We are a group of enthusiastic people who work together for all around growth of an individual. We conduct workshops related to different tech domains and all encourage an individual to learn the things in the proper manner with expert understanding. We are the fastest growing community in Delhi NCR and mentors support from professional placed in elite companies.
</p>
<p className='dark:text-white'>Our members active on </p>
<div className='flex gap-4 pt-4'>
<img alt='git' src='github.webp' className='h-10 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110   duration-300 ...'/>
<img alt='gfg' src='gfg.webp' className='h-10 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110   duration-300 ...'/>
<img alt='codeshef' src='codeshef.webp' className='h-10 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110   duration-300 ...'/>
<img alt='codeforces' src='codeforces.webp' className='h-10 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110   duration-300 ...'/>

    <img alt='leetcode' src='leetcode.webp' className='h-10 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110   duration-300 ...'/>
</div>
    </div>
    <div className=''>
      <img alt='realabout' src='realabout.gif' className='aboutimg'></img>
    </div>




</div>
</section>

<Footer/>
    </div>
  )
}

export default Homepage