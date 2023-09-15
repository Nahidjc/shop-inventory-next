"use client"
import React from 'react';
import { BsBagCheck } from 'react-icons/bs';
import { BiMoney,BiHappyAlt } from 'react-icons/bi';
import { FaMountain } from 'react-icons/fa';
import { GiProfit } from 'react-icons/gi';
const Dashboard = () => {
    return (
        <div className="">
            <div className="flex gap-4 mt-4 items-center justify-center">
                <div class=" flex gap-8 items-center  w-full max-w-sm px-4 py-3 bg-white rounded-md border border-gray-300 dark:bg-gray-800">
                        <div className="h-12 w-12 bg-yellow-500 rounded-full ">
                        <BsBagCheck className="text-xl  text-white ml-3 mt-3"></BsBagCheck>
                        </div>
                        <div>
                            <p className="text-gray-900 font-semibold ">$ 10000 </p>
                            <p className="text-gray-500 mt-3">Total Purchase Due</p>
                        </div>

                </div>
                <div class=" flex gap-8 items-center  w-full max-w-sm px-4 py-3 bg-white rounded-md border border-gray-300 dark:bg-gray-800">
                        <div className="h-12 w-12 bg-red-500 rounded-full ">
                        <BiMoney className="text-2xl  text-white ml-3 mt-3"></BiMoney>
                        </div>
                        <div>
                            <p className="text-gray-900 font-semibold ">$ 15000 </p>
                            <p className="text-gray-500 mt-3">Total Sales Due</p>
                        </div>

                </div>
                <div class=" flex gap-8 items-center  w-full max-w-sm px-4 py-3 bg-white rounded-md border border-gray-300 dark:bg-gray-800">
                        <div className="h-12 w-12 bg-green-500 rounded-full ">
                        <FaMountain className="text-xl  text-white ml-3 mt-3"></FaMountain>
                        </div>
                        <div>
                            <p className="text-gray-900 font-semibold ">$ 10000 </p>
                            <p className="text-gray-500 mt-3">Total Sales Amount</p>
                        </div>

                </div>
                <div class=" flex gap-8 items-center  w-full max-w-sm px-4 py-3 bg-white rounded-md border border-gray-300 dark:bg-gray-800">
                        <div className="h-12 w-12 bg-violet-500 rounded-full ">
                        <GiProfit className="text-xl  text-white ml-3 mt-3"></GiProfit>
                        </div>
                        <div>
                            <p className="text-gray-900 font-semibold ">$ 10000 </p>
                            <p className="text-gray-500 mt-3">Profit </p>
                        </div>

                </div>
            </div>
            {/* client */}
            <div className="flex gap-4 mt-4 items-center justify-center">
                <div class=" flex gap-8 items-center  w-full max-w-sm px-4 py-3 bg-yellow-500 rounded-md border border-yellow-500 ">
                        <div className="h-12 w-12  rounded-full ">
                        <BiHappyAlt className="text-4xl  text-white "></BiHappyAlt>
                        </div>
                        <div>
                            <p className="text-xl text-white font-semibold ">10000 </p>
                            <p className=" text-white mt-3">Happy Clients</p>
                        </div>

                </div>
                <div class=" flex gap-8 items-center  w-full max-w-sm px-4 py-3 bg-blue-400 rounded-md border border-blue-400 dark:bg-gray-800">
                        <div className="h-12 w-12  rounded-full ">
                        <BiMoney className="text-4xl  text-white "></BiMoney>
                        </div>
                        <div>
                            <p className="text-xl text-white font-semibold ">150 </p>
                            <p className="text-white  mt-3">Suppliers</p>
                        </div>

                </div>
                <div class=" flex gap-8 items-center  w-full max-w-sm px-4 py-3 bg-gray-900 rounded-md border border-gray-900 dark:bg-gray-800">
                        <div className="h-12 w-12 bg-green-500 rounded-full ">
                        <FaMountain className="text-xl  text-white ml-3 mt-3"></FaMountain>
                        </div>
                        <div>
                            <p className="text-xl text-white font-semibold "> 10000 </p>
                            <p className="text-white mt-3">Total Invoices</p>
                        </div>

                </div>
                <div class=" flex gap-8 items-center  w-full max-w-sm px-4 py-3 bg-white rounded-md border border-gray-300 dark:bg-gray-800">
                        <div className="h-12 w-12 bg-violet-500 rounded-full ">
                        <GiProfit className="text-xl  text-white ml-3 mt-3"></GiProfit>
                        </div>
                        <div>
                            <p className="text-gray-900 font-semibold ">$ 10000 </p>
                            <p className="text-gray-500 mt-3">Profit </p>
                        </div>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;