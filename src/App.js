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

  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
