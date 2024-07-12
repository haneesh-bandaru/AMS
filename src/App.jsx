import { Route, Routes } from "react-router-dom";
import Members from "./screens/employee/Members";
import Login from "./screens/Login";
import Registration from "./screens/Registration";

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
        <Route path="/addMembers" Component={Members} />
      </Routes>
    </div>
  );
};

export default App;
