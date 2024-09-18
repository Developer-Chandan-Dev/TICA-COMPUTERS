import { createSlice } from "@reduxjs/toolkit";

const dashboardNavbarDataSlice = createSlice({
  name: "dashboardNavbarData",
  initialState: {
    value: null,
  },
  reducers: {
    setDashboardNavbarData: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setDashboardNavbarData } = dashboardNavbarDataSlice.actions;

export default dashboardNavbarDataSlice.reducer;
