import React from 'react'

function TeamCard(props) {
  return (
    
       <div className="p-2 lg:w-1/3 md:w-1/2 w-full transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110   duration-300 ...">

<div className="h-full flex backgroundcard dark:bg-[#1d1d1d] items-center  p-4 rounded-lg">
  <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={props.image}/>
  <div className="flex-grow">
  <h2 className="text-gray-900 title-font font-medium dark:text-white">{props.name}</h2>
    <p className="text-gray-500 dark:text-white">{props.position}</p> <a href={props.linkLinkedin} target="_blanck"><i class="fa-brands fa-linkedin fa-2x tele"></i></a> <a href={props.instalink} target="_blanck"><i class="fa-brands fa-instagram fa-2x insta">  </i></a>
  </div>
</div>
</div>

  )
}

export default TeamCard
