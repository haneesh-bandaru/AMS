import React from 'react'
import { LayoutDashboard, FileCheck2, IndianRupee, MailWarning } from 'lucide-react';
import { Menu } from '@/components/Menu';
import CustomPieChart from '@/components/CustomPieChart';
import { Outlet } from 'react-router-dom';

const Dashboard = () => {
    const items = [
        {
          title: "Dashboard",
          route: "/admin",
          icon: LayoutDashboard
        },
        {
          title: "Requests",
          route: "requests",
          icon: FileCheck2
        },
        {
            title: "Payments",
            route: "payments",
            icon: IndianRupee
        },
        {
            title: "Issues",
            route: "issues",
            icon: MailWarning
        }
      ];
  return (
    <div>
        <div className='m-16'>
            <Menu items={items} />
        </div>
        <div className='flex flex-wrap justify-around'>
            <CustomPieChart title={"Hello"}/>
            <CustomPieChart title={"Hello"}/>
            <CustomPieChart title={"Hello"}/>
        </div>
          <Outlet />
    </div>  
  )
}

export default Dashboard