import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { LogOut, X, AlignJustify } from "lucide-react";
// import { Button } from "./ui/button";

export function Menu({ items }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 mx-6 mt-4 bg-zinc-800 rounded-xl px-2 z-50">
      <div className="flex items-center justify-between lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2 rounded text-white hover:text-gray-400"
        >
          <div className={`fill-current h-8 w-8 ${isOpen ? "hidden" : "block"}`}>
            <AlignJustify size={28} />
          </div>
          <div className={`fill-current h-3 w-3 mb-2 ${isOpen ? "block" : "hidden"}`}>
            <X size={28} />
          </div>
        </button>
      </div>
      <div className={`lg:flex lg:items-center lg:justify-between ${isOpen ? "block" : "hidden"}`}>
        <div className="flex flex-col lg:flex-row lg:items-center">
          {items.map((item, index) => (
            <Link key={index} to={item.route} className="block p-2 text-white">
              <p className="rounded-[10px] p-2 flex items-center hover:bg-primary">
                {item.icon && <item.icon size={14} className="mr-2" />}
                {item.title}
              </p>
            </Link>
          ))}
          {/* Logout button for smaller screens */}
          <div className="rounded-[10px] block lg:hidden">
            <Link to="/login" className="block p-2 text-white">
              <p className="bg-red-600 rounded-[10px] p-2 flex items-center hover:bg-red-800">
                <LogOut size={16} />
                Logout
              </p>
            </Link>
          </div>
        </div>
        {/* Logout button for larger screens */}
        <div className="rounded-[10px] hidden lg:flex lg:items-center">
          <Link to="/login" className="block p-2 text-white">
            <p className="bg-red-600 rounded-[10px] p-2 flex items-center hover:bg-red-800">
              <LogOut size={16} />
              Logout
            </p>
          </Link>
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
      icon: PropTypes.elementType,
    })
  ).isRequired,
};
