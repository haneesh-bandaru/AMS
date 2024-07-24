import { useState } from "react";
import PropTypes from "prop-types";
import { useLocation, useNavigate } from "react-router-dom";
import { Separator } from "./ui/separator";
import { X, AlignJustify } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

export function Menu({ items }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigation = route => {
    navigate(route);
    if (window.innerWidth <= 1024) {
      setIsOpen(false); // Close menu on mobile after navigation
    }
  };

  return (
    <div className="flex lg:flex-col h-fit lg:min-w-48 absolute lg:relative ">
      {/* Menu Button */}
      <div className="flex items-center  bg-primary justify-between p-4 h-fit bg-none lg:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-white">
          {isOpen ? <X size={24} /> : <AlignJustify size={24} />}
        </button>
      </div>
      <div className="lg:h-screen bg-primary flex flex-col justify-between w-48">
        <div
          className={`lg:flex lg:flex-col relative rounded-lg bg-primary  ${
            isOpen ? "block" : "hidden"
          } lg:block`}
        >
          <h1 className="text-primary-foreground font-bold p-4">AMS</h1>
          <Separator />
          <div className="flex flex-col ">
            {items.map((item, index) => (
              <div
                className="text-white mt-2 cursor-pointer"
                onClick={() => handleNavigation(item.route)}
                key={index}
              >
                <p
                  className={`p-2 mx-4 my-1 rounded-md ${
                    location.pathname === `/employee/${item.route}` ||
                    location.pathname === `/admin/${item.route}`
                      ? "bg-white text-primary hover:bg-white"
                      : "hover:bg-primary/90"
                  }`}
                >
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="text-white p-4">
          <Popover>
            <PopoverTrigger>UserProfile</PopoverTrigger>
            <PopoverContent className=" mx-1.5 w-36">
              <p className="p-1.5 rounded-lg hover:bg-slate-700 hover:text-primary-foreground cursor-pointer">Notifications</p>
              <Separator className="text-primary w-full" />
              <p className="p-1.5 rounded-lg hover:bg-slate-700 hover:text-primary-foreground">Logout</p>
            </PopoverContent>
          </Popover>
        </div>
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
