import FormInput from "../form/FormInput.js";

const StandardCalc = ({ bmiInfo, setBmiInfo }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    bmiCalc(bmiInfo);
  };

  const bmiCalc = (bmiInfo) => {
    const userBMI = Math.ceil(
      703 *
        (Number(bmiInfo.weight) /
          Math.pow(Number(bmiInfo.height) * 12 + Number(bmiInfo.inch), 2))
    );
    // Number(bmiInfo.kilograms) / Math.pow((Number(bmiInfo.centimeters) / 100), 2)
    setBmiInfo({ ...bmiInfo, bmi: userBMI });
    return userBMI;
  };

  return (
    <div className="flex">
      <form onSubmit={handleSubmit}>
        <div className="flex">
          <div className="m-2 w-24">
            <FormInput
              type="text"
              label="Your Height"
              name="height"
              placeHolder="ft"
              setInput={setBmiInfo}
              data={bmiInfo}
            ></FormInput>
          </div>
          <div className="m-2 w-24">
            <FormInput
              type="text"
              label="In"
              name="inch"
              placeHolder="inch"
              setInput={setBmiInfo}
              data={bmiInfo}
            ></FormInput>
          </div>
          <div className="m-2 mx-6 w-24">
            <FormInput
              type="text"
              label="Your Weight"
              name="weight"
              placeHolder="lbs"
              setInput={setBmiInfo}
              data={bmiInfo}
            ></FormInput>
          </div>

          <div className="flex self-center">
            <button
              className="mr-96 m-6 text-xs text-white px-6 py-1 bg-pink-400 border-pink-400 rounded relative"
              htmlType="submit"
            >
              Calculate
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default StandardCalc;
