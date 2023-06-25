import React, { useState } from "react";
import { addTask } from "../slices/taskSlice";
import { useDispatch } from "react-redux";
import TaskInput from "./TaskInput";

const AddTaskForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [duedate, setDuedate] = useState("");
  const [completed, setcompleted] = useState(false);
  const dispatch = useDispatch(addTask);

  const handleAddTask = (e) => {
    e.preventDefault();
    console.log({ name, description, duedate, completed });
    dispatch(addTask({ name, description, duedate, completed }));
    setName("");
    setDescription("");
    setDuedate("");
    setcompleted(false);
  };
  return (
    <form action="#" method="POST" className="mx-auto">
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
      <div className="mt-10">
        <button
          type="submit"
          className="block rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
          onClick={(e) => handleAddTask(e)}
        >
          Add Task
        </button>
      </div>
    </form>
  );
};

export default AddTaskForm;
