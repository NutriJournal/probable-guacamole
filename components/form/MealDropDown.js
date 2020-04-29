export default function MealDropdown({ setValue, obj }) {
  const handleChange = (e) => {
    setValue({ ...obj, meal_type: e.target.value });
  };

  return (
    <select
      className="flex-1 bg-white my-1 py-2"
      name="meal"
      required=""
      onChange={handleChange}
    >
      <option className="text-gray-100" disabled="" defaultValue>
        Meal Type
      </option>
      <option value="breakfast">Breakfast</option>
      <option value="lunch">Lunch</option>
      <option value="dinner">Dinner</option>
      <option value="snack">Snack</option>
    </select>
  );
}
