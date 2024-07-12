import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// import { Button } from "./ui/button";
import { LogOut } from "lucide-react";

export function Menu({ items }) {
  //   const navigate = useNavigate();
  

  return (
    <div className="bg-slate-800 flex justify-between">
      <div className="flex">
        {items.map((item, index) => (
          <Link key={index} to={item.route} className="block p-2 text-white">
            <p className="bg-slate-950 rounded-[10px] p-2 flex items-center hover:bg-primary">
              {item.icon && <item.icon size={14} className="mr-2" />}
              {item.title}
            </p>
          </Link>
        ))}
      </div>
      <div className="rounded-[10px]">
        <Link to="/login" className="block p-2 text-white">
          <p className="bg-slate-950 rounded-[10px] p-2 flex items-center hover:bg-primary">
            <LogOut size={16} />
            Logout
          </p>
        </Link>
      </div>
    </div>
  );
}

Menu.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      route: PropTypes.string.isRequired,
      icon: PropTypes.elementType
    })
  ).isRequired
};
