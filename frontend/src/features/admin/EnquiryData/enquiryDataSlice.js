import { createSlice } from "@reduxjs/toolkit";

const enquiryDataSlice = createSlice({
  name: "enquiryData",
  initialState: {
    value: null,
  },
  reducers: {
    setEnquiryData: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setEnquiryData } = enquiryDataSlice.actions;

export default enquiryDataSlice.reducer;
