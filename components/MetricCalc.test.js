import bmiCalc from "./MetricCalc";
//arrange
describe("Metric BMI Calculator", () => {
  //act
  it("should output the correct BMI", () => {
      const bmiInfo = {
          kilograms: 144,
          centimeters: 153
      }
    //assert
    expect(bmiCalc(bmiInfo).userBMI).toBe(61.5);
  });
});