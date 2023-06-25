import React from "react";
import AddTaskForm from "./AddTaskForm";

const AddTask = () => {
  return (
    <div className="">
      <header className="bg-white rounded-tr-lg px-5 py-6 sticky top-0">
        <h2 className="text-3xl leading-7 text-gray-800">Add Task</h2>
      </header>
      <main className="px-5 py-6">
        <AddTaskForm />
      </main>
    </div>
  );
};

export default AddTask;
