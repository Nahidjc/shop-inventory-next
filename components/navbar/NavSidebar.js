import React from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { CiSettings, CiUser,CiSearch } from 'react-icons/ci';
import { GoReport,GoProjectSymlink} from 'react-icons/go';
import { MdTask,MdOutlineDashboardCustomize} from 'react-icons/md';
const NavSidebar = () => {
    return (
        <div className="">
            <aside className="flex flex-col w-64 h-screen px-5 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">
                <div className="flex flex-col justify-between flex-1 mt-6">
                    <nav className="flex-1 -mx-3 space-y-3 ">
                        <a className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                            <AiOutlineHome></AiOutlineHome>

                            <span className="mx-2 text-sm font-medium">Home</span>
                        </a>

                        <a className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                            <MdOutlineDashboardCustomize></MdOutlineDashboardCustomize>

                            <span className="mx-2 text-sm font-medium">Dashboard</span>
                        </a>

                        <a className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                            <GoProjectSymlink></GoProjectSymlink>

                            <span className="mx-2 text-sm font-medium">Projects</span>
                        </a>

                        <a className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                            <MdTask></MdTask>
                            <span className="mx-2 text-sm font-medium">Tasks</span>
                        </a>

                        <a className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                            <GoReport></GoReport>
                            <span className="mx-2 text-sm font-medium">Reporting</span>
                        </a>

                        <a className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                            <CiUser></CiUser>
                            <span className="mx-2 text-sm font-medium">Users</span>
                        </a>

                        <a className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                            <CiSettings></CiSettings>
                            <span className="mx-2 text-sm font-medium">Setting</span>
                        </a>
                    </nav>

                    
                </div>
            </aside>
        </div>
    );
};

export default NavSidebar;
