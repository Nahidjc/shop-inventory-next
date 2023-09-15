"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import NavSidebar from './NavSidebar';
import { FiMenu } from 'react-icons/fi'
import { IoIosNotificationsOutline } from 'react-icons/io';
import { AiOutlineMessage } from 'react-icons/ai';



const Navbar = () => {
    const [active, setActive] = useState(false)
    const showMenu = () => {
        setActive(!active)
    }
    const [sidebaractive, setSidebarActive] = useState(false)
    const showSidebarMenu = () => {
        setSidebarActive(!sidebaractive)
    }
    return (
        <>
            <nav className="bg-white py-4">
                <div className=" px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            <button onClick={showSidebarMenu} type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                                <span className="sr-only">Open main menu</span>
                                 <FiMenu className="lg:hidden block h-6 w-8 cursor-pointer  " /> 
                            </button>
                        
                        </div>
                        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex flex-shrink-0 items-center">
                                <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" />
                            </div>
                        </div>
                        <div className="hidden lg:flex flex-1 items-center justify-center  sm:items-stretch sm:justify-start">
                            <input type="text" placeholder='Search Here' className=" border border-gray-400 rounded-lg" />
                        </div>


                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            <button type="button" className="relative rounded-full bg-white-800 p-1 text-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <AiOutlineMessage className="text-3xl mr-4"></AiOutlineMessage>
                            <p className="notification-text text-center text-white rounded-full text-sm h-7 w-7 bg-yellow-500 pl-1 pr-1 pt-1">10</p>
                            </button>
                            <button type="button" className="relative rounded-full bg-white-800 p-1 text-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <IoIosNotificationsOutline className="text-3xl mr-4"></IoIosNotificationsOutline>
                            <p className="notification-text text-center text-white rounded-full text-sm h-7 w-7 bg-yellow-500 pl-1 pr-1 pt-1">10</p>
                            </button>
                            <div className="relative ml-3">
                                <div>
                                    <button onClick={showMenu} type="button" className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                        <span className="absolute -inset-1.5"></span>
                                        <span className="sr-only">Open user menu</span>
                                        <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                                    </button>
                                </div>

                                <div className={active ? 'absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none' : 'hidden'} role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
                                    <a href="#" className="block px-4 py-1 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">Nahid Hasan </a>
                                    <a href="#" className="block mb-4 px-4  text-sm text-gray-400" role="menuitem" tabindex="-1" id="user-menu-item-0">nahid@gmail.com </a>
                                    <hr />
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-0">Your Profile</a>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="user-menu-item-1">Settings</a>
                                    <a href="#" className="block px-4 py-2 text-sm text-red-500" role="menuitem" tabindex="-1" id="user-menu-item-2">Sign out</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={sidebaractive ? '' : 'hidden'} id="mobile-menu">
                    <NavSidebar ></NavSidebar>
                </div>
                
            </nav>


        </>
    );
};

export default Navbar;