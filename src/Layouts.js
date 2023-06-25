import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Layouts = ({ navigation }) => {
  return (
    <>
      <div className="App container bg-indigo-100">
        <div className="flex flex-row h-screen p-10 rounded-lg">
          <Sidebar navigation={navigation} />
          <section className="flex flex-col grow rounded-r-lg overflow-y-auto">
            <div className="grow rounded-r-lg bg-gray-50">
              <Outlet />
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Layouts;
