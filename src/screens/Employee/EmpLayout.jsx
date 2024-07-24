import { Menu } from "@/components/Menu";
import { LayoutDashboard, MailWarning, Receipt, Users } from "lucide-react";
import { Outlet } from "react-router-dom";

const EmpLayout = () => {
  const EmpArr = [
    {
      title: "Dashboard",
      route: "dashboard",
      icon: LayoutDashboard
    },
    {
      title: "Family Members",
      route: "addMembers",
      icon: Users
    },
    {
      title: "Raise Complaint",
      route: "complaints",
      icon: MailWarning
    },
    {
      title: "History & Invoices",
      route: "history-invoices",
      icon: Receipt
    }
  ];

  return (
    <div className="flex">
      <Menu items={EmpArr} />
      <Outlet />
    </div>
  );
};

export default EmpLayout;
