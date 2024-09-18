import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const materialHeadingSlice = createSlice({
  name: "materialHeading",
  initialState,
  reducers: {
    setMaterialHeading: (state, action) => {
      state.data = action.payload;
    },
    addMaterialHeading: (state, action) => {
      const newData = action.payload; // Expecting a single object or array of objects
      const isDuplicate = state.data.some((item) => item._id === newData._id);
      if (!isDuplicate) {
        state.data.push(newData); // Agar duplicate nahi hai toh h i add karenge
      }
    },
    // Update an item
    updateMaterialHeading: (state, action) => {
      const updatedMaterialHeading = action.payload;
      const index = state.data.findIndex(
        (item) => item._id === updatedMaterialHeading._id
      );
      if (index !== -1) {
        state.data[index] = updatedMaterialHeading;
      }
    },

    // Delete an item
    deleteMaterialHeading: (state, action) => {
      const id = action.payload;
      console.log(id);
      state.data = state.data.filter((item) => item._id !== id);
    },
  },
});

export const { addMaterialHeading, setMaterialHeading, updatedMaterialHeading, deleteMaterialHeading } =
  materialHeadingSlice.actions;
export default materialHeadingSlice.reducer;
