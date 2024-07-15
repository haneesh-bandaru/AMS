import { Menu } from "@/components/Menu";
import { LayoutDashboard, MailWarning, Receipt, Users } from "lucide-react";
import { Outlet, useNavigate } from "react-router-dom";

const EmpLayout = () => {
  const navigate = useNavigate();

  const EmpArr = [
    {
      title: "Home",
      route: "/emp-dashboard",
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

  function handleNavigation(route) {
    navigate(route);
  }

  return (
    <div>
      <Menu items={EmpArr}/>
      <Outlet />
    </div>
  );
};

export default EmpLayout;
