import { useState } from "react";
import {Link} from 'react-router-dom'
import {FaMoon} from 'react-icons/fa'
import {BsFillSunFill} from 'react-icons/bs'
import { useSelector, useDispatch } from 'react-redux'
import { toggle } from '../../services/store/mode/modeSlice'

export default function Navbar(props) {
    const [navbar, setNavbar] = useState(false);
    const mode = useSelector((state) => state.mode.value)
    const dispatch = useDispatch()

    return (
        <nav className="w-full dark:bg-[#000000] navback mainfont backdrop-blur-sm">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        
                        <Link to="/" className="flex items-center">
                         <img src="logo.png" alt="" className="w-28" />
                            <h2 className="text-2xl dark:text-white font-bold">BrainBits</h2>
                        </Link>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 dark:text-white rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                            navbar ? "block" : "hidden"
                        }`}
                    >
                        <ul className="items-center text-gray-600 dark:text-white justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 font-semibold">
                            
                            <li className=" hover:text-blue-600" >
                               <Link to="/">Home</Link> 
                            </li>
                            <li className=" hover:text-blue-600" >
                            <Link to="/material">Material</Link> 
                            </li>
                            <li className="hover:text-blue-600" >
                            <Link to="/mentors">Mentors</Link> 
                            </li>
                            
                            <li className=" hover:text-blue-600" >
                            <Link to="/team">Team</Link> 
                            </li>
                            <li className=" hover:text-blue-600" >
                            <Link to="/about">About</Link> 
                            </li>
                            <li>
                                <span className="cursor-pointer" onClick={() => dispatch(toggle())}>{mode?<BsFillSunFill/>:<FaMoon/>}</span> 
                            </li>
                            {/* <li className="text-gray-600 hover:text-blue-600" >
                            <Link to="/compiler">Compiler</Link> 
                            </li> */}
                           
                            

                            
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}
