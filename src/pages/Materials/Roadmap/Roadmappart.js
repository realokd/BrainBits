import React from 'react'
// import Navbar from '../Navbar'
import RoadmapCard from './RoadmapCard'
import {Link} from 'react-router-dom'
import {BiArrowBack} from 'react-icons/bi'

function Roadmappart() {
  return (
<div className='dark:bg-black overflow-hidden'>
{/* <Navbar/> */}
<section className=''>
  <Link to="/material" className='relative left-4 mt-6 px-4'>
  {/* <img src='backbtn.webp' className='h-20 pt-6 pl-4' alt='brainbits'/> */}
  <BiArrowBack size={40} className="dark:text-white" />
  </Link>
</section>
   <section className='mt-10'>
   <h1 className='lg:text-5xl text-3xl  text-center  font-extrabold mx-6 headingfont dark:text-white '><span className='thecolor dark:text-[#8e05c2]'>Road</span>maps!</h1>
            {/* <p className='text-center pt-5 mx-8 lg:text-xl'>Hey folks, In this section of our community, we are going to post roadmaps for specific domains. The following roadmaps are designed with the help of experts in that domain. </p> */}
        </section>
        <section className="text-gray-600 body-font">
  <div className="container px-5 py-10 mx-auto cursor-pointer">
    <div className="flex flex-wrap py-4 m-4">
      <RoadmapCard link="https://miro.com/app/board/uXjVPEAGfM8=/?share_link_id=921354111487" rcardimg="frontend.jpg" category="Web-Development" heading="Front-End Devlopment" data="Everything you see on a website, like buttons, links, animations, and more, were created by a front end web developer. It is the front end developer's job to take the vision and design concept from the client and implement it through code."/>
      <RoadmapCard link="https://miro.com/app/board/uXjVPDFTq3g=/?share_link_id=40239008414" rcardimg="backend.jpg" category="Web-Development" heading="Back-End Devlopment" data="Web development activities that are done at the back end of programs are referred to as back end development. Back-end development covers server-side web application logic and integration and activities, like writing APIs, creating libraries, and working with system components"/>
      <RoadmapCard link="https://drive.google.com/file/d/1NkWD4_AjzjIdLgIHxp1K1Xm5LvXJ1l4r/view?usp=sharing" rcardimg ="programming.jpg" category="CP" heading="Comp-Programming" data="Competitive Programming is a mental sport which enables you to code a given problem under provided constraints. The purpose of this article is to guide every individual possessing a desire to excel in this sport. This article provides a detailed syllabus for Competitive Programming designed by industry experts to boost the preparation of the readers."/>
      <RoadmapCard rcardimg ="android.jpg" category="App Development" heading=" Android Devlopment" data="Everything you see on a website, like buttons, links, animations, and more, were created by a front end web developer. It is the front end developer's job to take the vision and design concept from the client and implement it through code."/>
      <RoadmapCard rcardimg ="flutter.webp" category="App Development" heading="Flutter " data="Everything you see on a website, like buttons, links, animations, and more, were created by a front end web developer. It is the front end developer's job to take the vision and design concept from the client and implement it through code."/>
      <RoadmapCard rcardimg ="native.png" category="App Development" heading="React-Native" data="Everything you see on a website, like buttons, links, animations, and more, were created by a front end web developer. It is the front end developer's job to take the vision and design concept from the client and implement it through code."/> 
    </div>
  </div>
</section>
</div>
  )
}

export default Roadmappart
