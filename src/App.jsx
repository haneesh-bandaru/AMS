// import { Home, User } from "lucide-react";
// import { Menu } from "./components/Menu";
// import Login from "./screens/Login";

import RegistrationForm from "./screens/Registration";

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
      {/* <Login /> */}
      {/* <Menu items={items} /> */}
      <RegistrationForm  />
    </div>
  );
};

export default App;
