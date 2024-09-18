// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

function GenderCheckbox({ gender, setGender }) {
  const handleChange = (event) => {
    setGender(event.target.value);
  };

  return (
    <div className="inputBox my-2 w-full sm:w-auto">
      <label htmlFor="gender">Gender</label>
      <div className="px-2 my-2 w-full gap-x-4 sm:w-72  h-10 rounded border-2 border-slate-50 py-1 shadow-slate-700 flex items-center justify-start">
        <div className="flex items-center gap-x-2">
          <label htmlFor="male">Male</label>
          <input
            type="radio"
            className="w-4 h-4 cursor-pointer"
            id="male"
            value="male"
            name="gender"
            checked={gender === "male"}
            onChange={handleChange}
          />
        </div>
        <div className="flex items-center gap-x-2">
          <label htmlFor="female">Female</label>
          <input
            type="radio"
            className="w-4 h-4 cursor-pointer"
            id="female"
            value="female"
            name="gender"
            checked={gender === "female"}
            onChange={handleChange}
          />
        </div>
        <div className="flex items-center gap-x-2">
          <label htmlFor="other">Other</label>
          <input
            type="radio"
            className="w-4 h-4 cursor-pointer"
            id="other"
            value="other"
            name="gender"
            checked={gender === "other"}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
}

export default GenderCheckbox;
