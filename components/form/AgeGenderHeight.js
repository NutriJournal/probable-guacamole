import { useState } from "react";

import { Spacer } from "../Layout/LayoutPrimitives";

export default function AgeGender({ user, setUser, setProfileStep }) {
  function handleSubmit() {
    setProfileStep("weightGoalWeight");
  }

  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  return (
    <div className="flex flex-col">
      <h1 className="flex flex-col text-5xl self-center mb-8">
        Getting Personal
      </h1>
      <form
        className="flex flex-col w-full self-center"
        onChange={handleChange}
      >
        <h3 className="font-medium text-3xl mt-4">How old are you?</h3>
        <input
          className="border border-gray-400 px-2 py-4 mt-1 focus:border-blue-400 text-2xl"
          name="age"
          placeholder="Age"
          value={user.age}
        />
        <h3 className="font-medium text-3xl mt-8">How tall are you?</h3>
        <input
          className="border border-gray-400 px-2 py-4 mt-1 focus:border-blue-400 text-2xl"
          name="height"
          placeholder="Height"
          value={user.height}
        />
        <h3 className="font-medium text-3xl mt-8">How Do You Identify?</h3>
        <select
          className="border border-gray-400 px-2 py-4 mt-1 mb-20 focus:border-blue-400 text-2xl"
          name="gender"
          required=""
        >
          <option className="text-gray-100" disabled="" defaultValue>
            Gender
          </option>
          <option value={true}>Female</option>
          <option value={false}>Male</option>
          <option value="null">Prefer not to say</option>
        </select>
      </form>
      <button
        className="w-full py-2 text-white text-2xl bg-blue-400 rounded hover:bg-item-hover self-center"
        onClick={handleSubmit}
      >
        Continue
      </button>
    </div>
  );
}
