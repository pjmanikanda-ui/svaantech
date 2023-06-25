import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CompleteTask = () => {
  const { tasksList } = useSelector((state) => state.taskStore);
  return (
    <div className="">
      <header className="bg-white rounded-tr-lg px-5 py-6 sticky top-0">
        <h2 className="text-3xl leading-7 text-gray-800">Completed Task</h2>
      </header>
      <main className="px-5 py-6">
        {tasksList.length ? (
          <div className="grid grid-cols-2 gap-5">
            {tasksList.map((task) => (
              <div
                key={task.id}
                className="bg-white rounded-md"
                style={
                  task.completed
                    ? {
                        background: "#ffd3d3",
                        display: "block",
                      }
                    : { display: "none" }
                }
              >
                <div className="flex justify-between items-center text-lg bg-slate-100 px-3 py-2 rounded-t-md">
                  <span
                    style={
                      task.completed
                        ? {
                            textDecoration: "line-through",
                            opacity: "0.5",
                          }
                        : { textDecoration: "none" }
                    }
                  >
                    {task.name}
                  </span>
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      className="form-checkbox rounded-full w-6
                          border-gray-300
                          text-indigo-600
                          shadow-sm
                          hover:cursor-pointer
                          focus:border-indigo-300
                          focus:ring
                          focus:ring-offset-0
                          focus:ring-indigo-200
                          focus:ring-opacity-50"
                      checked={task.completed}
                    />
                  </div>
                </div>
                <div
                  className="bg-white px-3 py-2 rounded-b-md"
                  style={
                    task.completed
                      ? {
                          textDecoration: "line-through",
                          opacity: "0.5",
                        }
                      : { textDecoration: "none" }
                  }
                >
                  <div className="text-gray-600 mb-2">{task.description}</div>
                  <div className="text-xs italic text-gray-400">
                    Due Date: {task.duedate}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="w-full text-center">
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900">
              No Completed Task
            </h1>
            <p className="mt-6 mb-4 text-base leading-7 text-gray-600">
              Create New Task
            </p>
            <Link
              to="/add-task"
              className="w-fit m-auto block rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
            >
              Add New Task
            </Link>
          </div>
        )}
      </main>
    </div>
  );
};

export default CompleteTask;
