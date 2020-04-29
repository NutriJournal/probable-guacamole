export default function WeightGoalWeight({ user, setUser, setProfileStep }) {
  function handleSubmit() {
    setProfileStep("activityLevel");
  }

  function handleChange(e) {
    setUser({ ...user, [e.target.name]: parseInt(e.target.value) });
  }

  return (
    <div className="flex flex-col">
      <h1 className="flex flex-col text-5xl self-center mb-8">
        Set your Goals
      </h1>
      <form
        className="flex flex-col w-full self-center"
        onChange={handleChange}
      >
        <h3 className="font-medium text-3xl mt-6">Add your weight?</h3>
        <input
          className="border border-gray-400 px-2 py-4 mt-1 focus:border-pink-400 text-2xl"
          name="weight"
          placeholder="Enter weight"
          value={user.weight}
        />
        <h3 className="font-medium text-3xl mt-20">Add your goal weight</h3>
        <input
          className="border border-gray-400 px-2 py-4 mt-1 mb-20 focus:border-pink-400 text-2xl"
          name="goalWeight"
          placeholder="Enter Weight"
          value={user.goalWeight}
        />
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
