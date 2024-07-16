import { Route, Routes } from "react-router-dom";
import Members from "./screens/employee/Members";
import Login from "./screens/Login";
import Registration from "./screens/Registration";
import EmpLayout from "./screens/employee/EmpLayout";
import Complaints from "./screens/employee/Complaints";
import HistoryAndInvoices from "./screens/employee/HistoryAndInvoices";
import { Home, User } from "lucide-react";
import DashBoard from "./screens/Admin/DashBoard";
import Issues from "./screens/Admin/Issues";
import Payments from "./screens/Admin/Payments";
import Requests from "./screens/Admin/Requests";
import AdminLayout from "./screens/Admin/AdminLayout";

const App = () => {
  const items = [
    {
      title: "Home",
      route: "home",
      icon: Home
    },
    {
      title: "Employees",
      route: "/employee",
      icon: User
    }
  ];
  return (
    <div>
      <Routes>
        <Route path="/" Component={Login} />
        <Route path="/register" Component={Registration} />

        <Route path="/emp-dashboard" Component={EmpLayout}>
          <Route path="addMembers" Component={Members} />
          <Route path="complaints" Component={Complaints} />
          <Route path="history-invoices" Component={HistoryAndInvoices} />
        </Route>

        <Route path="/admin" Component={AdminLayout}>
        <Route path="dashboard" Component={DashBoard} />
      <Route path="issues" Component={Issues} />
      <Route path="payments" Component={Payments} />
      <Route path="requests" Component={Requests} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
