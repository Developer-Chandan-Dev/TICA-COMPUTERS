
// categoriesSlice.js
import { createSlice } from '@reduxjs/toolkit';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    list: [],
  },
  reducers: {
    addCategory: (state, action) => {
      state.list.push(action.payload);
    },
    setCategories: (state, action) => {
      state.list = action.payload;
    },
    // Additional reducers can be added here (e.g., removeCategory, updateCategory)
  },
});

export const { addCategory, setCategories } = categoriesSlice.actions;
export default categoriesSlice.reducer;

// ComponentA.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCategory } from './categoriesSlice';

const ComponentA = () => {
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addCategory(category));
    setCategory('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Enter category"
      />
      <button type="submit">Add Category</button>
    </form>
  );
};


export default ComponentA;
// ComponentA.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCategory } from './categoriesSlice';

const ComponentA = () => {
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addCategory(category));
    setCategory('');
  }a;

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Enter category"
      />
      <button type="submit">Add Category</button>
    </form>
  );
};

export default ComponentA;

// ComponentB.js
import React from 'react';
import { useSelector } from 'react-redux';

const ComponentB = () => {
  const categories = useSelector((state) => state.categories.list);

  return (
    <div>
      <h2>Categories</h2>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>{category}</li>
        ))}
      </ul>
    </div>
  );
};

export default ComponentB;
