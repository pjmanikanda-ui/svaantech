import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./slices/taskSlice";

export const store = configureStore({
  reducer: {
    taskStore: taskReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
