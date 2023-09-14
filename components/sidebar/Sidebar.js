import React from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { CiSettings, CiUser,CiSearch } from 'react-icons/ci';
import { GoReport,GoProjectSymlink} from 'react-icons/go';
import { MdTask,MdOutlineDashboardCustomize} from 'react-icons/md';
const Sidebar = () => {
    return (
        <div className="hidden lg:block">
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
                    <div className="">
                        <div className="p-5 bg-gray-100 rounded-lg dark:bg-gray-800">
                            <h2 className="text-md font-medium text-blue-500 dark:text-white">Upgrade to pro </h2>

                            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus harum officia eligendi velit.</p>

                            <img className="object-cover w-full h-32 mt-2 rounded-lg" src="https://images.unsplash.com/photo-1658953229664-e8d5ebd039ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&h=1374&q=80" alt="" />
                        </div>
                    </div>
                </div>
            </aside>
        </div>
    );
};

export default Sidebar;