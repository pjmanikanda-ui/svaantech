import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasksList: [
    {
      id: "1",
      name: "Task 1",
      description: "Task 1 Learn HTML",
      duedate: "2023-06-01",
      completed: true,
    },
    {
      id: "2",
      name: "Task 2",
      description: "Task 2 Learn CSS",
      duedate: "2023-06-02",
      completed: true,
    },
    {
      id: "3",
      name: "Task 3",
      description: "Task 3 Learn JS",
      duedate: "2023-06-03",
      completed: false,
    },
    {
      id: "4",
      name: "Task 4",
      description: "Task 4 Learn React",
      duedate: "2023-06-03",
      completed: false,
    },
    {
      id: "5",
      name: "Task 5",
      description: "Task 5 Learn Angular",
      duedate: "2023-06-03",
      completed: false,
    },
  ],
  selectedTask: {},
};

const tasksSlice = createSlice({
  name: "tasksSlice",
  initialState,
  reducers: {
    addTask: (state, action) => {
      const id = Math.random() * 100;
      // const id = action.length ? action[action.length] + 1 : 1;
      // const id = action.payload.length
      //   ? action.payload[action.payload.length - 1].id + 1
      //   : 1;
      let task = { ...action.payload, id };
      state.tasksList.push(task);
    },
    removeTask: (state, action) => {
      state.tasksList = state.tasksList.filter(
        (task) => task.id !== action.payload.id
      );
    },
    updateTask: (state, action) => {
      state.tasksList = state.tasksList.map((task) =>
        task.id === action.payload.id ? action.payload : task
      );
    },
    completedTask: (state, action) => {
      // const completed = action.payload.completed;
      state.tasksList = state.tasksList.map((task) =>
        task.id === action.payload.id
          ? { ...task, completed: !task.completed }
          : task
      );
    },
    setSelectedTask: (state, action) => {
      state.selectedTask = action.payload;
    },
  },
});

export const {
  addTask,
  removeTask,
  updateTask,
  setSelectedTask,
  completedTask,
} = tasksSlice.actions;

export default tasksSlice.reducer;
