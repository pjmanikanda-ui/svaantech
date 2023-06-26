import "./App.css";
import Layouts from "./Layouts";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TaskList from "./task/TaskList";
import AddTask from "./task/AddTask";
import CompleteTask from "./task/CompleteTask";
import PageNotFound from "./PageNotFound";
import { Provider } from "react-redux";
import { store } from "./store";

import { FaListUl, FaRegPlusSquare, FaRegListAlt } from "react-icons/fa";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const navigation = [
    {
      name: "Task List",
      href: "/",
      icon: <FaListUl />,
    },
    {
      name: "Add Task",
      href: "/add-task",
      icon: <FaRegPlusSquare />,
    },
    {
      name: "Completed Task",
      href: "/completed-task",
      icon: <FaRegListAlt />,
    },
  ];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Provider store={store}>
      {isMobile ? (
        <main className="flex items-center justify-center h-screen bg-white px-6 py-24">
          <div className="text-center">
            <h3 className="mt-4 p-5 text-xl font-semibold text-gray-900 border border-dashed">
              Sorry, we couldn’t show in this viewport. Kindly use Large Device.
            </h3>
          </div>
        </main>
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layouts navigation={navigation} />}>
              <Route index element={<TaskList />} />
              <Route path="/add-task" element={<AddTask />} />
              <Route path="/completed-task" element={<CompleteTask />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      )}
    </Provider>
  );
}

export default App;
