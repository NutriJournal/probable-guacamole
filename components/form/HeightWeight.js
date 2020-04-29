import FormInput from "./FormInput";

export default function HeightWeight({
  setProfileStep,
  user,
  setUser,
  handleSubmit,
}) {
  // TODO: Add Standard vs Metric selection, style, add SVG

  return (
    <>
      <h2 className="text-xl font-semibold mt-6">Enter Height and Weight</h2>
      <form className="flex flex-col w-full px-12">
        <FormInput
          name="height"
          label="Height"
          placeHolder="Height in Inches"
          type="number"
          required={true}
          setInput={setUser}
          data={user}
        />
        <FormInput
          name="weight"
          label="Weight"
          placeHolder="Weight in Lbs"
          type="number"
          required={true}
          setInput={setUser}
          data={user}
        />
      </form>
      <button
        className="w-full mt-4 py-2 text-white bg-blue-500 rounded hover:bg-item-hover"
        onClick={handleSubmit}
      >
        Continue
      </button>
    </>
  );
}
