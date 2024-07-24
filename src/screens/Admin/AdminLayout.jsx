import { LayoutDashboard, FileCheck2, IndianRupee, MailWarning } from "lucide-react";
import { Menu } from "@/components/Menu";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  const items = [
    {
      title: "Dashboard",
      route: "dashboard",
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
    <div className="flex">
      <Menu items={items} className = "w-48"/>
      <Outlet />
    </div>
  );
};

export default AdminLayout;
