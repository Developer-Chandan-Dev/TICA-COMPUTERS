import {createSlice} from "@reduxjs/toolkit";

const contactDataSlice = createSlice({
    name: "contactData",
    initialState: {
      value: null,
    },
    reducers: {
      setContactData: (state, action) => {
        state.value = action.payload;
      },
    },
  });
  
  export const { setContactData } = contactDataSlice.actions;
  
  export default contactDataSlice.reducer;