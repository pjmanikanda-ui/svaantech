import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import TaskInput from "./TaskInput";
import {
  removeTask,
  setSelectedTask,
  updateTask,
  completedTask,
} from "../slices/taskSlice";
import { Link } from "react-router-dom";

const modelStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
    zIndex: "99",
  },
};
Modal.setAppElement("#root");

const TaskList = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [duedate, setDuedate] = useState("");
  const [completed, setcompleted] = useState(false);
  const [id, setId] = useState(0);
  const [updatemodal, setUpdatemodal] = React.useState(false);

  const { tasksList } = useSelector((state) => state.taskStore);
  const dispatch = useDispatch();

  const { selectedTask } = useSelector((state) => state.taskStore);
  useEffect(() => {
    if (Object.keys(selectedTask).length !== 0) {
      setName(selectedTask.name);
      setDescription(selectedTask.description);
      setDuedate(selectedTask.duedate);
      setId(selectedTask.id);
      setcompleted(selectedTask.completed);
    }
  }, [selectedTask]);

  const handleUpdateTask = (task) => {
    task.preventDefault();
    dispatch(updateTask({ id, name, description, duedate, completed }));
    setUpdatemodal(false);
  };
  const handleDeleteTask = (task) => {
    dispatch(removeTask(task));
  };
  const handleCheck = (task) => {
    dispatch(completedTask(task));
  };

  function updateModal(task) {
    setUpdatemodal(true);
    dispatch(setSelectedTask(task));
  }
  function closeModal() {
    setUpdatemodal(false);
  }

  return (
    <div className="">
      <header className="bg-white rounded-tr-lg px-5 py-6 sticky top-0">
        <h2 className="text-3xl leading-7 text-gray-800">Task List</h2>
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
                      }
                    : { background: "white" }
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
                    <FaEdit
                      className="text-indigo-600 hover:cursor-pointer"
                      style={
                        task.completed
                          ? {
                              display: "none",
                            }
                          : { display: "block" }
                      }
                      onClick={() => updateModal(task)}
                    />
                    <FaRegTrashAlt
                      className="text-indigo-600 hover:cursor-pointer"
                      style={
                        task.completed
                          ? {
                              display: "none",
                            }
                          : { display: "block" }
                      }
                      onClick={() => handleDeleteTask(task)}
                    />
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
                      onChange={() => {
                        handleCheck(task);
                      }}
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
              No Task
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
      <Modal
        isOpen={updatemodal}
        onRequestClose={closeModal}
        style={modelStyles}
        contentLabel="Update Task"
      >
        <div className="bg-white">
          <div className="text-lg text-center font-semibold text-gray-900 mb-4">
            Are you sure?
          </div>
          <form action="#" method="POST">
            <div className="grid grid-cols-1 gap-y-4">
              <TaskInput
                name={name}
                setName={setName}
                description={description}
                setDescription={setDescription}
                duedate={duedate}
                setDuedate={setDuedate}
              />
            </div>
            <div className="flex mt-3">
              <button
                className="inline-flex w-full justify-center rounded-md bg-white px-3 py-2 mr-4 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                onClick={(task) => handleUpdateTask(task)}
              >
                UPDATE
              </button>
              <button
                className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500"
                onClick={closeModal}
              >
                NO
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default TaskList;
