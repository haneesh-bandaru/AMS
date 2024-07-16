import { Route, Routes } from "react-router-dom";
import Members from "./screens/Employee/Members";
import Login from "./screens/Login";
import Registration from "./screens/Registration";
import EmpLayout from "./screens/Employee/EmpLayout";
import Complaints from "./screens/Employee/Complaints";
import HistoryAndInvoices from "./screens/Employee/HistoryAndInvoices";
import DashBoard from "./screens/Admin/DashBoard";
import Issues from "./screens/Admin/Issues";
import Payments from "./screens/Admin/Payments";
import Requests from "./screens/Admin/Requests";
import AdminLayout from "./screens/Admin/AdminLayout";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Registration />} />

        <Route path="/employee" element={<EmpLayout />}>
          <Route path="addMembers" element={<Members />} />
          <Route path="complaints" element={<Complaints />} />
          <Route path="history-invoices" element={<HistoryAndInvoices />} />
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
