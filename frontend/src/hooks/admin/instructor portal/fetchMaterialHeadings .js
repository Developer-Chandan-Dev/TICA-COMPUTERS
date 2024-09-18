import { createAsyncThunk } from "@reduxjs/toolkit";

// Thunk to fetch material headings from API using initialUrl
export const fetchMaterialHeadings = createAsyncThunk(
  "materialHeadings/fetchMaterialHeadings",
  async (initialUrl) => {
    try {
      const response = await fetch(initialUrl);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log("API se fetched data:", data); // Debugging ke liye
      return data;  // Ye data Redux slice mein jayega
    } catch (error) {
      console.error("API fetch error:", error);
      throw error;
    }
  }
);
