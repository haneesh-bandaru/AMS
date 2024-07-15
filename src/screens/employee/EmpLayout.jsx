import { Outlet, useNavigate } from "react-router-dom";

const EmpLayout = () => {
  const navigate = useNavigate();

  const EmpArr = [
    {
      name: "Home",
      route: "/emp-dashboard"
    },
    {
      name: "Family Members",
      route: "addMembers"
    },
    {
      name: "Raise Complaint",
      route: "complaints"
    },
    {
      name: "History & Invoices",
      route: "history-invoices"
    }
    
  ];

  function handleNavigation(route) {
    navigate(route);
  }

  return (
    <div>
      <div className="bg-slate-800 p-2 flex justify-between text-white ">
        <ul className="flex gap-5">
          {EmpArr.map((item, index) => (
            <li
              key={index}
              onClick={() => {
                handleNavigation(item.route);
              }}
              className="bg-gray-100 text-slate-900 p-2 w-fit rounded-lg cursor-pointer hover:bg-accent"
            >
              {item.name}
            </li>
          ))}
        </ul>
        <p
          className="bg-gray-100 text-slate-900 p-2 w-fit rounded-lg cursor-pointer hover:bg-secondary"
          onClick={() => {
            handleNavigation("/");
          }}
        >
          Logout
        </p>
      </div>
      <Outlet />
    </div>
  );
};

export default EmpLayout;
