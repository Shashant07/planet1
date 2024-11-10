import { createSlice } from "@reduxjs/toolkit";
import { toggelSidebar } from "../actions/sidebarActions";

const initialState = {
    isSidebarOpen: false
};

export const toggelSidebarSlice = createSlice({
    name: 'toggelSidebar',
    initialState,
    reducers: {
        handleToggelSidebar: toggelSidebar,
    },
});

// Action creators are generated fpr each case reducer function
export const { handleToggelSidebar} = toggelSidebarSlice.actions;

export default toggelSidebarSlice.reducers;