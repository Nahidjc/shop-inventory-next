
import Navbar from '@/components/navbar/Navbar';
import React from 'react';
import Sidebar from '@/components/sidebar/Sidebar'
import Dashboard from '@/components/Dashboard/Dashboard'
const NestedLayout = ({ children }) => {
  return (
    <div className="">
      <Navbar></Navbar>

      <div className="flex">
        <div className="">
          <Sidebar></Sidebar>
        </div>
        {
          children ? <main className="border border-gray-200 rounded-lg w-full  mt-12">{children}</main> :
            <div className="border border-gray-200 rounded-lg w-full  mt-12">
              <Dashboard></Dashboard>
            </div>
        }
      </div>

    </div>
  );
};

export default NestedLayout;