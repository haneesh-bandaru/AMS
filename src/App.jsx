import { Route, Routes } from "react-router-dom";
import Members from "./screens/employee/Members";
import Login from "./screens/Login";
import Registration from "./screens/Registration";
import EmpLayout from "./screens/employee/EmpLayout";
import Complaints from "./screens/employee/Complaints";
import HistoryAndInvoices from "./screens/employee/HistoryAndInvoices";

const App = () => {
  // const items = [
  //   {
  //     title: "Home",
  //     route: "home",
  //     icon: Home
  //   },
  //   {
  //     title: "Employees",
  //     route: "/employee",
  //     icon: User
  //   }
  // ];
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
      </Routes>
    </div>
  );
};

export default App;
