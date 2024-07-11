import { Home, User } from "lucide-react";
import { Menu } from "./components/Menu";

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
      <Menu items={items} />
    </div>
  );
};

export default App;
