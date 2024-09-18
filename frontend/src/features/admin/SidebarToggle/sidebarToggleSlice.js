import { createSlice } from "@reduxjs/toolkit";

const sidebarToggleSlice = createSlice({
  name: "toggleSidebar",
  initialState: {
    value: "hidden",
  },
  reducers: {
    setToggleSidebar: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setToggleSidebar } = sidebarToggleSlice.actions;

export default sidebarToggleSlice.reducer;
