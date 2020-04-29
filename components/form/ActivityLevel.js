import FormRadio from "./FormRadio";

export default function ActivityLevel({ setProfileStep, user, setUser }) {
  function handleSubmit() {
    setProfileStep("dietPreferences");
  }

  function handleChange(e) {
    setUser({ ...user, activityLevel: parseInt(e.target.value) });
  }

  return (
    <div className="flex flex-col">
      <h2 className="flex flex-col text-5xl self-center mb-8">
        How active are you?
      </h2>
      <form className="flex flex-col w-full px-12" onChange={handleChange}>
        <FormRadio radioFor="Not Very Active" inputName={1} />
        <p className="px-4">
          Spend most of the day sitting (little to no exercise)
        </p>
        <FormRadio radioFor="Lightly Active" inputName={2} />
        <FormRadio radioFor="Active" inputName={3} />
        <FormRadio radioFor="Very Active" inputName={4} />
        <FormRadio radioFor="None" inputName={""} />
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
