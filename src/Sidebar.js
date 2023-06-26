import React from "react";
import { Link, NavLink } from "react-router-dom";

const Sidebar = ({ navigation }) => {
  return (
    <aside className="flex flex-col w-80 rounded-l-lg bg-white overflow-y-auto">
      <div className="relative">
        <div className="sticky top-0 bg-violet-700 rounded-tl-lg p-2 z-0">
          <Link to="/">
            <img
              className="w-20 m-auto"
              src="https://svaantech.com/assets/images/svaaan-tech-logowebsmall1.png"
              alt=""
            />
          </Link>
        </div>
        <div className="flex flex-col items-center w-full px-2 text-gray-700">
          <div className="flex flex-col items-center w-full mt-3">
            {navigation.map((item) => (
              <NavLink
                exact="true"
                key={item.name}
                className="flex items-center w-full h-12 px-3 mt-2 rounded hover:bg-gradient-to-l from-violet-500 to-violet-700 hover:text-white"
                to={item.href}
              >
                <span>{item.icon}</span>
                <span className="ml-2 text-lg font-medium">{item.name}</span>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
