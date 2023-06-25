import React from "react";

const TaskInput = ({
  name,
  setName,
  description,
  setDescription,
  duedate,
  setDuedate,
}) => {
  return (
    <>
      <div>
        <label
          htmlFor="taskname"
          className="block text-md font-semibold text-gray-900"
        >
          Task Name
        </label>
        <div className="mt-2.5">
          <input
            type="text"
            id="taskname"
            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400"
            placeholder="Task Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      </div>
      <div className="sm:col-span-2">
        <label
          htmlFor="description"
          className="block text-md font-semibold text-gray-900"
        >
          Task Description
        </label>
        <div className="mt-2.5">
          <textarea
            id="description"
            rows={4}
            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400"
            placeholder="Task Discription"
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="duedate"
          className="block text-md font-semibold text-gray-900"
        >
          Due Date
        </label>
        <div className="mt-2.5">
          <input
            type="date"
            id="duedate"
            className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400"
            value={duedate}
            onChange={(e) => setDuedate(e.target.value)}
          />
        </div>
      </div>
    </>
  );
};

export default TaskInput;
