import FormRadio from "./FormRadio";

export default function DietPreference({ setProfileStep, user, setUser }) {
  function handleSubmit() {
    setProfileStep("macros");
  }

  const formName = "diet";

  return (
    <>
      <h2 className="flex flex-col text-5xl self-center mb-8">
        Dietary Preference
      </h2>
      <h3 className="font-extrabold text-md self-start px-12 my-4">
        Choose a type:
      </h3>
      <form
        className="flex flex-col w-full px-12"
        onChange={(e) =>
          setUser({ ...user, diet: e.target.id.toLowerCase()})
        }
      >
        <FormRadio radioFor="Keto" inputName={formName} icon="Icon" />
        <FormRadio radioFor="Paleo" inputName={formName} icon="Icon" />
        <FormRadio
          radioFor="US Nutrition Guidelines"
          inputName={formName}
          icon="Icon"
        />
        <FormRadio radioFor="None" inputName={formName} icon="Icon" />
      </form>
      <button
        className="w-full py-2 text-white text-2xl bg-blue-400 rounded hover:bg-item-hover self-center"
        onClick={handleSubmit}
      >
        Continue
      </button>
    </>
  );
}
