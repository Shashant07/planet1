import { configureStore } from "@reduxjs/toolkit";
import { toggelSidebarSlice } from "./slices/sidebarSlice";
import { combineReducers } from "redux"; // Import combineReducers

// Import other slices (example)
// import { anotherSlice } from "./slices/anotherSlice"; 

// Combine reducers
const rootReducer = combineReducers({
    toggelSidebar: toggelSidebarSlice,  // Add your additional reducers here
});

// Create the store with the combined reducer
export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({ serializableCheck: false }),
});